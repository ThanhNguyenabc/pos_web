import React from "react";
import AppRoutes from "utils/routes";
import Link from "next/link";
import { useMediaQuery } from "hooks/useMediaQuery";
import { LG_SCREEN, MD_SCREEN } from "utils/constants";
import { POSCardProps } from "../pos_card/POSCardTypes";
import dynamic from "next/dynamic";

const POSCardDesktop = dynamic(() => import("../pos_card/POSCard.desktop"));
const RecommendPOSCardMobile = dynamic(
  () => import("./RecommendPOSCard.mobile")
);
const POSCardTablet = dynamic(() => import("../pos_card/POSCard.tablet"));

const RecommendPOSCard = (props: POSCardProps) => {
  const { slug, id } = props.data;
  const { screenSize } = useMediaQuery();

  let CardCmp = RecommendPOSCardMobile;

  if (screenSize >= LG_SCREEN) CardCmp = POSCardDesktop;
  else if (screenSize >= MD_SCREEN) CardCmp = POSCardTablet;

  return (
    <Link href={`${AppRoutes.POSDetailPage}/${id}/${slug}`} className="w-full">
      <CardCmp {...props} />
    </Link>
  );
};

export default RecommendPOSCard;
