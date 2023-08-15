import { Button } from "components/common/Button";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import React from "react";
import { moneyFormatter } from "utils/NumberUtil";
import Badge from "components/common/Badge";
import IcArrow from "assets/icons/ic_right_arrow.svg";

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
      className={`flex flex-1 flex-col gap-2
      items-center justify-center text-center ${className}`}
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
  productName?: string;
  onRequestDemo?: () => void;
}

const Pricing = ({
  desc,
  monthlyPrice,
  oneTimePurchase,
  id,
  productName,
  onRequestDemo,
}: PricingProps) => {
  const { t, locale } = useTrans();
  return (
    <div id={id} className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
      <p className="txt-heading-xsmal col-span-1 md:txt-heading-small">
        {PricingTrans.title[locale]}
      </p>
      <div className=" col-span-2 flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col">
          {desc.map((item, index) => (
            <p key={`${index}-desc`} className="txt-md text-neutral-700">
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
          <div className="flex-1 flex flex-col p-6 gap-2 items-center text-center border border-neutral-300 rounded-2xl w-full">
            <h3 className="txt-large-bold mb-2 md:text-2xl">
              Get the full price from {productName}
            </h3>

            <PricingPerType
              plan={PricingTrans.monthly_plan[locale]}
              money={monthlyPrice}
              desc={PricingTrans.per_month[locale]}
              className="text-primary"
            />
            <div className="w-full h-[1px] bg-neutral-300" />
            <PricingPerType
              plan={PricingTrans.one_time_purchase[locale]}
              money={oneTimePurchase}
              desc={PricingTrans.per_station[locale]}
              className="text-secondary"
            />
          </div>
          <span className="txt-large-bold self-center">Or</span>
          <div className="flex-1 flex relative items-center flex-col gap-4 p-6 justify-between bg-neutral-dark rounded-2xl text-white text-center md:p-8">
            <Badge classname="absolute -top-3  border-none bg-accent text-neutral-900 md:py-1">
              BestPOS Offer
            </Badge>
            <div>
              <h3 className="txt-large-bold md:text-2xl">
                Save Big on POS Costs
              </h3>
              <p className="txt-sm md:text-base">
                Start using {productName} for your business today, with pricing
                options starting at
              </p>
            </div>
            <span className="txt-md-bold my-4 md:text-xl">
              Up to <br />
              <span className="txt-heading-medium md:txt-heading-xlarge">
                100% off
              </span>
            </span>
            <Button
              title={t("request_a_demo")}
              classname="w-full"
              onClick={onRequestDemo}
              rightIcon={<IcArrow />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
