import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Hits, HitsDocument } from './schemas/hits.schema';

@Injectable()
export class HitsRepository {
  constructor(@InjectModel(Hits.name) private hitsModel: Model<HitsDocument>) {}

  async findOne(userFilterQuery: FilterQuery<Hits>): Promise<Hits> {
    return this.hitsModel.findOne(userFilterQuery);
  }

  async find(usersFilterQuery?: FilterQuery<Hits>): Promise<Hits[]> {
    return this.hitsModel.find(usersFilterQuery);
  }

  async create(user: Hits): Promise<Hits> {
    const newUser = new this.hitsModel(user);
    return newUser.save();
  }

  async findOneAndUpdate(
    userFilterQuery: FilterQuery<Hits>,
    user: Partial<Hits>,
  ): Promise<Hits> {
    return this.hitsModel.findOneAndUpdate(userFilterQuery, user, {
      new: true,
    });
  }
}
