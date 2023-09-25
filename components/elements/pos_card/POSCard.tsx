import React from "react";
import { useMediaQuery } from "hooks/useMediaQuery";
import { LG_SCREEN } from "utils/constants";
import dynamic from "next/dynamic";
import { POSCardProps, Priority, RecommendColorConfig } from "./POSCardTypes";
import { AppRoutes } from "utils/routes";

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

  const detailURL =
    props.navigateTo || `${AppRoutes.POSDetailPage}/${props.data.slug}`;

  return (
    <CardCmp
      {...props}
      recommendTagProps={props.priority && RecommendColorConfig[props.priority]}
      navigateTo={detailURL}
    />
  );
};

export default POSCard;
