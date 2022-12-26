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
      className={`px-4 py-14 w-full gap-6 md:rounded-2xl md:gap-8 lg:mb-14 lg:gap-10 inline-flex flex-col justify-center items-center text-center font-bold  font-['Inter'] ${background}`}
    >
      <div className="w-full">
        <div className="txt-heading-medium md:text-5xl md:font-extrabold">
          {title}
        </div>
        {des && <p className="txt-md-bold md:text-xl mt-4">{des}</p>}
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10 justify-center ">
        {actions}
      </div>
    </div>
  );
};
