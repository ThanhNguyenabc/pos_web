import {
  CloverImg,
  ExtouchImg,
  IcRightArrow,
  LightSpeedImg,
} from "assets/AssetUtil";
import Image from "next/image";
import React, { ReactElement } from "react";

const ClientList = [
  CloverImg,
  ExtouchImg,
  LightSpeedImg,
  CloverImg,
  ExtouchImg,
  LightSpeedImg,
];

interface ClientSectionProps {
  body?: ReactElement;
}
const ClientSection = ({ body }: ClientSectionProps) => {
  return (
    <div className="flex flex-col gap-12 py-14 md:py-14 md:gap-12 lg:gap-16 lg:py-[100px] xl:py-[120px]">
      <div className=" gap-6 flex flex-col items-center text-center px-4 md:px-8">
        <p className="txt-heading-medium md:text-5xl md:font-extrabold ">
          Our Top POS Systems
        </p>
        {body}
      </div>
      <div className="flex gap-12 md:gap-16 overflow-auto px-4">
        {ClientList.map((item, index) => (
          <Image
            src={item}
            alt={`client-${index}`}
            key={`client-${index}`}
            className="w-[180px] h-[90px]"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
