import mongoose, { model, models } from "mongoose";
import { CategoryType } from "./category_type";

export interface Category {
  id: string;
  title: string;
  path: string;
  image?: string;
  type?: CategoryType;
}

const CategorySchema = new mongoose.Schema<Category>({
  id: String,
  title: String,
  path: String,
  image: String,
  type: String,
});

export const CategoryModel =
  models?.Category || model<Category>("Category", CategorySchema, "category");
