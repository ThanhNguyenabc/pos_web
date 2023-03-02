import React from "react";
import Image from "next/image";
import { BreadMeBtn } from "../BreadmeBtn";
import ColorUtils from "utils/ColorUtils";
import { twMerge } from "tailwind-merge";
import { POSCardProps, RecommendColor } from "./POSCard";
import PricingBtn from "../PricingBtn";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";
import useOpenDemoPOSDialog from "stores/useOpenDemoPOSDialog";
import ViewMore from "../ViewMore";
import { IcCheckbox, IcClose } from "assets/AssetUtil";
import CustomCircularProgress from "../CustomCircularProgress";
import RecommendTag from "../RecommendTag";

const ItemHeight = 244;

const POSCardDesktop = ({
  overallRating,
  data,
  classname = "",
  priority,
  recommendTagProps,
  onCardClick,
}: POSCardProps) => {
  const { toogleOpen } = useOpenDemoPOSDialog();

  return (
    <div
      onClick={onCardClick}
      className={twMerge(
        `relative hidden max-w-[1200px] h-[${ItemHeight}px] bg-white border-2 border-b-neutral-300 
        hover:border-secondary cursor-pointer gap-6 flex-row rounded-2xl p-6 
        shadow-poscard w-full lg:flex ${classname}`
      )}
    >
      {priority && (
        <div className="absolute left-3 top-[-12px]">
          <RecommendTag
            {...RecommendColor[priority as keyof typeof RecommendColor]}
            {...recommendTagProps}
          />
        </div>
      )}
      <CustomCircularProgress
        id="card-desktop-progress"
        className="w-[60px] h-fit"
        value={overallRating}
      >
        <p className="txt-large-bold">{overallRating}</p>
      </CustomCircularProgress>

      <div className="flex flex-col items-start gap-2">
        <Image
          src={ProductIcons[data.name]}
          alt="logo-pos"
          className="w-[120px] h-[60px] object-contain"
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
