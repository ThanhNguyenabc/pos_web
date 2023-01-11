import { StaticImageData } from "next/image";
import React, {
  ReactComponentElement,
  ReactElement,
  ReactSVGElement,
} from "react";
import POSCardDesktop from "./POSCard.desktop";
import { POSCardMobile } from "./POSCard.mobile";
import POSCardTablet from "./POSCard.tablet";

export interface POSCardProps {
  logo: StaticImageData;
  systemos: Array<React.ElementType>;
  rating: number;
  desc?: string;
  pros?: Array<string>;
  cons?: Array<string>;
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
