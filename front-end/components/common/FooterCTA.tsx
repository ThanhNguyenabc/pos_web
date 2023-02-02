import React, { ReactElement, ReactNode } from "react";

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
      className={`flex flex-col justify-center items-center px-4 py-14 gap-6 md:rounded-2xl 
       text-center
      md:gap-8 md:mb-20 md:mx-8
      lg:gap-10 
      lg:mx-[100px] 
      xl:mx-[120px]
      ${background}`}
    >
      <div className="w-full flex flex-col gap-4 items-center">
        <div className="txt-heading-medium md:text-5xl md:font-extrabold md:leading-[56px] max-w-[860px]">
          {title}
        </div>
        {des && (
          <p className="txt-md-bold md:text-lg text-neutral-700">{des}</p>
        )}
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 justify-center ">
        {actions}
      </div>
    </div>
  );
};
