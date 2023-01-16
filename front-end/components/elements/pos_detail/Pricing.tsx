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
      <p className=" text-secondary txt-sm-bold">{plan}</p>
      <p className="txt-heading-small">${money}</p>
      <p className="txt-sm text-neutral-700">{desc}</p>
    </div>
  );
};

export interface PricingProps {
  desc: Array<string>;
  monthlyPrice: number;
  oneTimePurchase: number;
}

const Pricing = ({ desc, monthlyPrice, oneTimePurchase }: PricingProps) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-4 md:gap-8">
        <p className="txt-heading-xsmal">Pricing</p>
        <div className="flex flex-col">
          {desc.map((item, index) => (
            <p key={`${index}-desc`} className="txt-md text-neutral-700">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full">
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
