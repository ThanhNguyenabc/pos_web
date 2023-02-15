import { chdir } from "process";
import React, { ReactNode } from "react";
import Box from "./Box";

interface HeroSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

const HeroSection = ({ className, style, children }: HeroSectionProps) => {
  return (
    <Box className={`py-12 md:py-14 lg:p-[120px] ${className}`} style={style}>
      {children}
    </Box>
  );
};

export default HeroSection;
