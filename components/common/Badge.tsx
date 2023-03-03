import React, { ReactNode } from "react";

interface BadgeProps {
  classname?: string;
  children: ReactNode;
}

const Badge = ({ classname, children }: BadgeProps) => {
  return (
    <div
      className={`txt-sm-bold h-auto badge text-success badge-outline px-3 py-1 border-success border-2 md:py-2 md:text-base  ${classname}`}
    >
      {children}
    </div>
  );
};

export default Badge;
