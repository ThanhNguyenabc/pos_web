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
        `btn btn-circle btn-outline hover:bg-white p-3 border-neutral-300 ${classname}`
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
