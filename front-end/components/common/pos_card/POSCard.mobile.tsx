import React from "react";
import Image, { StaticImageData } from "next/image";
import { IcChervonRight, IcFreePOS } from "assets/AssetUtil";
import { POSCardProps } from "./POSCard";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";

export const POSCardMobile = ({
  overallRating,
  data,
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
      className={`card w-full bg-white pr-3 pt-3 inline-flex flex-col rounded-2xl drop-shadow-lg cursor-pointer md:hidden`}
    >
      <div className="gap-3 flex flex-col items-start">
        <div className="w-full pl-3 flex flex-row h-10 items-center justify-between ">
          <Image
            src={ProductIcons[data.name]}
            alt="logo-pos"
            className="w-[120px] h-[60px]"
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
              <p className=" text-neutral-900">{overallRating}</p>
            </div>
          </div>
        </div>
        <p className="w-full pl-3 text-sm text-neutral-700 ">{data.overview}</p>
        <div className="flex w-full flex-row h-8 justify-between ">
          <div className="flex flex-row bg-success flex-1 items-center justify-center gap-1 text-white rounded-bl-2xl">
            <IcFreePOS className="text-2xl" />
            <p className=" text-xs font-semibold ">Get a POS FREE</p>
          </div>
          <div className="flex bg-secondary flex-1 items-center justify-center text-white rounded-tr-2xl">
            <p className=" text-xs font-semibold ">$75 Monthly</p>
          </div>
          <div className="flex w-12 justify-end pr-3 ">
            <IcChervonRight className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
