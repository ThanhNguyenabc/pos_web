import { title } from "process";
import React, { ReactElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface HeroProps {
  title: string | ReactElement;
  subTitle?: string;
  subCmp?: ReactElement;
  children?: ReactNode;
  classname?: string;
}

const Hero = ({ children, subTitle, title, classname, subCmp }: HeroProps) => {
  return (
    <div
      className={twMerge(`flex gap-10 flex-col px-4 py-12 text-center items-center font-['Inter']
      md:px-8 
      md:gap-16 
      md:py-14
      lg:p-[100px] xl:p-[120px] ${classname}
      `)}
    >
      <div className="w-full gap-6 flex flex-col md:items-center">
        <p
          className={`txt-heading-small max-w-3xl md:text-5xl md:font-extrabold md:leading-[56px] `}
        >
          {title}
        </p>
        {subTitle && (
          <p className="text-base font-normal md:text-xl text-neutral-700 ">
            {subTitle}
          </p>
        )}
        {subCmp && subCmp}
      </div>
      {children}
    </div>
  );
};

export default Hero;
