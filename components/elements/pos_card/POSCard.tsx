import React from "react";
import { useMediaQuery } from "hooks/useMediaQuery";
import { LG_SCREEN } from "utils/constants";
import dynamic from "next/dynamic";
import { POSCardProps, Priority, RecommendColorConfig } from "./POSCardTypes";

const POSCardDesktop = dynamic(() => import("./POSCard.desktop"), {
  ssr: false,
});
const POSCardMobile = dynamic(() => import("./POSCard.mobile"), {
  ssr: false,
});

const POSCard = (props: POSCardProps) => {
  const { screenSize } = useMediaQuery();

  let CardCmp = POSCardMobile;

  if (screenSize >= LG_SCREEN) CardCmp = POSCardDesktop;

  return (
    <CardCmp
      {...props}
      recommendTagProps={props.priority && RecommendColorConfig[props.priority]}
    />
  );
};

export default POSCard;
