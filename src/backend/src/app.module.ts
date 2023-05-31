import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { Hits, HitsSchema } from './schemas/hits.schema';
import { HitsRepository } from './hits.repository';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    HttpModule,
    MongooseModule.forRoot(
      'mongodb://username:password@mongodb:27017/?authMechanism=DEFAULT&authSource=firme_db', //This should an enviroment variable
      {
        dbName: 'firme_db',
      },
    ),
    MongooseModule.forFeature([{ name: Hits.name, schema: HitsSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, HitsRepository],
})
export class AppModule {}
