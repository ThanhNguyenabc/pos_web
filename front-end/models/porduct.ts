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
