import { BreadMeImg } from "assets/AssetUtil";
import { useRouter } from "next/router";
import React from "react";
import ColorUtils from "utils/ColorUtils";
import AppRoutes from "utils/routes";
import PricingBtn from "./PricingBtn";

export const BreadMeBtn = () => {
  const router = useRouter();
  return (
    <PricingBtn
      logo={BreadMeImg}
      color={ColorUtils.success}
      title="Get a POS"
      desc={<span className="text-success">FREE</span>}
      onClick={() => router.push(AppRoutes.BreadmeQuestionPage)}
    />
  );
};
