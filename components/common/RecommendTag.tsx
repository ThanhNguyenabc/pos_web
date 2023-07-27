import React from "react";
import IcRecommend from "assets/icons/ic_recommend.svg";
import { twMerge } from "tailwind-merge";

export interface RecommendTagProps {
  tagColor?: string;
  iconColor?: string;
  showIcon?: boolean;
}
const RecommendTag = ({
  tagColor,
  iconColor,
  showIcon = true,
}: RecommendTagProps) => {
  return (
    <div className=" flex flex-row w-fit">
      {showIcon && (
        <div
          className={twMerge(
            "flex justify-center items-center w-[32px] rounded-l-2xl",
            tagColor
          )}
        >
          <IcRecommend
            className={twMerge("text-sm text-neutral-900", iconColor)}
          />
        </div>
      )}

      <p className="flex-1 text-xs font-semibold  bg-[#095ACB] px-3 rounded-r-2xl text-white py-1">
        MOST RECOMMENDED
      </p>
    </div>
  );
};

export default RecommendTag;
