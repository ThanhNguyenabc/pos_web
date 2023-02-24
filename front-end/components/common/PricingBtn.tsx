import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from "react";

interface PricingBtnProps {
  color?: string;
  logo: StaticImageData | string;
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
  const onClickItem = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick && onClick();
  };
  return (
    <div
      className={
        "w-full bg-white flex flex-col items-center border-2 rounded-lg"
      }
      style={{
        borderColor: color,
      }}
      onClick={onClickItem}
    >
      <div className="flex flex-col p-2 gap-1 items-center md:py-4">
        <Image src={logo} className="w-[100px] h-10 object-contain " alt="" />
        <p className="text-sm text-neutral-700 md:text-base ">{title}</p>
        <p className="txt-md-bold md:text-xl">{desc}</p>
      </div>

      <div
        className={`flex w-full items-center justify-center h-12 rounded-b-md md:h-16
        md:text-base lg:text-base font-semibold text-white ${color}`}
        style={{
          backgroundColor: color,
        }}
      >
        <p>Get Started</p>
      </div>
    </div>
  );
};

export default PricingBtn;
