import React from "react";

export interface MetricItem {
  title: string;
  content: string;
}
interface MetricSectionProps {
  heading: string;
  titleColor?: string;
  itemSection: Array<MetricItem>;
}
const MetricSection = ({
  heading,
  titleColor = "text-secondary",
  itemSection,
}: MetricSectionProps) => {
  return (
    <div
      className={`w-full px-4 py-14 gap-12 lg:gap-20 inline-flex flex-col items-center text-center overflow-clip bg-neutral-100`}
    >
      <p className="text-4xl font-bold m-0  text-neutral-900 md:text-5xl">
        {heading}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {itemSection.map((item) => (
          <div className="w-full gap-4 flex flex-col items-center font-semibold">
            <p
              className={`w-full text-5xl md:text-6xl lg:text-8xl m-0  ${titleColor}`}
            >
              {item.title}
            </p>
            <p className="w-full text-base leading-6 md:text-xl text-neutral-900">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricSection;
