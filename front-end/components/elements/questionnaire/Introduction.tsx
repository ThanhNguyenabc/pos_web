import { IcCreditCard, IcDiscount, IcStore } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import Image from "next/image";
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
  classname?: string;
  onStart?: () => void;
}

const Introduction = ({ classname, onStart }: IntroductionPorps) => {
  return (
    <div
      className={twMerge(
        `flex flex-col min-h-screen bg-accent xl:justify-center xl:p-[120px] ${classname}`
      )}
    >
      <div className="flex flex-col gap-6 px-4 py-12 md:py-14 md:gap-10 md:mx-auto max-w-lg ">
        <p className="txt-heading-small md:text-4xl xl:text-white">
          Fill out <span className="text-secondary">the questionnaire</span> and
          <span className="text-secondary"> see what POS works</span> best for
          your business!
        </p>
        <p className="txt-large-bold xl:text-white">
          You may qualify for a Free POS if:
        </p>
        <div className="flex flex-col gap-4">
          {Reason.map((item, index) => (
            <div className="card bg-base-100">
              <div className="card-body p-4 flex-row items-center txt-md md:text-xl gap-4">
                <Image src={item.icon} className="w-6 h-6" alt="" />
                <p className="text-left">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          classname="mt-6 h-16 xl:hidden"
          title="Get started!"
          style={{ background: ColorUtils.neutral_dark }}
          onClick={onStart}
        />
      </div>
    </div>
  );
};

export default Introduction;
