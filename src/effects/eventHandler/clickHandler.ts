import {EventHandler, EventKind, EventCallback} from './types';

export class ClickHandler implements EventHandler<MouseEvent> {
  constructor(private env: Window) {}

  public on = (event: EventKind, callback: EventCallback<MouseEvent>): void =>
    this.env.addEventListener(event, callback);

  public off = (event: EventKind, callback: EventCallback<MouseEvent>): void =>
    this.env.removeEventListener(event, callback);
}
