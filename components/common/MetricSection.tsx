import useTrans from "hooks/useTrans";
import React from "react";
import HeroSection from "./HeroSection";
import List from "./List";

interface MetricSectionProps {
  titleColor?: string;
}

export const MetrictData = {
  heading: "metric_title",
  sections: [
    { title: "30+", content: "measure_experience" },
    { title: "50", content: "measure_state" },
    { title: "1,000", content: "measure_client" },
  ],
};

const MetricSection = ({
  titleColor = "text-secondary",
}: MetricSectionProps) => {
  const { t } = useTrans();
  return (
    <div className="bg-neutral-100">
      <HeroSection className={`gap-12 text-center items-center lg:gap-20`}>
        <p className="text-4xl max-w-3xl font-bold md:txt-heading-large">
          {t(MetrictData.heading)}
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
                <p className="txt-md-bold md:text-lg">{t(item.content)}</p>
              </>
            );
          }}
        />
      </HeroSection>
    </div>
  );
};

export default MetricSection;
