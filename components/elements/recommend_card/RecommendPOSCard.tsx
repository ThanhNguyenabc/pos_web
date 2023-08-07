import React from "react";
import { useMediaQuery } from "hooks/useMediaQuery";
import { LG_SCREEN, MD_SCREEN } from "utils/constants";
import dynamic from "next/dynamic";
import { POSCardProps } from "../pos_card/POSCardTypes";

const POSCardDesktop = dynamic(() => import("../pos_card/POSCard.desktop"));
const RecommendPOSCardMobile = dynamic(
  () => import("./RecommendPOSCard.mobile")
);
const POSCardTablet = dynamic(() => import("../pos_card/POSCard.mobile"));

const RecommendPOSCard = (props: POSCardProps) => {
  const { screenSize } = useMediaQuery();

  let CardCmp = RecommendPOSCardMobile;

  if (screenSize >= LG_SCREEN) CardCmp = POSCardDesktop;
  else if (screenSize >= MD_SCREEN) CardCmp = POSCardTablet;

  return <CardCmp {...props} />;
};

export default RecommendPOSCard;
