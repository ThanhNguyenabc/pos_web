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
    <HeroSection className="px-0 md:px-0 lg:px-0 gap-12 md:py-14 md:gap-12 lg:gap-16">
      <div className=" gap-6 flex flex-col items-center text-center px-4 md:px-8 lg:w-[768px] mx-auto">
        <p className="txt-heading-medium md:text-5xl md:font-extrabold ">
          Our Top POS Systems
        </p>
        {body}
      </div>
      <div className="flex gap-12 md:gap-16 overflow-auto mx-auto">
        {ClientList.map((item, index) => (
          <Image
            src={item}
            alt={`client-${index}`}
            key={`client-${index}`}
            className="w-[180px] h-[90px]"
          />
        ))}
      </div>
    </HeroSection>
  );
};

export default ClientSection;
