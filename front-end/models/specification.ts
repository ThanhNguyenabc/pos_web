import mongoose, { model, models } from "mongoose";

export interface Specification {
  id: string;
  businessSize: string;
  productId: string;
  posType: string;
  softwareType: string;
  freeTrial: string;
  merchantService: string;
  pricingModel: string;
  priceRange: string;
}

const ProductSchema = new mongoose.Schema<Specification>({
  id: String,
  businessSize: String,
  productId: String,
  posType: String,
  softwareType: String,
  freeTrial: String,
  merchantService: String,
  pricingModel: String,
  priceRange: String,
});

export const SpecificationModel =
  models?.Specification ||
  model<Specification>("Specification", ProductSchema, "specification");
