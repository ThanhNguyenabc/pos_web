import React, {
  ReactComponentElement,
  ReactElement,
  ReactSVGElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { BreadMeBtn } from "../BreadmeBtn";
import ColorUtils from "utils/ColorUtils";
import { twMerge } from "tailwind-merge";
import { POSCardProps } from "./POSCard";
import PricingBtn from "../PricingBtn";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import useOpenDemoPOSDialog from "stores/useOpenDemoPOSDialog";
import ViewMore from "../ViewMore";
import { IcCheckbox, IcClose } from "assets/AssetUtil";

const ItemHeight = 244;

const POSCardDesktop = ({
  overallRating,
  data,
  classname = "",
  onCardClick,
}: POSCardProps) => {
  const { toogleOpen } = useOpenDemoPOSDialog();

  return (
    <div
      onClick={onCardClick}
      className={twMerge(
        `hidden max-w-[1200px] h-[${ItemHeight}px] bg-white border-2 border-b-neutral-300 
        hover:border-secondary cursor-pointer card gap-6 flex-row rounded-2xl p-6 
        drop-shadow-lg w-full overflow-hidden lg:flex ${classname}`
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
      <div className="flex flex-col items-start gap-2">
        <Image
          src={ProductIcons[data.name]}
          alt="logo-pos"
          className="w-[120px] h-[60px]"
        />
        <p className="text-sm text-left text-neutral-900 max-w-[214px]">
          {data.overview}
        </p>
        <div className="flex items-center gap-4">
          {data.os_system?.map((item, index) => {
            const Icon = getSystemIcon(item);
            return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
          })}
        </div>
      </div>

      <div className="flex-1 relative overflow-y-hidden">
        <div className="flex gap-7">
          <div className="flex flex-col flex-1 text-left overflow-hidden">
            <p className="txt-sm-bold text-success">PROS</p>
            {data.pros?.map((item, index) => (
              <div
                className="flex flex-row items-center gap-2 mt-2"
                key={`${index}-item-pros`}
              >
                <IcCheckbox className=" text-success text-sm" />
                <p className="txt-sm flex-1 text-left text-neutral-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col flex-1 text-left h-full overflow-hidden">
            <p className="txt-sm-bold text-error">CONS</p>
            {data.cons?.map((item, index) => (
              <div
                className="flex flex-row items-center gap-2 mt-2"
                key={`${index}-item-cons `}
              >
                <IcClose className="text-error text-sm" />
                <p className="txt-sm text-neutral-700 flex-1"> {item}</p>
              </div>
            ))}
          </div>
        </div>
        <ViewMore className=" absolute bottom-0" />
      </div>

      <div className="flex gap-4 w-[300px]">
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

export default POSCardDesktop;
