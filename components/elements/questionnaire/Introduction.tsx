import { IcCreditCard, IcDiscount, IcStore } from "assets/AssetUtil";
import Box from "components/common/Box";
import { Button } from "components/common/Button";
import React from "react";
import { twMerge } from "tailwind-merge";
import ColorUtils from "utils/ColorUtils";
const Reason = [
  {
    icon: IcStore,
    desc: "You are a business owner",
  },
  {
    icon: IcDiscount,
    desc: "You are currently on the Cash Discount Program",
  },
  {
    icon: IcCreditCard,
    desc: "Based on total credit card processing volume",
  },
];

interface IntroductionPorps {
  className?: string;
  onStart?: () => void;
}

const Introduction = ({ className, onStart }: IntroductionPorps) => {
  return (
    <div
      className={twMerge(
        `flex w-full flex-1  bg-accent lg:bg-transparent`,
        className
      )}
    >
      <Box className="flex py-12 flex-col gap-6 md:py-14 md:max-w-[480px] mx-auto lg:p-0">
        <p className="txt-heading-small md:text-4xl lg:text-white">
          Fill out <span className="text-secondary">the questionnaire</span> and
          <span className="text-secondary"> see what POS works</span> best for
          your business!
        </p>
        <p className="txt-large-bold lg:text-white">
          You may qualify for a Free POS if:
        </p>
        <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl">
          {Reason.map((item, index) => {
            const Icon = item.icon;
            const divider =
              index < Reason.length - 1
                ? "border-b border-neutral-100 pb-4"
                : "";
            return (
              <div
                key={`reason-${index}`}
                className={`flex flex-row gap-4 ${divider}`}
              >
                <Icon className="w-6 h-6" />
                <p className="text-left">{item.desc}</p>
              </div>
            );
          })}
        </div>
        <Button
          classname="mt-6 h-16 lg:hidden"
          title="Get started!"
          style={{ background: ColorUtils.neutral_dark }}
          onClick={onStart}
        />
      </Box>
    </div>
  );
};

export default Introduction;
