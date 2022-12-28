import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
interface PricingBtnProps {
  color: string;
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
  const bodercolor = "border-" + color;
  return (
    <div
      className={`w-full h-full bg-white flex flex-col items-center ${bodercolor} border-2 rounded-lg `}
    >
      <div className="flex flex-col p-2 gap-1 items-center md:py-4">
        <Image src={logo} className="w-20 h-10" alt="" />
        <p className="text-sm text-neutral-700 md:text-base ">{title}</p>
        <p className="text-md-bold text-neutral-900 md:text-xl">{desc}</p>
      </div>

      <Button
        classname="w-full rounded-none no-animation rounded-b-md md:p-5  md:h-[60px]"
        type="SOLID_MEDIUM"
        title="Get Started"
        background={`bg-${color}`}
        onClick={onClick}
      />
    </div>
  );
};

export default PricingBtn;
