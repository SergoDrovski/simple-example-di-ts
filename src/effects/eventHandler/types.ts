export type EventKind = 'click' | 'mouseup';
export type EventCallback<Event> = (event: Event) => void;

export interface EventHandler<Event> {
  on(event: EventKind, callback: EventCallback<Event>): void;
  off(event: EventKind, callback: EventCallback<Event>): void;
}
