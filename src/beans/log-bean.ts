import { gid } from '../utils/uuid.util';
export const enum LogType {
  VERBOSE = 'VERBOSE',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export default class LogBean {
  id: string;
  type: string;
  message: string;
  time: number;
  customField: string;
  constructor(type?: string, message?: string) {
    this.id = gid();
    this.type = type || '';
    this.message = message || '';
    this.time = new Date().getTime();
    this.customField = '';
  }
  toString(): string {
    return (
      this.id +
      '\t' +
      this.type +
      '\t' +
      this.message +
      '\t' +
      this.time +
      '\t' +
      this.customField
    );
  }
}
