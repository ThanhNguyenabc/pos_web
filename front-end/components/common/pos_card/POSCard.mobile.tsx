import React from "react";
import Image from "next/image";
import { IcFreePOS } from "assets/AssetUtil";
import { POSCardProps, RecommendColor } from "./POSCard";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";
import useOpenDemoPOSDialog from "stores/useOpenDemoPOSDialog";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import CustomCircularProgress from "../CustomCircularProgress";
import RecommendTag from "../RecommendTag";
import { twMerge } from "tailwind-merge";

export const POSCardMobile = ({
  overallRating,
  data,
  onCardClick,
  priority,
  classname,
}: POSCardProps) => {
  const { toogleOpen } = useOpenDemoPOSDialog();
  const router = useRouter();

  return (
    <div
      onClick={onCardClick}
      className={twMerge(
        "relative flex flex-col w-full bg-white rounded-2xl drop-shadow-lg cursor-pointer md:hidden",
        classname
      )}
    >
      {priority && (
        <div className="absolute left-3 top-[-12px]">
          <RecommendTag
            {...RecommendColor[priority as keyof typeof RecommendColor]}
          />
        </div>
      )}
      <div className="flex flex-col p-4 gap-2">
        <div className="w-full  flex flex-row h-10 items-center justify-between ">
          <Image
            src={ProductIcons[data.name]}
            alt="logo-pos"
            className="w-[80px]  object-contain"
          />
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
      <div className="flex w-full flex-row h-[40px] justify-between">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.push(AppRoutes.BreadmeQuestionPage);
          }}
          className="flex flex-row bg-success flex-1 items-center justify-center gap-1 text-white rounded-bl-[14px]"
        >
          <IcFreePOS className="text-lg" />
          <p className="text-xs font-semibold ">Get a POS FREE</p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toogleOpen();
          }}
          className="flex bg-secondary flex-1 items-center justify-center text-white rounded-br-[14px]"
        >
          <p className=" text-xs font-semibold ">
            ${data.monthly_price} Monthly
          </p>
        </button>
      </div>
    </div>
  );
};
