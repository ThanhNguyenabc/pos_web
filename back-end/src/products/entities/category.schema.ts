import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ collection: 'categories' })
export class Category {
  @Prop()
  name: String;

  @Prop()
  icon: String;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
