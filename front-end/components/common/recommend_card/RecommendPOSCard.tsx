import { StaticImageData } from "next/image";
import React from "react";
import POSCardDesktop from "../pos_card/POSCard.desktop";
import RecommendPOSCardMobile from "./RecommendPOSCard.mobile";
import POSCardTablet from "../pos_card/POSCard.tablet";
import { POSCardProps } from "../pos_card/POSCard";


const RecommendPOSCard = (props: POSCardProps) => {
  return (
    <>
      <RecommendPOSCardMobile {...props} />
      <POSCardTablet {...props} />
      <POSCardDesktop {...props} />
    </>
  );
};

export default RecommendPOSCard;
