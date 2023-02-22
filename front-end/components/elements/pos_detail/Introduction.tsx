import { IcCheckbox, IcClose } from "assets/AssetUtil";
import React from "react";
import ColorUtils from "utils/ColorUtils";

interface POSIntroductionProps {
  pros: Array<string>;
  cons: Array<string>;
  desc?: string;
  id: string;
}
const POSIntroduction = ({ pros, cons, desc, id }: POSIntroductionProps) => {
  return (
    <div id={id} className="flex flex-col gap-10 md:gap-16">
      <div className="flex flex-col gap-4 md:gap-6">
        <p className="txt-heading-xsmal  md:txt-heading-small">Introduction</p>
        <p className="txt-md text-neutral-700 md:text-xl">{desc}</p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col text-left txt-md md:text-xl">
          <p className=" font-semibold text-success ">PROS</p>
          {pros?.map((item, index) => (
            <div
              className="flex flex-row items-center gap-2 mt-2 md:mt-4 md:gap-4"
              key={`${index}-item-pros`}
            >
              <IcCheckbox className="w-3 md:w-5 text-success" />
              <p className=" flex-1 text-neutral-700">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col text-left txt-md md:text-xl">
          <p className="font-semibold text-error md:text-xl">CONS</p>
          {cons?.map((item, index) => (
            <div
              className="flex flex-row items-center gap-2 mt-2 md:mt-4 md:gap-4 "
              key={`${index}-item-cons`}
            >
              <IcClose className="w-3 md:w-5 text-error" />
              <p className=" flex-1 text-neutral-700"> {item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default POSIntroduction;
