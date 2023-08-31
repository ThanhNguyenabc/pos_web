import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  title,
  classname = "",
  style,
  ...any
}: ButtonProps) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={twMerge(
        `btn text-base normal-case md:h-14 md:text-lg md:px-5 lg:text-xl ${
          isOutLine
            ? "btn-outline hover:bg-white hover:text-black bg-white border-neutral-300 border-2"
            : "btn-primary border-none text-white"
        } hover:drop-shadow-custom`,
        classname
      )}
      {...any}
    >
      <div className="flex flex-row w-full h-auto items-center justify-center">
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {title}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </div>
    </button>
  );
};
