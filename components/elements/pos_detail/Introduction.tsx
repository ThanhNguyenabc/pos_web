import IcCheckbox from "assets/icons/ic_checkbox.svg";
import IcClose from "assets/icons/ic_close.svg";

import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import Attribute from "models/attribute";
import React from "react";

const POSIntroductionTrans = {
  heading: {
    [Locale.en]: "Introduction",
    [Locale.es]: "Introducción",
  },
};

interface POSIntroductionProps {
  pros: Attribute<Array<string>>;
  cons: Attribute<Array<string>>;
  desc?: Attribute;
  id: string;
}

const POSIntroduction = ({ pros, cons, desc, id }: POSIntroductionProps) => {
  const { t, locale } = useTrans();
  return (
    <div id={id} className="flex flex-col gap-10 md:gap-16">
      <div className="flex flex-col gap-4 md:gap-6">
        <p className="txt-heading-xsmal  md:txt-heading-small">
          {POSIntroductionTrans.heading[locale]}
        </p>
        <p className="txt-md text-neutral-700 whitespace-pre-line">
          {desc?.[locale]}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col text-left txt-md">
          <p className=" font-semibold text-success md:text-xl">{t("pros")}</p>
          {pros?.[locale]?.map((item, index) => (
            <div
              className="flex flex-row items-center gap-2 mt-2 md:mt-4 md:gap-4"
              key={`${index}-item-pros`}
            >
              <IcCheckbox className="w-3 md:w-5 text-success" />
              <p className=" flex-1 text-neutral-700">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col text-left txt-md">
          <p className="font-semibold text-error md:text-xl">{t("cons")}</p>
          {cons?.[locale]?.map((item, index) => (
            <div
              className="flex flex-row items-center gap-2 mt-2 md:mt-4 md:gap-4"
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
