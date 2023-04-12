import { Injectable } from '@nestjs/common';
import LogBean from './beans/log-bean';
import LogDataDto from './beans/log-data-dto';

const logs: string[] = [];
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!<br>' + logs.join('<br>');
  }
  pushLogs(data: LogDataDto): void {
    const dataLogs = data.logs || [];
    dataLogs.forEach((logBean) => {
      const realLog = new LogBean();
      realLog.id = logBean.id;
      realLog.customField = logBean.customField;
      realLog.message = logBean.message;
      realLog.time = logBean.time;
      realLog.type = logBean.type;
      console.log(realLog.toString());
      logs.push(realLog.toString());
    });
  }
  deleteLogs(): void {
    logs.splice(0, logs.length);
    console.log('deleted');
  }
}
