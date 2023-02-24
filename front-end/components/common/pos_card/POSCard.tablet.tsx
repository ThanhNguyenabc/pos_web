import React from "react";
import Image, { StaticImageData } from "next/image";
import { BreadMeBtn } from "../BreadmeBtn";
import { twMerge } from "tailwind-merge";
import PricingBtn from "../PricingBtn";
import ColorUtils from "utils/ColorUtils";
import { POSCardProps } from "./POSCard";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import useOpenDemoPOSDialog from "stores/useOpenDemoPOSDialog";

const POSCardTablet = ({
  overallRating,
  data,
  classname,
  onCardClick,
}: POSCardProps) => {
  const { toogleOpen } = useOpenDemoPOSDialog();

  return (
    <div
      onClick={onCardClick}
      className={twMerge(
        `hidden w-full h-[244px] border-2 border-b-neutral-300 hover:border-secondary bg-white card gap-6 
        flex-row rounded-2xl p-6 drop-shadow-lg cursor-pointer md:flex lg:hidden ${classname}`
      )}
    >
      <div className=" h-[60px] w-[60px]">
        <CircularProgressbarWithChildren
          strokeWidth={10}
          maxValue={10}
          value={overallRating}
          styles={{
            path: {
              stroke: ColorUtils.primary,
              transition: "stroke-dashoffset 0.5s ease 0s",

              transform: "rotate(1turn)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: ColorUtils["neutral-100"],
              strokeLinecap: "butt",
              transform: "rotate(1turn)",
              transformOrigin: "center center",
            },
          }}
        >
          <p className="txt-large-bold">{overallRating}</p>
        </CircularProgressbarWithChildren>
      </div>

      <div className="flex flex-col flex-1 items-start gap-2">
        <Image
          src={ProductIcons[data.name]}
          alt="logo-pos"
          className="w-[120px] h-[60px]"
        />
        <p className="text-sm text-left text-neutral-900">{data.overview}</p>
        <div className="flex items-center gap-4">
          {data.os_system?.map((item, index) => {
            const Icon = getSystemIcon(item);
            return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
          })}
        </div>
      </div>
      <div className="flex gap-2 md:gap-4 h-full">
        <BreadMeBtn />
        <PricingBtn
          logo={ProductIcons[data.name]}
          title="Monthly"
          desc={`$${data.monthly_price}/mo`}
          color={ColorUtils.secondary}
          onClick={toogleOpen}
        />
      </div>
    </div>
  );
};

export default POSCardTablet;
