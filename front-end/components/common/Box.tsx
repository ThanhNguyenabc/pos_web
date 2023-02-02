import React, { ReactNode } from "react";

interface BoxProps {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

const Box = ({ className = "", style = {}, children }: BoxProps) => {
  return (
    <div className={`flex flex-col px-4 md:px-8 ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Box;
