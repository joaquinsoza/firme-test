import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getActive(): string {
    return this.appService.getActive();
  }

  @Get('test')
  getData(): any {
    return this.appService.getData();
  }
}
