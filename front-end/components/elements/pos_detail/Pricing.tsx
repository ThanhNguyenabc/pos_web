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
const Pricing = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="txt-heading-xsmal">Pricing</p>
        <p className="txt-md text-neutral-700">
          Revel Systems software starts at $99 per month per terminal. Revel
          isn’t overly transparent about its pricing. Revel’s monthly plans
          start at $99 per month, but it appears this might be if you’re
          ordering multiple terminals and only if you’re using their credit card
          processing services.
        </p>
      </div>
      <div className="flex flex-row gap-4 w-full">
        <PricingPerType plan="Basic plan" money={10} desc="Per Month" />
        <PricingPerType
          plan="One time purchase"
          money={1295}
          desc="Per Station"
        />
      </div>
    </div>
  );
};

export default Pricing;
