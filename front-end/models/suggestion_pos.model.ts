import { model, models, Schema } from "mongoose";

export interface SuggestionPOS {
  [key: string]: {
    products: Array<string>;
  };
}

const SuggestionSchema = new Schema<SuggestionPOS>({
  type: Schema.Types.Mixed,
});

export const SuggestionPOSModel =
  models?.Suggestion ||
  model<SuggestionPOS>("Suggestion", SuggestionSchema, "pos-suggestion");
