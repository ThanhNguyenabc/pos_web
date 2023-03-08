import Image from "next/image";
import React, { ReactElement } from "react";
import HeroSection from "./HeroSection";
import Marquee from "react-fast-marquee";
import { getProductIcon } from "utils/StringUtil";

const ClientList = [
  getProductIcon("revel-pos.png"),
  getProductIcon("aldelo-pos.png"),
  getProductIcon("aloha-pos.png"),
  getProductIcon("clover-pos.png"),
  getProductIcon("brink-pos.png"),
  getProductIcon("cloverflex-pos.png"),
  getProductIcon("extouch-pos.png"),
  getProductIcon("lightspeed-pos.png"),
  getProductIcon("ovvi-pos.png"),
  getProductIcon("toast-pos.png"),
  getProductIcon("upserve-pos.png"),
  getProductIcon("simphony-pos.png"),
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

      <Marquee>
        {ClientList.map((item, index) => (
          <div className=" relative w-[120px]  h-[60px] md:h-[90px] md:w-[180px]  mr-10 md:mr-16">
            <Image
              src={item}
              alt={`client-${index}`}
              key={`client-${index}`}
              className="object-contain"
              fill
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientSection;
