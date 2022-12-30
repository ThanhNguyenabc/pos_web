import React, { HtmlHTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import ColorUtils from "utils/ColorUtils";
interface ButtonProps {
  isOutLine?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  title: string;
  onClick?: () => void;
  classname?: string;
  style?: React.CSSProperties;
}

export const Button = ({
  isOutLine,
  leftIcon,
  rightIcon,
  onClick,
  title: text,
  classname = "",
  style,
}: ButtonProps) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={twMerge(
        `btn text-base normal-case md:h-14 md:text-lg md:px-5  ${classname} ${
          isOutLine
            ? "btn-outline hover:bg-white hover:text-black"
            : "btn-primary border-none"
        }`
      )}
    >
      <div className="flex flex-row w-full h-auto items-center justify-center">
        {leftIcon && <div className="mr-2">{leftIcon}</div>}
        {text}
        {rightIcon && <div className="ml-2">{rightIcon}</div>}
      </div>
    </button>
  );
};
