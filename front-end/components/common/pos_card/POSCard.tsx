import { Product } from "models/product.model";
import { StaticImageData } from "next/image";
import React from "react";
import POSCardDesktop from "./POSCard.desktop";
import { POSCardMobile } from "./POSCard.mobile";
import POSCardTablet from "./POSCard.tablet";

export interface POSCardProps {
  data: Product;
  overallRating: number;
  classname?: string;
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
