import {
  BrainStormImg,
  BusinessReviewImg,
  PricingImg,
  ScheduleImg,
} from "assets/AssetUtil";
import HeroSection from "components/common/HeroSection";
import Image from "next/image";
import React from "react";

const data = [
  {
    image: BusinessReviewImg,
    title: "Initial Business Review",
    content:
      "Speak to our professional point-of-sale consultant about your business and your point-of-sale needs such as equipment needed, menu, features, and pricing.",
  },
  {
    image: ScheduleImg,
    title: "Schedule a Demo",
    content:
      "We will recommend and help schedule on-site or remote demo/s with our team and the point-of-sale company.",
  },

  {
    image: PricingImg,
    title: "Obtain Pricing",
    content:
      "our experienced in-house staff, online reviews, popularity, feedback, pricing, and a few other factors.",
  },
  {
    image: BrainStormImg,
    title: "Final Decision",
    content:
      "Your consultant will weigh in all the features, services, and pricing to determine the best point-of-sale system for you and your business!",
  },
];
const FeatureSection = () => {
  return (
    <HeroSection className="gap-10 lg:flex-row lg:gap-[100px]">
      <div className=" flex flex-col gap-6 flex-1">
        <h2 className="txt-heading-medium md:txt-heading-large">
          Helping you <span className="text-secondary">compare & find</span> the
          best POS system
        </h2>
        <p className="txt-md text-justify md:text-lg text-neutral-700">
          With the knowledge of our consultants who have been in the business
          for over 10 years, they will help you find the best point-of-sale
          system. Whether a big or small business, we will find the perfect
          match for you!
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-10 lg:gap-16">
        {data.map((item, index) => {
          return (
            <div className="hero p-0 m-0 " key={`feature-${index}`}>
              <div className="hero-content flex-row p-0 gap-6 items-start ">
                <Image
                  src={item.image}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  alt={`${item.title}`}
                />
                <div className="flex flex-col max-w-md gap-2 md:gap-4">
                  <p className="txt-md-bold md:text-3xl md:font-bold">
                    {item.title}
                  </p>
                  <p className="txt-sm md:text-base text-neutral-700">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </HeroSection>
  );
};

export default FeatureSection;
