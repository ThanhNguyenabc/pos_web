import CustomCircularProgress from "components/common/CustomCircularProgress";
import Progress from "components/common/progress";
import React from "react";

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
        <p className="txt-md"> {name}</p>
        <p className="txt-md-bold"> {`${rating}`}</p>
      </div>

      <Progress
        max={10}
        value={rating}
        progressColor={"bg-primary"}
        backgroundColor={" bg-accent"}
        className={"rounded-lg md:h-2"}
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
      <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-row gap-8 md:gap-12">
          <CustomCircularProgress
            id="expert-progress"
            className="w-[170px] md:w-[170px] h-fit"
            strokeWidth={8}
            value={overal}
            maxValue={10}
          >
            <p className="txt-md-bold md:text-xl text-primary mt-2">Average</p>
            <p className="text-4xl font-extrabold md:text-6xl mx-2.5 ">
              {overal}
            </p>
          </CustomCircularProgress>

          <div className="flex flex-col gap-4 md:gap-6 w-full">
            {rateItems.map((item, index) => (
              <RatingItem key={`key-${index}`} {...item} />
            ))}
          </div>
        </div>
        <p className="xl:max-w-[300px] txt-md text-neutral-700">{comment}</p>
      </div>
    </div>
  );
};

export default ExpertOpinion;
