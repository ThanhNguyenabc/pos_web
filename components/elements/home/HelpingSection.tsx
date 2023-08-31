import IcBusiness from "assets/icons/ic_business.svg";
import IcDecision from "assets/icons/ic_decision.svg";
import IcPricing from "assets/icons/ic_pricing.svg";
import IcSchedule from "assets/icons/ic_schedule.svg";

import HeroSection from "components/common/HeroSection";
import useTrans from "hooks/useTrans";
import React from "react";
import HTMLReactParser from "html-react-parser";

const Factors = [
  {
    icon: IcBusiness,
    title: "business_review",
    content: "business_review_desc",
  },
  {
    icon: IcSchedule,
    title: "schedule_a_demo",
    content: "schedule_a_demo_desc",
  },

  {
    icon: IcPricing,
    title: "obtain_pricing",
    content: "obtain_pricing_desc",
  },
  {
    icon: IcDecision,
    title: "final_decision",
    content: "final_decision_desc",
  },
];

const HelpingSection = () => {
  const { t } = useTrans();
  return (
    <HeroSection className="gap-10 lg:flex-row lg:gap-[100px]">
      <div className=" flex flex-col gap-6 flex-1 lg:max-w-[480px]">
        <h3 className="txt-heading-medium md:txt-heading-medium whitespace-pre-line">
          {HTMLReactParser(t("helping_section_title"))}
        </h3>
        <p className="txt-md mdleading-7 md:text-xl text-neutral-700">
          {HTMLReactParser(t("helping_section_desc"))}
        </p>
      </div>
      <ul className="flex flex-col flex-1 gap-10 lg:gap-16">
        {Factors.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={`helping-${index}`} className="flex flex-row gap-6">
              <span>
                <Icon className="text-[64px] md:text-[80px] flex-1" />
              </span>
              <div className="flex flex-col lg:max-w-md gap-2">
                <p className="txt-md-bold md:text-xl">{t(item.title)}</p>
                <p className="txt-sm md:text-base text-neutral-700">
                  {t(item.content)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </HeroSection>
  );
};

export default HelpingSection;
