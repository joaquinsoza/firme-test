import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getActive(): string {
    return this.appService.getActive();
  }

  @Post('update_data')
  getData(): Promise<string> {
    return this.appService.getData();
  }

  //TO-DO: Add types
  @Get('fetch')
  fetchDatabase(): any {
    return this.appService.fetchDatabase();
  }
}
