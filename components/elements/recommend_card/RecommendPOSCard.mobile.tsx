import Image from "next/image";
import React from "react";
import { BreadMeBtn } from "../../common/BreadmeBtn";
import { twMerge } from "tailwind-merge";
import { POSCardProps } from "../pos_card/POSCard";
import { getProductIcon, getSystemIcon } from "utils/StringUtil";
import PricingBtn from "../../common/PricingBtn";
import ColorUtils from "utils/ColorUtils";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import useSideBar from "stores/useSideBar";
import { SideBarType } from "components/SideBar";

const RecommendPOSCardMobile = ({
  data,
  classname = "",
  onCardClick,
}: POSCardProps) => {
  const { openSideBar } = useSideBar();
  const overallRating = data.expert_opinion.overall;

  return (
    <div
      onClick={onCardClick}
      className={twMerge(
        `bg-white card gap-4 inline-flex flex-col rounded-2xl p-4 shadow-poscard cursor-pointer md:hidden lg:hidden ${classname}`
      )}
    >
      <div className="gap-2 flex flex-col items-start">
        <div className=" w-full flex flex-row h-10 items-center justify-between ">
          <Image
            src={getProductIcon(data.logo)}
            alt="logo-pos"
            width={80}
            height={40}
            className="object-contain"
          />
          <div className="flex items-center gap-4">
            {data.os_system?.map((item, index) => {
              const Icon = getSystemIcon(item);
              return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
            })}

            <div className=" h-10 w-10">
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
                <p className="txt-sm-bold">{overallRating}</p>
              </CircularProgressbarWithChildren>
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
          logo={getProductIcon(data.logo)}
          title="Monthly"
          color={ColorUtils.secondary}
          desc={`$${data.monthly_price}/month`}
          onClick={() => openSideBar(SideBarType.RequestDemo)}
        />
      </div>
    </div>
  );
};

export default RecommendPOSCardMobile;
