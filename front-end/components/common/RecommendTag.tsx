import { IcRecommend } from "assets/AssetUtil";
import React from "react";
import { twMerge } from "tailwind-merge";

interface RecommendTagProps {
  tagColor?: string;
  iconColor?: string;
}
const RecommendTag = ({ tagColor, iconColor }: RecommendTagProps) => {
  return (
    <div className=" flex flex-row    w-fit">
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

      <p className="flex-1 text-xs font-semibold  bg-secondary px-3 rounded-r-2xl text-white py-1">
        MOST RECOMMENDED
      </p>
    </div>
  );
};

export default RecommendTag;
