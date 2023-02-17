import React, { ReactElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Box from "./Box";
import HeroSection from "./HeroSection";

interface FooterCTAProps {
  title?: ReactElement;
  des?: string;
  bgColor?: string;
  actions?: ReactElement;
  className?: string;
}
export const FooterCTA = ({ title, actions, des, bgColor,className }: FooterCTAProps) => {
  return (
    <HeroSection className={`w-full px-0 lg:py-20 ${className}`}>
      <Box
        className={`py-14 md:py-16 lg:py-20 items-center gap-6 md:rounded-2xl md:gap-8  lg:gap-10 first-letter: ${bgColor}`}
      >
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="txt-heading-medium md:txt-heading-large">{title}</div>
          {des && (
            <p className="txt-md-bold md:text-xl text-neutral-700">{des}</p>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 justify-center">
          {actions}
        </div>
      </Box>
    </HeroSection>
  );
};
