import Progress from "components/common/progress";
import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import ColorUtils from "utils/ColorUtils";

interface ExpertOpinionProps {
  id: string;
  overal: number;
  rateItems: Array<{ name: string; rating: number }>;
  comment?: string;
}

const RatingItem = ({ name, rating }: { name: string; rating: number }) => {
  return (
    <div
      id="export-opinion"
      key={`rate-item${name}`}
      className="flex flex-col gap-2"
    >
      <div className=" flex flex-row justify-between">
        <p className="txt-md md:text-xl"> {name}</p>
        <p className="txt-md-bold md:text-xl"> {`${rating}`}</p>
      </div>

      <Progress
        max={10}
        value={rating}
        progressColor={"bg-primary"}
        backgroundColor={" bg-accent"}
        className={"rounded-lg"}
      />
    </div>
  );
};

const ExpertOpinion = ({
  overal,
  rateItems,
  comment,
  id,
}: ExpertOpinionProps) => {
  return (
    <div id={id} className="flex flex-col gap-6 md:gap-8">
      <p className="txt-heading-xsmal md:txt-heading-small">Expert Opinions</p>
      <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:gap-16">
        <div className="flex w-full flex-row gap-8 md:gap-12">
          <div className="h-[170px] w-[170px] md:w-[200px]">
            <CircularProgressbarWithChildren
              strokeWidth={5}
              maxValue={10}
              value={overal}
              styles={{
                path: {
                  stroke: ColorUtils.primary,
                  transition: "stroke-dashoffset 0.5s ease 0s",

                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
                trail: {
                  stroke: ColorUtils["neutral-100"],
                  strokeLinecap: "butt",
                  transform: "rotate(1turn)",
                  transformOrigin: "center center",
                },
              }}
            >
              <p className="txt-md-bold md:text-xl text-primary mt-2">
                Average
              </p>
              <p className=" text-4xl font-extrabold md:text-6xl">{overal}</p>
            </CircularProgressbarWithChildren>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 w-full">
            {rateItems.map((item, index) => (
              <RatingItem key={`key-${index}`} {...item} />
            ))}
          </div>
        </div>
        <p className="xl:max-w-[300px] txt-md text-neutral-700 md:text-xl">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default ExpertOpinion;
