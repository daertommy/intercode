class ScheduledValue
  class Timespan
    include Comparable
    include ActiveModel::Model
    include ActiveModel::Serializers::JSON
    attr_accessor :start, :finish

    def initialize(attributes = {})
      super

      raise "Finish must be after start" if start && finish && start >= finish
    end

    def attributes
      {
        start: start,
        finish: finish
      }
    end

    def start=(value)
      @start = convert_time_value(value)
    end

    def finish=(value)
      @finish = convert_time_value(value)
    end

    def contains?(timestamp)
      return false if start && timestamp < start
      return false if finish && timestamp >= finish

      true
    end

    def overlaps?(other)
      return false if finish && other.start && other.start >= finish
      return false if start && other.finish && start >= other.finish

      true
    end

    def <=>(other)
      case other
      when Timespan then compare_timespan(other)
      when Date, Time, DateTime then compare_datetime(other)
      end
    end

    def inspect
      "#<#{self.class.name}: #{self}>"
    end

    def to_s(format = nil)
      "#{start_description(format)} #{finish_description(format)}"
    end

    def start_description(format = nil)
      if start
        "from #{start.to_s(format)}"
      else
        'anytime'
      end
    end

    def finish_description(format = nil)
      if finish
        "up to #{finish.to_s(format)}"
      elsif start
        "indefinitely"
      end
    end

    private
    def compare_timespan(other)
      return 0 if other.start == start && other.finish == finish
      return nil if other.overlaps?(self)
      return -1 if finish && other.start && other.start >= finish
      return 1 if start && other.finish && other.finish <= start
    end

    def compare_datetime(other)
      return nil if contains?(other)
      return -1 if finish && other >= finish
      return 1 if start && other < start
      0
    end

    def convert_time_value(value)
      case value
      when String then Time.iso8601(value)
      else value
      end
    end
  end

  class TimespanWithValue < Timespan
    attr_accessor :value

    def attributes
      super.merge(value: value)
    end

    def to_s(format = nil)
      "#{value} #{super}"
    end
  end

  include ActiveModel::Model
  include ActiveModel::Serializers::JSON
  extend ActsAsCoder

  attr_reader :timespans

  def self.timespan_with_value_class
    TimespanWithValue
  end

  def self.always(value)
    timespan = timespan_with_value_class.new(start: nil, finish: nil, value: value)
    self.new(timespans: [timespan])
  end

  def attributes
    {
      timespans: timespans
    }
  end

  def attributes=(attributes)
    self.timespans = attributes.symbolize_keys[:timespans]
  end

  def timespans=(timespan_values)
    @timespans = SortedSet.new

    timespan_values.each do |timespan_value|
      timespan = case timespan_value
      when self.class.timespan_with_value_class then timespan_value
      when Hash then self.class.timespan_with_value_class.new(timespan_value)
      end

      self << timespan if timespan
    end

    @timespans
  end

  def <<(timespan_with_value)
    overlapping_timespan = timespan_overlapping(timespan_with_value)
    raise "Timespan for value #{overlapping_timespan} would overlap with #{timespan_with_value}" if overlapping_timespan

    @timespans << timespan_with_value
    @timespans_array = nil

    timespan_with_value
  end

  def set_value_for_timespan(start, finish, value)
    self << self.class.timespan_with_value_class.new(start: start, finish: finish, vaule: value)
    value
  end

  def value_at(timestamp)
    timespan = timespan_containing(timestamp)
    raise "No timespan found for #{timestamp}" unless timespan

    timespan.value
  end

  def next_value_change_after(timestamp)
    timespan = timespan_containing(timestamp)
    return nil unless timespan

    timespan.finish
  end

  def covers_all_time?
    timespans_array = timespans.to_a
    !timespans_array.first.start && !timespans_array.last.finish
  end

  private

  def timespans_array
    @timespans_array ||= timespans.to_a
  end

  def timespan_containing(timestamp)
    timespans_array.bsearch do |timespan|
      if timespan.contains? timestamp
        0
      else
        (timespan <=> timestamp) * -1
      end
    end
  end

  def timespan_overlapping(timespan)
    timespans.find { |my_timespan| my_timespan.overlaps? timespan }
  end
end