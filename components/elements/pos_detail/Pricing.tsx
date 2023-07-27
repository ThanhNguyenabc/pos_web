import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import React from "react";
import { moneyFormatter } from "utils/NumberUtil";

const PricingTrans = {
  title: {
    [Locale.en]: "Pricing",
    [Locale.es]: "Precios",
  },
  monthly_plan: {
    [Locale.en]: "Service Monthly Plan",
    [Locale.es]: "3 estaciones o más",
  },
  one_time_purchase: {
    [Locale.en]: "One Time Purchase",
    [Locale.es]: "Compra unica de Hardware",
  },
  per_month: {
    [Locale.en]: "Per month",
    [Locale.es]: "Por mes",
  },
  per_station: {
    [Locale.en]: "Per station",
    [Locale.es]: "Por estación",
  },
};
const PricingPerType = ({
  plan,
  money,
  desc,
  className,
}: {
  plan: string;
  money: number;
  desc: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-1 flex-col p-4 gap-2 border-2 border-neutral-300  
      rounded-2xl items-center justify-center text-center ${className}`}
    >
      <p className="txt-sm-bold md:text-base">{plan}</p>
      <p className="txt-heading-small md:txt-heading-large text-neutral-900">
        {moneyFormatter(money)}
      </p>
      <p className="txt-sm text-neutral-700 md:text-base">{desc}</p>
    </div>
  );
};

export interface PricingProps {
  id: string;
  desc: Array<string>;
  monthlyPrice: number;
  oneTimePurchase: number;
}

const Pricing = ({ desc, monthlyPrice, oneTimePurchase, id }: PricingProps) => {
  const { locale } = useTrans();
  return (
    <div id={id} className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-4 md:gap-6">
        <p className="txt-heading-xsmal md:txt-heading-small">
          {PricingTrans.title[locale]}
        </p>
        <div className="flex flex-col">
          {desc.map((item, index) => (
            <p key={`${index}-desc`} className="txt-md text-neutral-700">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full md:gap-8">
        <PricingPerType
          plan={PricingTrans.monthly_plan[locale]}
          money={monthlyPrice}
          desc={PricingTrans.per_month[locale]}
          className="text-primary"
        />
        <PricingPerType
          plan={PricingTrans.one_time_purchase[locale]}
          money={oneTimePurchase}
          desc={PricingTrans.per_station[locale]}
          className=" bg-blue-light border-none text-secondary"
        />
      </div>
    </div>
  );
};

export default Pricing;
