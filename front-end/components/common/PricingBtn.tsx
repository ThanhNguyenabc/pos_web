import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
import { Button } from "./Button";

interface PricingBtnProps {
  color?: string;
  logo: StaticImageData;
  onClick?: () => void;
  desc: ReactElement | string;
  title?: string;
}
const PricingBtn = ({
  logo,
  desc,
  title,
  color = "secondary",
  onClick,
}: PricingBtnProps) => {
  return (
    <div
      className={`w-full h-full bg-white flex flex-col items-center border-2 rounded-lg `}
      style={{
        borderColor: color,
      }}
    >
      <div className="flex flex-col p-2 gap-1 items-center md:py-4">
        <Image src={logo} className="w-[100px] h-10 object-contain " alt="" />
        <p className="text-sm text-neutral-700 md:text-base ">{title}</p>
        <p className="text-md-bold text-neutral-900 md:text-xl">{desc}</p>
      </div>

      <Button
        classname="w-full rounded-none no-animation rounded-b-sm md:p-5  md:h-[60px]"
        title="Get Started"
        onClick={onClick}
        style={{
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default PricingBtn;
