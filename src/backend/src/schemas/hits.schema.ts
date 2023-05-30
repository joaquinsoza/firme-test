import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HitsDocument = HydratedDocument<Hits>;

@Schema()
export class Hits {
  @Prop()
  createdAt: Date;

  @Prop()
  title: string;

  @Prop()
  url: string;

  @Prop()
  author: string;

  @Prop()
  points: string;

  @Prop()
  story_text: string;

  @Prop()
  comment_text: string;

  @Prop()
  num_comments: string;

  @Prop()
  story_id: string;

  @Prop()
  story_title: string;

  @Prop()
  story_url: string;

  @Prop()
  parent_id: string;

  @Prop()
  objectID: string;
}

export const HitsSchema = SchemaFactory.createForClass(Hits);
