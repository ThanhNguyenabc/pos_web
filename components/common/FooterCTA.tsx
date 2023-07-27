import React, { ReactElement } from "react";
import HeroSection from "./HeroSection";

interface FooterCTAProps {
  title?: ReactElement | string;
  des?: string;
  bgColor?: string;
  actions?: ReactElement;
  className?: string;
}
export const FooterCTA = ({ title, actions, des, bgColor }: FooterCTAProps) => {
  return (
    <HeroSection
      className={`py-14 gap-6 items-center md:rounded-2xl md:gap-8 md:my-16 lg:my:20 lg:gap-10 ${bgColor}`}
    >
      <div className="flex flex-col gap-4 items-center text-center lg:max-w-[800px]">
        <p className="txt-heading-medium md:txt-heading-large">{title}</p>
        {des && (
          <p className="txt-md-bold md:text-xl text-neutral-700">{des}</p>
        )}
      </div>
      <div className="w-full flex flex-col gap-4 justify-center md:flex-row max-w-xl">
        {actions}
      </div>
    </HeroSection>
  );
};
