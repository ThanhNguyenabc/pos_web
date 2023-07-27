import { Product } from "models/product.model";
import { model, Model, models, Schema } from "mongoose";

const ProductSchema = new Schema<Product>({
  id: String,
  name: String,
  slug: String,
  monthly_price: Number,
  one_time_purchase: Number,
  os_system: [String],
  overview: Object,
  intro: Object,
  pros: Object,
  cons: Object,
  expert_opinion: Object,
  pos_integrations: Object,
  software: Object,
  payment_processing: Object,
  pricing_desc: Object,
  logo: String,
  image: String,
});

export const ProductModel: Model<Product> =
  models?.ProductModel ||
  model<Product>("ProductModel", ProductSchema, "products");

export const ProductInfoModel: Model<Product> =
  models?.ProductInfoModel ||
  model<Product>("ProductInfoModel", ProductSchema, "product_info");
