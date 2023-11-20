import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps {
  children: ReactElement;
  onClick?: () => void;
  className?: string;
}
const IconButton = ({ className, children, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label="icon-button"
      className={twMerge(
        `text-neutral-900 btn btn-circle bg-white btn-outline border-neutral-300 md:h-14 md:w-14`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
