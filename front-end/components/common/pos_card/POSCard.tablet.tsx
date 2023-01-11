import React from "react";
import Image, { StaticImageData } from "next/image";
import { BreadMeBtn } from "../BreadmeBtn";
import { twMerge } from "tailwind-merge";
import PricingBtn from "../PricingBtn";
import ColorUtils from "utils/ColorUtils";
import { POSCardProps } from "./POSCard";

const POSCardTablet = ({
  logo,
  systemos,
  rating,
  desc,
  classname,
  onCardClick,
}: POSCardProps) => {
  const valueProgress = rating * 10;
  const radialStyle = {
    "--value": valueProgress,
    "--size": "3.75rem",
  } as React.CSSProperties;

  return (
    <div
      onClick={onCardClick}
      className={twMerge(
        `hidden w-full h-[244px] bg-white card gap-6 flex-row rounded-2xl p-6 drop-shadow-lg cursor-pointer md:flex lg:hidden ${classname}`
      )}
    >
      <div
        className="radial-progress text-primary border-neutral-200 "
        style={radialStyle}
      >
        <p className="txt-large-bold text-neutral-900">{rating}</p>
      </div>
      <div className="flex flex-col flex-1 items-start gap-2">
        <Image src={logo} alt="logo-pos" className="w-[120px] h-[60px]" />
        <p className="text-sm text-left text-neutral-900">{desc}</p>
        <div className="flex items-center gap-4">
          {systemos.map((item, index) => {
            const Icon = item;
            return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
          })}
        </div>
      </div>
      <div className="flex gap-2">
        <BreadMeBtn />
        <PricingBtn
          logo={logo}
          title="Monthly"
          desc={"$75/mo"}
          color={ColorUtils.secondary}
        />
      </div>
    </div>
  );
};

export default POSCardTablet;
