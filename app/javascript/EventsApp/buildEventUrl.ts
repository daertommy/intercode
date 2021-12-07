import parameterize from '../parameterize';

export default function buildEventUrl(event: { id: number | string; title?: string | null }): string {
  return `/events/${event.id}-${parameterize(event.title ?? '')}`;
}