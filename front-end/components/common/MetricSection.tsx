import React from "react";
import { MetrictData } from "utils/StringUtil";
import List from "./List";


interface MetricSectionProps {
  titleColor?: string;
}

const MetricSection = ({
  titleColor = "text-secondary",
}: MetricSectionProps) => {
  return (
    <div
      className={`w-full px-4 py-14 gap-12 flex flex-col 
       items-center text-center bg-neutral-100 md:px-8 lg:p-[100px] lg:gap-20 xl:p-[120px]`}
    >
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
    </div>
  );
};

export default MetricSection;
