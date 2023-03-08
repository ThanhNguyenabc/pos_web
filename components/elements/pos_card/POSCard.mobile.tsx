import React from "react";
import Image from "next/image";
import { IcFreePOS } from "assets/AssetUtil";
import { POSCardProps, RecommendColor } from "./POSCard";
import { getProductIcon, getSystemIcon } from "utils/StringUtil";
import useSideBar from "stores/useSideBar";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import CustomCircularProgress from "../../common/CustomCircularProgress";
import RecommendTag from "../../common/RecommendTag";
import { twMerge } from "tailwind-merge";
import { Button } from "../../common/Button";
import { SideBarType } from "components/SideBar";

export const POSCardMobile = ({
  data,
  onCardClick,
  priority,
  classname,
  recommendTagProps,
}: POSCardProps) => {
  const { openSideBar } = useSideBar();
  const router = useRouter();
  const overallRating = data.expert_opinion.overall;

  return (
    <div
      onClick={onCardClick}
      className={twMerge(
        "relative flex flex-col p-3 gap-4 w-full bg-white rounded-2xl shadow-poscard cursor-pointer md:hidden",
        classname
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
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-row h-10 items-center justify-between ">
          <div className=" relative w-20 h-20">
            <Image
              src={getProductIcon(data.slug)}
              alt="logo-pos"
              className="object-contain"
              fill
            />
          </div>

          <div className="flex items-center gap-4">
            {data.os_system?.map((item, index) => {
              const Icon = getSystemIcon(item);
              return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
            })}

            <CustomCircularProgress
              id="card-mobile-progress"
              className=" h-10 w-10"
              value={overallRating}
            >
              <p className="txt-sm-bold">{overallRating}</p>
            </CustomCircularProgress>
          </div>
        </div>
        <p className="w-full text-sm text-neutral-700 ">{data.overview}</p>
      </div>
      <div className="flex w-full flex-row h-[48px] gap-2 justify-between">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.push(AppRoutes.BreadmeQuestionPage);
          }}
          className="flex flex-row bg-success flex-1 items-center justify-center gap-1 text-white rounded-lg"
        >
          <IcFreePOS className="text-lg" />
          <p className="text-xs font-semibold ">Get a POS FREE</p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openSideBar(SideBarType.RequestDemo);
          }}
          className="flex bg-secondary flex-1 items-center justify-center text-white rounded-lg"
        >
          <p className=" text-xs font-semibold ">
            ${data.monthly_price} Monthly
          </p>
        </button>
      </div>
    </div>
  );
};
