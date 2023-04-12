import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
// import LogBean from './beans/log-bean';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('push/logs')
  pushLogs(@Body() data): void {
    this.appService.pushLogs(data);
  }

  @Get('delete/logs')
  deleteLogs(): void {
    this.appService.deleteLogs();
  }
}
