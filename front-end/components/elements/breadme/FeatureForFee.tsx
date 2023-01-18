import { IcChat, IcPayZero, IcServiceFee, IcSupport } from "assets/AssetUtil";
import React from "react";

const FeatureForBreadmeData = [
  {
    ic: IcChat,
    title: "Full Purchase Price",
    desc: "You get the full purchase price for the transaction.",
  },
  {
    ic: IcSupport,
    title: "Pay all your monthly transactions",
    desc: "The fees for processing the cards come directly to us and and we pay all your monthly transactions.",
  },
  {
    ic: IcPayZero,
    title: "Pay Zero",
    desc: "You will always pay zero when you receive your statement each month.",
  },
  {
    ic: IcServiceFee,
    title: "Eliminates service fees",
    desc: "A solution that completely eliminates merchant service and point-of-sale fees.",
  },
];

const BreadmeFeatureSection = () => {
  return (
    <div className="flex flex-col px-4 gap-12 py-14 md:px-8 xl:p-[120px] xl:gap-[120px] ">
      <p className="txt-heading-small md:text-5xl md:font-extrabold md:leading-[56px]">
        Allow merchants to collect
        <span className="text-success"> up to 100%</span> of their revenue
        without any fees.
      </p>

      <div className="grid grid-cols-1  gap-y-6 md:grid-cols-2 md:gap-y-12 md:gap-x-8">
        {FeatureForBreadmeData.map((item, index) => {
          const Icon = item.ic;
          return (
            <div
              key={`feature-section-${index}`}
              className="flex flex-row gap-6 items-start md:flex-col"
            >
              <Icon width={56} height={56} />
              <div className="flex flex-col gap-2 md:gap-4">
                <p className="txt-md-bold md:text-xl">{item.title}</p>
                <p className="txt-md text-neutral-600">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BreadmeFeatureSection;
