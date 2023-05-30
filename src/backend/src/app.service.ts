import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AxiosResponse } from 'axios';
import { Observable, catchError, lastValueFrom, map } from 'rxjs';
import { HitsRepository } from './hits.repository';
@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly hitsRepository: HitsRepository,
  ) {}

  getActive(): string {
    return 'Service status active';
  }

  // @Cron('0 10 * * * *') //Uncomment to use cron pd: once an hour
  handleCron() {
    console.log('Cron is running');
    this.getData();
  }

  //Get the data from hn.algolia.com
  async getData(): Promise<string> {
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

    //gets database data
    const alreadyOnDB = await this.hitsRepository.find();

    //Store data into db if they are not added yet TO-DO: Add types
    response.hits.forEach((hit: any) => {
      const isOnDB = alreadyOnDB.some((item) => item.objectID === hit.objectID);
      //Check if entry is already on the database
      if (!isOnDB) {
        //Stores data
        this.hitsRepository.create({
          createdAt: hit.created_at,
          title: hit.title,
          url: hit.url,
          author: hit.author,
          points: hit.points,
          story_text: hit.story_text,
          comment_text: hit.comment_text,
          num_comments: hit.num_comments,
          story_id: hit.story_id,
          story_title: hit.story_title,
          story_url: hit.story_url,
          parent_id: hit.parent_id,
          objectID: hit.objectID,
        });
      }
    });

    return 'Data has been updated';
  }

  async fetchDatabase(): Promise<any> {
    const data = await this.hitsRepository.find();
    return data;
  }
}
