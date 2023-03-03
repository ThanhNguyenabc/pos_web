import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Box from "./Box";

interface HeroSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

const HeroSection = ({ className, children }: HeroSectionProps) => {
  return (
    <Box
      className={twMerge(
        "container-content py-12 md:py-14 xl:px-0 lg:py-[120px]",
        className
      )}
    >
      {children}
    </Box>
  );
};

export default HeroSection;
