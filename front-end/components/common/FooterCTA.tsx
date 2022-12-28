import React, { ReactElement, ReactNode } from "react";
import { Button } from "./Button";

interface FooterCTAProps {
  title?: ReactElement;
  des?: string;
  background: string;
  actions?: ReactElement;
}
export const FooterCTA = ({
  title,
  actions,
  background,
  des,
}: FooterCTAProps) => {
  return (
    <div
      className={`px-4 py-14 gap-6 md:rounded-2xl 
      flex flex-col justify-center items-center text-center font-bold  
      font-['Inter']
      md:gap-8 md:my-20
      lg:gap-10 lg:py-20 
      lg:mx-[120px]
      ${background}`}
    >
      <div className="w-full flex flex-col gap-4 items-center">
        <div className="txt-heading-medium md:text-5xl md:font-extrabold md:leading-[56px] max-w-[860px]">
          {title}
        </div>
        {des && <p className="txt-md md:text-xl text-neutral-700">{des}</p>}
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 justify-center ">
        {actions}
      </div>
    </div>
  );
};
