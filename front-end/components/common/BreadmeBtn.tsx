import { BreadMeImg } from "assets/AssetUtil";
import React from "react";
import ColorUtils from "utils/ColorUtils";
import PricingBtn from "./PricingBtn";

export const BreadMeBtn = () => {
  return (
    <PricingBtn
      logo={BreadMeImg}
      color={ColorUtils.success}
      title="Get a POS"
      desc={<span className="text-success">FREE</span>}
    />
  );
};
