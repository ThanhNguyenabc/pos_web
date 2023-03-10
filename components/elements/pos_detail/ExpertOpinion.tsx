import CustomCircularProgress from "components/common/CustomCircularProgress";
import Progress from "components/common/progress";
import { ExpertOpinion } from "models/product.model";
import React from "react";

interface ExpertOpinionProps {
  id: string;
  data: ExpertOpinion;
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

const ExpertOpinion = ({ data, id }: ExpertOpinionProps) => {
  const rateItems = [
    {
      name: "Easy to use",
      rating: data.easy,
    },
    {
      name: "Value",
      rating: data.value,
    },
    {
      name: "Support",
      rating: data.support,
    },
    {
      name: "Functionality",
      rating: data.functionality,
    },
    {
      name: "Feedback",
      rating: data.feedback,
    },
  ];

  return (
    <div id={id} className="flex flex-col gap-6 md:gap-8">
      <p className="txt-heading-xsmal md:txt-heading-small">Expert Opinions</p>
      <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:gap-16 w-full">
        <div className="flex flex-1 flex-row gap-8 md:gap-12 lg:gap-16">
          <CustomCircularProgress
            id="expert-progress"
            className="w-[120px] md:w-[160px] h-fit"
            strokeWidth={8}
            value={data.overall}
            maxValue={10}
          >
            <p className="txt-md-bold md:text-xl text-primary mt-2">Average</p>
            <p className="text-4xl font-extrabold md:text-6xl mx-2.5 ">
              {data.overall}
            </p>
          </CustomCircularProgress>

          <div className="flex flex-col gap-4 md:gap-6 w-full">
            {rateItems.map((item, index) => (
              <RatingItem key={`key-${index}`} {...item} />
            ))}
          </div>
        </div>
        <div className="flex flex-1">
          <p className=" txt-md text-neutral-700">{data.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertOpinion;
