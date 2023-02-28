import mongoose, { model, models } from "mongoose";

export enum SystemOs {
  "iOS" = "iOS",
  "Android" = "Android",
  "Window" = "Window",
}

export interface ExpertOpinion {
  comment: string;
  value: number;
  easy: number;
  support: number;
  functionality: number;
  feedback: number;
}

export interface Product {
  id: string;
  name: string;
  logo: string;
  monthly_price: number;
  one_time_purchase: number;
  os_system?: Array<SystemOs>;
  overview?: string;
  intro?: string;
  pros: Array<string>;
  cons: Array<string>;
  expert_opinion: ExpertOpinion;
  pos_integrations?: string;
  software?: string;
  payment_processing?: string;
  pricing_desc?: Array<string>;
}

export const getOverallRating = ({
  easy,
  value,
  support,
  feedback,
}: ExpertOpinion): number => {
  const total = (easy + feedback + value + support) / 4;
  return Math.round(total * 10) / 10;
};

const ProductSchema = new mongoose.Schema<Product>({
  id: String,
  name: String,
  logo: String,
  monthly_price: Number,
  one_time_purchase: Number,
  os_system: [String],
  overview: String,
  intro: String,
  pros: [String],
  cons: [String],
  expert_opinion: {
    comment: String,
    value: Number,
    easy: Number,
    support: Number,
    functionality: Number,
    feedback: Number,
  },
  pos_integrations: String,
  software: String,
  payment_processing: String,
  pricing_desc: [String],
});

export const ProductModel =
  models?.ProductModel ||
  model<Product>("ProductModel", ProductSchema, "product");
// mongoose?.models?.["ProductModel"] ||
// mongoose.model<Product>("ProductModel", ProductSchema, "product");
