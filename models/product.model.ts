import Attribute from "./attribute";

export enum SystemOs {
  "iOS" = "iOS",
  "Android" = "Android",
  "Window" = "Window",
}

export interface ExpertOpinion {
  comment: Attribute;
  value: number;
  easy: number;
  support: number;
  functionality: number;
  feedback: number;
  overall: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  monthly_price: number;
  one_time_purchase: number;
  os_system?: Array<SystemOs>;
  overview?: Attribute;
  intro?: Attribute;
  pros: Attribute<Array<string>>;
  cons: Attribute<Array<string>>;
  expert_opinion: ExpertOpinion;
  pos_integrations?: Attribute;
  software?: Attribute;
  payment_processing?: Attribute;
  pricing_desc?: Attribute<Array<string>>;
  logo?: string;
  image?: string;
}
