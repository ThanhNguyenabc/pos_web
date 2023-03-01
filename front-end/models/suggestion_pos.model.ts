import { model, models, Schema } from "mongoose";

export interface SuggestionPOS {
  answer: string;
  results: Array<string>;
}

const SuggestionSchema = new Schema<SuggestionPOS>({
  answer: String,
  results: [String],
});

export const SuggestionPOSModel =
  models?.Suggestion ||
  model<SuggestionPOS>("Suggestion", SuggestionSchema, "pos-suggestion");
