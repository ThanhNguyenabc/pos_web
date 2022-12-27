import Image, { StaticImageData } from "next/image";
import React from "react";
import { BreadMeBtn } from "./BreadmeBtn";
import PricingBtn from "./PricingBtn";

interface RecommendPOSCardProps {
  logo: StaticImageData;
  systemos: Array<StaticImageData>;
  rating: number;
  desc?: string;
}
const RecommendPOSCard = ({
  logo,
  systemos,
  rating,
  desc,
}: RecommendPOSCardProps) => {
  const valueProgress = rating * 10;
  return (
    <div
      className={`card gap-4 inline-flex flex-col items-center rounded-2xl p-4 drop-shadow-lg bg-green-300`}
    >
      <div className="gap-2 flex flex-col items-start">
        <div className=" w-full flex flex-row h-10 items-center justify-between ">
          <div>
            <Image src={logo} alt="logo-pos" className="h-10 w-20" />
          </div>
          <div className="flex items-center gap-4">
            {systemos.map((item) => (
              <Image src={item} alt="logo-system" className="w-6 h-6" />
            ))}
            <div
              className="radial-progress text-primary border-neutral-200 "
              style={{ "--value": valueProgress, "--size": "2.5rem" }}
            >
              <p className=" text-neutral-900">{rating}</p>
            </div>
          </div>
        </div>
        <p className="w-full text-sm text-neutral-700 ">{desc}</p>
      </div>
      <div className="flex gap-2 w-full">
        <BreadMeBtn />
        <BreadMeBtn />
      </div>
    </div>
  );
};

export default RecommendPOSCard;
