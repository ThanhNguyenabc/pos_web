import React, {
  ReactComponentElement,
  ReactElement,
  ReactSVGElement,
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
        `hidden max-w-[1200px] h-[244px] bg-white border-2 border-b-neutral-300 hover:border-secondary cursor-pointer card gap-6 flex-row rounded-2xl p-6 drop-shadow-lg w-full overflow-hidden lg:flex ${classname}`
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
      <div className="flex flex-col items-start gap-2 flex-1">
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
      <div className="flex flex-col flex-1 text-left overflow-hidden">
        <p className="txt-sm-bold text-success">PROS</p>
        {data.pros?.map((item, index) => (
          <div
            className="flex flex-row items-center gap-2 mt-2"
            key={`${index}-item-pros`}
          >
            <div className="w-4 h-4 flex items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.54988 11.5749C5.41655 11.5749 5.29155 11.5539 5.17488 11.5119C5.05821 11.4706 4.94988 11.3999 4.84988 11.2999L0.549879 6.9999C0.366545 6.81657 0.278879 6.5789 0.286879 6.2869C0.295545 5.99557 0.391545 5.75824 0.574878 5.5749C0.758212 5.39157 0.991545 5.2999 1.27488 5.2999C1.55821 5.2999 1.79155 5.39157 1.97488 5.5749L5.54988 9.1499L14.0249 0.674902C14.2082 0.491569 14.4459 0.399902 14.7379 0.399902C15.0292 0.399902 15.2665 0.491569 15.4499 0.674902C15.6332 0.858236 15.7249 1.09557 15.7249 1.3869C15.7249 1.6789 15.6332 1.91657 15.4499 2.0999L6.24988 11.2999C6.14988 11.3999 6.04155 11.4706 5.92488 11.5119C5.80821 11.5539 5.68321 11.5749 5.54988 11.5749Z"
                  fill={ColorUtils.success}
                />
              </svg>
            </div>

            <p className="txt-sm text-left text-neutral-700">{item}</p>
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
            <div className="w-4 h-4 items-center flex">
              <svg
                width="12"
                height="12"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00934 11.3675L2.47601 17.9008C2.23156 18.1452 1.92045 18.2675 1.54268 18.2675C1.1649 18.2675 0.853786 18.1452 0.609342 17.9008C0.364897 17.6564 0.242676 17.3452 0.242676 16.9675C0.242676 16.5897 0.364897 16.2786 0.609342 16.0341L7.14268 9.5008L0.609342 2.96746C0.364897 2.72302 0.242676 2.41191 0.242676 2.03413C0.242676 1.65635 0.364897 1.34524 0.609342 1.1008C0.853786 0.856353 1.1649 0.734131 1.54268 0.734131C1.92045 0.734131 2.23156 0.856353 2.47601 1.1008L9.00934 7.63413L15.5427 1.1008C15.7871 0.856353 16.0982 0.734131 16.476 0.734131C16.8538 0.734131 17.1649 0.856353 17.4093 1.1008C17.6538 1.34524 17.776 1.65635 17.776 2.03413C17.776 2.41191 17.6538 2.72302 17.4093 2.96746L10.876 9.5008L17.4093 16.0341C17.6538 16.2786 17.776 16.5897 17.776 16.9675C17.776 17.3452 17.6538 17.6564 17.4093 17.9008C17.1649 18.1452 16.8538 18.2675 16.476 18.2675C16.0982 18.2675 15.7871 18.1452 15.5427 17.9008L9.00934 11.3675Z"
                  fill={ColorUtils.error}
                />
              </svg>
            </div>

            <p className="txt-sm text-neutral-700"> {item}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4  w-[300px]">
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
