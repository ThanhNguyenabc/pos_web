import {
  AldeloImg,
  AlohaImg,
  BrinkImg,
  CloverDuoImg,
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
  CloverDuoImg,
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
    <div className="flex flex-col gap-12 py-12 md:py-14 md:gap-12 lg:gap-16 overflow-hidden">
      <HeroSection className="pb-0 md:pb-0 lg:pb-0">
        <div className="flex flex-col gap-6 items-center text-center lg:w-[768px] m-auto">
          <p className="txt-heading-medium md:txt-heading-large">
            Our Top POS Systems
          </p>
          {body}
        </div>
      </HeroSection>
      <div className="flex  flex-row  gap-10 md:gap-16 animate-marquee-infinite">
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
