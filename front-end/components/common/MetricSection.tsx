import React from "react";
import { MetrictData } from "utils/StringUtil";
import HeroSection from "./HeroSection";
import List from "./List";

interface MetricSectionProps {
  titleColor?: string;
}

const MetricSection = ({
  titleColor = "text-secondary",
}: MetricSectionProps) => {
  return (
    <HeroSection className={`gap-12 text-center bg-neutral-100 lg:gap-20`}>
      <p className="text-4xl max-w-3xl font-bold md:text-5xl md:font-extrabold md:leading-[56px]">
        {MetrictData.heading}
      </p>
      <List
        classname="w-full md:grid-cols-3 gap-12"
        data={MetrictData.sections}
        itemClassname="font-semibold"
        itemBuilder={(item, index, selectIndex) => {
          return (
            <>
              <p
                className={`text-5xl text-center mb-4 md:font-extrabold 
                md:mb-6 md:text-6xl lg:text-8xl lg:font-semibold ${titleColor}`}
              >
                {item.title}
              </p>
              <p className=" text-base leading-6 md:text-lg">{item.content}</p>
            </>
          );
        }}
      />
    </HeroSection>
  );
};

export default MetricSection;
