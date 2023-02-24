import React from "react";
import Image from "next/image";
import { IcChervonRight, IcFreePOS } from "assets/AssetUtil";
import { POSCardProps } from "./POSCard";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";
import ColorUtils from "utils/ColorUtils";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useOpenDemoPOSDialog from "stores/useOpenDemoPOSDialog";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";

export const POSCardMobile = ({
  overallRating,
  data,
  onCardClick,
}: POSCardProps) => {
  const { toogleOpen } = useOpenDemoPOSDialog();
  const router = useRouter();

  return (
    <div
      onClick={onCardClick}
      className={`flex flex-col w-full bg-white border-2 border-b-neutral-300 hover:border-secondary rounded-2xl drop-shadow-lg cursor-pointer md:hidden`}
    >
      <div className="flex flex-col p-4 gap-2">
        <div className="w-full  flex flex-row h-10 items-center justify-between ">
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
        <p className="w-full  text-sm text-neutral-700 ">{data.overview}</p>
      </div>
      <div className="flex w-full flex-row h-[40px] justify-between rounded-bl-2xl rounded-br-2xl">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.push(AppRoutes.BreadmeQuestionPage);
          }}
          className="flex flex-row bg-success flex-1 items-center justify-center gap-1 text-white rounded-bl-2xl"
        >
          <IcFreePOS className="text-2xl" />
          <p className=" text-xs font-semibold ">Get a POS FREE</p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toogleOpen();
          }}
          className="flex bg-secondary flex-1 items-center justify-center text-white  rounded-br-2xl"
        >
          <p className=" text-xs font-semibold ">
            ${data.monthly_price} Monthly
          </p>
        </button>
      </div>
    </div>
  );
};
