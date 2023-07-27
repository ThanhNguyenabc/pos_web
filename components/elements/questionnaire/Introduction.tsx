import IcCreditCard from "assets/icons/ic_creditcard.svg";
import IcDiscount from "assets/icons/ic_discount.svg";
import IcStore from "assets/icons/ic_store.svg";
import Box from "components/common/Box";
import { Button } from "components/common/Button";
import useTrans from "hooks/useTrans";
import React from "react";
import ColorUtils from "utils/ColorUtils";
import { twMerge } from "tailwind-merge";

const IntroductionData = [
  {
    icon: IcStore,
    desc: "questionnaire_intro_1",
  },
  {
    icon: IcDiscount,
    desc: "questionnaire_intro_2",
  },
  {
    icon: IcCreditCard,
    desc: "questionnaire_intro_3",
  },
];

interface IntroductionPorps {
  className?: string;
  onStart?: () => void;
}

const Introduction = ({ className, onStart }: IntroductionPorps) => {
  const { t } = useTrans();
  return (
    <div
      className={twMerge(
        `flex w-full bg-accent lg:w-fit lg:bg-transparent`,
        className
      )}
    >
      <Box className="flex py-12 flex-col gap-6 md:py-14 md:max-w-[460px] mx-auto lg:p-0">
        <h1 className="txt-heading-small md:text-4xl ">
          {t("questionnaire_title")}
        </h1>
        <h3 className="txt-large-bold text-neutral-700">
          {t("questionnaire_desc")}
        </h3>
        <div className="flex flex-col gap-4 p-4 bg-white rounded-2xl">
          {IntroductionData.map((item, index) => {
            const Icon = item.icon;
            const divider =
              index < Introduction.length - 1
                ? "border-b border-neutral-100 pb-4"
                : "";
            return (
              <div
                key={`reason-${index}`}
                className={`flex flex-row gap-4 ${divider}`}
              >
                <Icon className="w-6 h-6 text-secondary" />
                <h4 className="text-left">{t(item.desc)}</h4>
              </div>
            );
          })}
        </div>
        <Button
          classname="mt-6 h-16 lg:hidden"
          title={`${t("get_started")}!`}
          style={{ background: ColorUtils.neutral_dark }}
          onClick={onStart}
        />
      </Box>
    </div>
  );
};

export default Introduction;
