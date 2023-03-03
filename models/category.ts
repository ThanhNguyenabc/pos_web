import mongoose, { Model, model, models } from "mongoose";
import { CategoryType } from "./category_type";

export interface Category {
  id: string;
  title: string;
  path: string;
  image?: string;
  type?: CategoryType;
  products: Array<string>;
}

const CategorySchema = new mongoose.Schema<Category>({
  id: String,
  title: String,
  path: String,
  image: String,
  type: String,
  products: [String],
});

export const CategoryModel: Model<Category> =
  models?.Category || model<Category>("Category", CategorySchema, "category");
