import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AxiosResponse } from 'axios';
import { Observable, catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getActive(): string {
    return 'Service status active';
  }

  // @Cron('0 10 * * * *') //Uncomment to use cron pd: once an hour
  handleCron() {
    console.log('Cron is running');
    this.getData();
  }

  //Get the data from hn.algolia.com
  //TO-DO: create types
  async getData(): Promise<any> {
    //Getting the data
    const request = this.httpService
      .get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs')
      .pipe(map((res) => res.data))
      .pipe(
        catchError((error) => {
          throw error;
        }),
      );
    //extract the response
    const response = await lastValueFrom(request);

    //Store data into db
    console.log('🚀 « response:', response);
    return response;
  }
}
