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
  return (
    <div
      className={`w-full flex-1 bg-white flex flex-col items-center pt-1 border-${color} border-2 rounded-lg`}
    >
      <Image src={logo} className="w-20 h-10 mb-2" alt="" />
      <p className="text-sm text-neutral-700 ">{title}</p>
      <p className="text-md-bold text-neutral-900">{desc}</p>
      <Button
        classname="mt-2 w-full rounded-none no-animation rounded-b-md"
        type="SOLID_MEDIUM"
        title="Get Started"
        background={`bg-${color}`}
        onClick={onClick}
      />
    </div>
  );
};

export default PricingBtn;
