import React from "react";
import { useMediaQuery } from "hooks/useMediaQuery";
import { LG_SCREEN, MD_SCREEN } from "utils/constants";
import dynamic from "next/dynamic";
import { POSCardProps } from "./POSCardTypes";

const POSCardDesktop = dynamic(() => import("./POSCard.desktop"), {
  ssr: false,
});
const POSCardMobile = dynamic(() => import("./POSCard.mobile"), {
  ssr: false,
});
const POSCardTablet = dynamic(() => import("./POSCard.tablet"), {
  ssr: false,
});

const POSCard = (props: POSCardProps) => {
  const { screenSize } = useMediaQuery();

  let CardCmp = POSCardMobile;

  if (screenSize >= LG_SCREEN) CardCmp = POSCardDesktop;
  else if (screenSize >= MD_SCREEN) CardCmp = POSCardTablet;

  return <CardCmp {...props} />;
};

export default POSCard;
