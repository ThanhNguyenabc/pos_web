import { BannerImage, IcRightArrow } from "assets/AssetUtil";
import Image from "next/image";
import React from "react";

export interface FindYourPosSectionParam {
  classname?: string;
  titlestyle?: string;
  background?: string;
}
export const FindYourPosSection = ({
  classname = "",
  titlestyle,
  background,
}: FindYourPosSectionParam) => {
  return (
    <div
      className={`flex-column items-center px-4 py-10 gap-4 ${background} ${classname}`}
    >
      <p className={`txt-heading-large text-center ${titlestyle}`}>
        Real advice from
        <span className="text-secondary"> real people </span>
      </p>
      <p className="text-center">
        Speak with a consultant today to find the best POS for your business
      </p>
      <button className="btn-md-primary w-full text-sm">Find your POS</button>
      <button className="btn-md-outline w-full text-sm border-none">
        Get POS for free
        <Image className="ml-2.5" height={13} src={IcRightArrow} alt="" />
      </button>
    </div>
  );
};
