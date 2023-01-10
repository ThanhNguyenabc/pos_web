import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps {
  children: ReactElement;
  onClick?: () => void;
  classname?: string;
}
const IconButton = ({ classname, children, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        ` text-neutral-900 btn btn-circle bg-white btn-outline p-3 border-neutral-300 ${classname}`
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
