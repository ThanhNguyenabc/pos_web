import { Product } from "models/product.model";
import React from "react";
import POSCardDesktop from "./POSCard.desktop";
import { POSCardMobile } from "./POSCard.mobile";
import POSCardTablet from "./POSCard.tablet";

export const RecommendColor = {
  first: {
    tagColor: "bg-[#EAAA08]",
    border: "border-neutral-400",
  },
  second: {
    tagColor: "bg-neutral-400",
    border: "border-neutral-400",
  },
  third: {
    tagColor: "bg-[#80523D]",
    iconColor: "text-white",
    border: "border-[#80523D]",
  },
};

export enum Priority {
  "first" = "first",
  "second" = "second",
  "third" = "third",
}

export interface POSCardProps {
  data: Product;
  overallRating: number;
  classname?: string;
  priority?: Priority;
  onCardClick?: () => void;
}

const POSCard = (props: POSCardProps) => {
  return (
    <>
      <POSCardMobile {...props} />
      <POSCardTablet {...props} />
      <POSCardDesktop {...props} />
    </>
  );
};

export default POSCard;
