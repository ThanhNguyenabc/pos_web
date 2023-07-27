import React from "react";
import { useMediaQuery } from "hooks/useMediaQuery";
import { LG_SCREEN } from "utils/constants";
import dynamic from "next/dynamic";
import { POSCardProps } from "../POSCardTypes";

const POSCardDesktop = dynamic(() => import("./POSCardV2.desktop"), {
  ssr: false,
});
const POSCardMobile = dynamic(() => import("./POSCardV2.mobile"), {
  ssr: false,
});

const POSCardV2 = (props: POSCardProps) => {
  const { screenSize } = useMediaQuery();

  let CardCmp = POSCardMobile;

  if (screenSize >= LG_SCREEN) CardCmp = POSCardDesktop;

  return <CardCmp {...props} />;
};

export default POSCardV2;
