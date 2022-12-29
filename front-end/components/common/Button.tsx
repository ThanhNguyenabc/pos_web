import React, { HtmlHTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  type:
    | "OUTLINE_SMALL"
    | "OUTLINE_MEDIUM"
    | "OUTLINE_LARGE"
    | "OUTLINE_XLARGE"
    | "SOLID_SMALL"
    | "SOLID_MEDIUM"
    | "SOLID_LARGE"
    | "SOLID_XLARGE";

  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  title: string;
  background?: string;
  onClick?: () => void;
  classname?: string;
  style?: React.CSSProperties;
}

export const Button = ({
  type,
  background,
  leftIcon,
  rightIcon,
  onClick,
  title: text,
  classname = "",
  style,
}: ButtonProps) => {
  let customStyle = `${background || "bg-white"} `;
  const solidStyle = `border-none px-5`;
  const outlineStyle =
    " text-neutral-900 hover:bg-white hover:text-black border-neutral-300";

  switch (type) {
    case "OUTLINE_SMALL":
      customStyle += `text-sm ${outlineStyle}`;
      break;
    case "OUTLINE_MEDIUM":
      customStyle += ` text-base ${outlineStyle}`;
      break;
    case "OUTLINE_LARGE":
      customStyle += `text-xl ${outlineStyle}`;
      break;
    case "SOLID_SMALL":
      customStyle += `text-sm h-10 ${solidStyle}`;
      break;
    case "SOLID_MEDIUM":
      customStyle += `text-base h-12 ${solidStyle}`;
      break;
    case "SOLID_LARGE":
      customStyle += `text-xl h-14 ${solidStyle}`;
      break;
    case "SOLID_XLARGE":
      customStyle += `text-xl h-16 ${solidStyle}`;
      break;
    default:
      break;
  }

  return (
    <button
      style={style}
      onClick={onClick}
      className={twMerge(`btn btn-active normal-case px-4 h-12 inline-flex
      font-semibold font-['Inter'] ${
        background ? "text-white" : "text-neutral-900"
      }  ${customStyle} ${classname} hover:${background ?? "bg-white"}`)}
    >
      <div className="flex flex-row w-full h-auto items-center justify-center">
        {leftIcon && <div className="mr-2">{leftIcon}</div>}
        {text}
        {rightIcon && <div className="ml-2">{rightIcon}</div>}
      </div>
    </button>
  );
};
