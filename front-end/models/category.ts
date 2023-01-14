import { CategoryType } from "./category_type";

export interface Category {
  _id: string;
  title: string;
  path: string;
  image?: string;
  type?: CategoryType;
}
