import React from "react";
import Image from "next/image";
import { BreadMeBtn } from "../../common/BreadmeBtn";
import { twMerge } from "tailwind-merge";
import PricingBtn from "../../common/PricingBtn";
import ColorUtils from "utils/ColorUtils";
import { POSCardProps, RecommendColor } from "./POSCard";
import { getProductIcon, getSystemIcon } from "utils/StringUtil";
import useSideBar from "stores/useSideBar";
import CustomCircularProgress from "../../common/CustomCircularProgress";
import RecommendTag from "../../common/RecommendTag";
import { SideBarType } from "components/SideBar";

const POSCardTablet = ({
  data,
  classname,
  onCardClick,
  priority,
  recommendTagProps,
}: POSCardProps) => {
  const { openSideBar } = useSideBar();
  const overallRating = data.expert_opinion.overall;

  return (
    <div
      onClick={onCardClick}
      className={twMerge(
        `hidden w-full h-[244px] border-2 border-b-neutral-300 hover:border-secondary bg-white card gap-6 
        flex-row rounded-2xl p-6 shadow-poscard cursor-pointer md:flex lg:hidden ${classname}`
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
        id="card-tablet-progress"
        className="w-[60px]"
        value={overallRating}
      >
        <p className="txt-large-bold">{overallRating}</p>
      </CustomCircularProgress>

      <div className="flex flex-col flex-1 items-start gap-2">
        <Image
          src={getProductIcon(data.slug)}
          alt="logo-pos"
          width={120}
          height={60}
          className="w-[120px] h-[60px]  object-contain"
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
          logo={getProductIcon(data.slug)}
          title="Monthly"
          desc={`$${data.monthly_price}/mo`}
          color={ColorUtils.secondary}
          onClick={() => openSideBar(SideBarType.RequestDemo)}
        />
      </div>
    </div>
  );
};

export default POSCardTablet;
