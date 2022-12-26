import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ collection: 'products' })
export class Product {
  @Prop()
  name: String;

  @Prop()
  monthly_price: Number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
