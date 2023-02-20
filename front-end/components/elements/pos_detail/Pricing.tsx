import { useRouter } from "next/router";
import React from "react";

const PricingPerType = ({
  plan,
  money,
  desc,
}: {
  plan: string;
  money: number;
  desc: string;
}) => {
  return (
    <div className="flex flex-1 flex-col p-4 gap-2 border-2 border-neutral-100  rounded-2xl items-center justify-center text-center">
      <p className=" text-secondary txt-sm-bold md:text-xl">{plan}</p>
      <p className="txt-heading-small md:txt-heading-large">${money}</p>
      <p className="txt-sm text-neutral-700 md:text-xl">{desc}</p>
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
  return (
    <div id={id} className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-4 md:gap-6">
        <p className="txt-heading-xsmal md:txt-heading-small">Pricing</p>
        <div className="flex flex-col">
          {desc.map((item, index) => (
            <p
              key={`${index}-desc`}
              className="txt-md text-neutral-700 md:text-xl"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full md:gap-8">
        <PricingPerType
          plan="Basic plan"
          money={monthlyPrice}
          desc="Per Month"
        />
        <PricingPerType
          plan="One time purchase"
          money={oneTimePurchase}
          desc="Per Station"
        />
      </div>
    </div>
  );
};

export default Pricing;
