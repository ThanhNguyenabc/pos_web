import Image, { StaticImageData } from "next/image";
import React from "react";
import { BreadMeBtn } from "../BreadmeBtn";
import { twMerge } from "tailwind-merge";
import { POSCardProps } from "../pos_card/POSCard";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";
import PricingBtn from "../PricingBtn";
import ColorUtils from "utils/ColorUtils";

const RecommendPOSCardMobile = ({
  data,
  overallRating,
  classname = "",
  onCardClick,
}: POSCardProps) => {
  const valueProgress = overallRating * 10;
  const radialStyle = {
    "--value": valueProgress,
    "--size": "2.5rem",
  } as React.CSSProperties;
  return (
    <div
      onClick={onCardClick}
      className={twMerge(
        `bg-white card gap-4 inline-flex flex-col rounded-2xl p-4 drop-shadow-lg cursor-pointer md:hidden lg:hidden ${classname}`
      )}
    >
      <div className="gap-2 flex flex-col items-start">
        <div className=" w-full flex flex-row h-10 items-center justify-between ">
          <Image
            src={ProductIcons[data.name]}
            alt="logo-pos"
            className="h-10 w-20"
          />
          <div className="flex items-center gap-4">
            {data.os_system?.map((item, index) => {
              const Icon = getSystemIcon(item);
              return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
            })}
            <div
              className="radial-progress text-primary border-neutral-200 "
              style={radialStyle}
            >
              <p className="txt-sm-bold text-neutral-900">{overallRating}</p>
            </div>
          </div>
        </div>
        <p className="w-full text-sm text-left text-neutral-700 ">
          {data.overview}
        </p>
      </div>
      <div className="flex gap-2 w-full">
        <BreadMeBtn />
        <PricingBtn
          logo={ProductIcons[data.name]}
          title="Monthly"
          color={ColorUtils.secondary}
          desc={`$${data.monthly_price}/month`}
        />
      </div>
    </div>
  );
};

export default RecommendPOSCardMobile;
