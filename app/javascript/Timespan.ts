import { DateTime, Duration, DurationObject, DurationUnit } from 'luxon';
import {
  compareTimesAscending,
  compareTimesDescending,
  humanizeTime,
  timesAreSameOrBothNull,
  formatLCM,
} from './TimeUtils';
import { chooseAmong, preferNull, notEmpty } from './ValueUtils';

export type TimeHopOptions = {
  unit: DurationUnit;
  offset?: Duration | DurationObject | null;
  duration?: number | null;
};

export interface FiniteTimespan extends Timespan {
  start: DateTime;
  finish: DateTime;
  clone(): FiniteTimespan;
  tz(timezoneName: string): FiniteTimespan;
  getLength(unit: DurationUnit): Duration;
  union(other: FiniteTimespan): FiniteTimespan;
  intersection(other: FiniteTimespan): FiniteTimespan;
  expandedToFit(other: FiniteTimespan): FiniteTimespan;
  expand(amount: Duration | DurationObject): FiniteTimespan;
  expandStart(amount: Duration | DurationObject): FiniteTimespan;
  expandFinish(amount: Duration | DurationObject): FiniteTimespan;
}

export function isFinite(timespan: Timespan): timespan is FiniteTimespan {
  return timespan.start != null && timespan.finish != null;
}

class Timespan {
  start: DateTime | null | undefined;

  finish: DateTime | null | undefined;

  static finiteFromStrings(start: string, finish: string): FiniteTimespan {
    return new Timespan(DateTime.fromISO(start), DateTime.fromISO(finish)) as FiniteTimespan;
  }

  static fromStrings(start?: string | null, finish?: string | null): Timespan {
    return new Timespan(
      start != null ? DateTime.fromISO(start) : null,
      finish != null ? DateTime.fromISO(finish) : null,
    );
  }

  static finiteFromDateTimes(start: DateTime, finish: DateTime): FiniteTimespan {
    return new Timespan(start, finish) as FiniteTimespan;
  }

  static fromDateTimes(start?: DateTime | null, finish?: DateTime | null): Timespan {
    return new Timespan(start, finish);
  }

  constructor(start?: DateTime | null, finish?: DateTime | null) {
    if (start && finish && start > finish) {
      throw new Error('Start cannot be after finish');
    }

    this.start = start;
    this.finish = finish;
  }

  tz(timezoneName: string) {
    return new Timespan(
      this.start != null ? this.start.setZone(timezoneName) : null,
      this.finish != null ? this.finish.setZone(timezoneName) : null,
    );
  }

  isFinite(): this is FiniteTimespan {
    return isFinite(this);
  }

  includesTime(time: DateTime) {
    return (
      (this.start == null || this.start <= time) && (this.finish == null || this.finish > time)
    );
  }

  includesTimespan(other: Timespan) {
    return (
      (this.start == null || (other.start != null && this.start <= other.start)) &&
      (this.finish == null || (other.finish != null && this.finish >= other.finish))
    );
  }

  overlapsTimespan(other: Timespan) {
    return (
      (this.start == null || other.finish == null || this.start < other.finish) &&
      (this.finish == null || other.start == null || other.start < this.finish)
    );
  }

  isSame(other: Timespan) {
    return (
      timesAreSameOrBothNull(this.start, other.start) &&
      timesAreSameOrBothNull(this.finish, other.finish)
    );
  }

  intersection(other: Timespan) {
    if (!this.overlapsTimespan(other)) {
      return null;
    }

    return new Timespan(
      chooseAmong([this.start, other.start], compareTimesDescending),
      chooseAmong([this.finish, other.finish], compareTimesAscending),
    );
  }

  union(other: Timespan) {
    return new Timespan(
      chooseAmong([this.start, other.start], preferNull(compareTimesAscending), true),
      chooseAmong([this.finish, other.finish], preferNull(compareTimesDescending), true),
    );
  }

  expandStart(amount: Duration | DurationObject) {
    return new Timespan(this.start?.minus(amount), this.finish);
  }

  expandFinish(amount: Duration | DurationObject) {
    return new Timespan(this.start, this.finish?.plus(amount));
  }

  expand(amount: Duration | DurationObject) {
    return new Timespan(this.start?.minus(amount), this.finish?.plus(amount));
  }

  expandedToFit = this.union;

  getLength(unit: DurationUnit = 'millisecond') {
    if (!this.isFinite()) {
      return null;
    }

    return this.finish.diff(this.start, unit);
  }

  humanizeStartInTimezone(timezoneName: string, format?: string) {
    if (this.start == null) {
      return 'anytime';
    }

    const start = this.start.setZone(timezoneName);
    if (format != null) {
      return formatLCM(start, format);
    }

    return humanizeTime(start, true);
  }

  humanizeFinishInTimezone(timezoneName: string, format?: string) {
    if (this.finish == null) {
      return 'indefinitely';
    }

    const finish = this.finish.setZone(timezoneName);
    if (format != null) {
      return formatLCM(finish, format);
    }

    if (this.start == null) {
      return humanizeTime(finish, true);
    }

    const start = this.start.setZone(timezoneName);
    const includeDayInFinish = finish.day !== start.day;

    return humanizeTime(finish, includeDayInFinish);
  }

  humanizeInTimezone(timezoneName: string, startFormat?: string, finishFormat?: string) {
    if (this.start == null && this.finish == null) {
      return 'always';
    }

    const start = this.humanizeStartInTimezone(timezoneName, startFormat);
    const finish = this.humanizeFinishInTimezone(
      timezoneName,
      this.start == null || this.finish == null || this.finish.day !== this.start.day
        ? startFormat
        : finishFormat || startFormat,
    );

    if (this.humanizeFinishInTimezone(timezoneName, startFormat) === start) {
      return start;
    }

    return `${start} - ${finish}`;
  }

  getTimeHopsWithin(
    timezoneName: string,
    { unit, offset = undefined, duration = undefined }: TimeHopOptions,
  ) {
    if (!this.isFinite()) {
      throw new Error(
        `getTimeHopsWithin called on an infinite Timespan ${this.humanizeInTimezone(timezoneName)}`,
      );
    }

    const timeBlocks: DateTime[] = [];
    const stepDuration = Duration.fromObject({ [unit]: duration ?? 1 });
    let now = this.start.setZone(timezoneName).startOf(unit);
    while (now < this.finish) {
      let timeHop = now;
      if (offset) {
        timeHop = timeHop.plus(offset);
      }
      timeBlocks.push(timeHop);
      now = now.plus(stepDuration);
    }

    return timeBlocks;
  }

  getTimespansWithin(
    timezoneName: string,
    { unit, offset = undefined, duration = undefined }: TimeHopOptions,
  ): FiniteTimespan[] {
    const thisTimespan = this;
    if (!thisTimespan.isFinite()) {
      throw new Error(
        `getTimespansWithin called on an infinite Timespan ${thisTimespan.humanizeInTimezone(
          timezoneName,
        )}`,
      );
    }

    const stepDuration = Duration.fromObject({ [unit]: duration ?? 1 });
    const timeHops = thisTimespan.getTimeHopsWithin(timezoneName, { unit, offset, duration });
    return timeHops
      .map((timeHop, i) => {
        if (i < timeHops.length - 1) {
          return Timespan.finiteFromDateTimes(timeHop, timeHops[i + 1]).intersection(thisTimespan);
        }

        if (offset) {
          return Timespan.finiteFromDateTimes(
            timeHop,
            timeHop.minus(offset).plus(stepDuration).plus(offset),
          ).intersection(thisTimespan);
        }

        return Timespan.finiteFromDateTimes(timeHop, timeHop.plus(stepDuration)).intersection(
          thisTimespan,
        );
      })
      .filter(notEmpty)
      .map((timespan) => timespan.tz(timezoneName));
  }

  clone() {
    return new Timespan(
      this.start != null ? this.start : null,
      this.finish != null ? this.finish : null,
    );
  }
}

export default Timespan;
