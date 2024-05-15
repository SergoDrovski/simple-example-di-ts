import {Logger, LogEntry} from './types';

export class AlertLogger implements Logger {
  public log = (message: LogEntry): void => alert(message);
}
