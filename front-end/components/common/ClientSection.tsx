import {
  AldeloImg,
  AlohaImg,
  BrinkImg,
  CloverImg,
  ExtouchImg,
  IcRightArrow,
  LightSpeedImg,
  OvviImg,
  RevelImg,
  SimphonyImg,
  ToastImg,
  UpserveImg,
} from "assets/AssetUtil";
import Image from "next/image";
import React, { ReactElement } from "react";
import HeroSection from "./HeroSection";

const ClientList = [
  RevelImg,
  AldeloImg,
  CloverImg,
  OvviImg,
  ExtouchImg,
  LightSpeedImg,
  ToastImg,
  SimphonyImg,
  BrinkImg,
  AlohaImg,
  UpserveImg,
];

interface ClientSectionProps {
  body?: ReactElement;
}
const ClientSection = ({ body }: ClientSectionProps) => {
  return (
    <div className="flex flex-col gap-12 py-12 md:py-14 md:gap-12 lg:gap-16">
      <HeroSection className="pb-0 md:pb-0 lg:pb-0">
        <div className="flex flex-col gap-6 items-center text-center lg:w-[768px]">
          <p className="txt-heading-medium md:text-5xl md:font-extrabold ">
            Our Top POS Systems
          </p>
          {body}
        </div>
      </HeroSection>
      <div className="flex flex-row  gap-10 md:gap-16 overflow-auto">
        {ClientList.map((item, index) => (
          <Image
            src={item}
            alt={`client-${index}`}
            key={`client-${index}`}
            className="w-[120px] h-[60px] md:w-[180px] md:h-[90px]"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
