import React from "react";

interface ExpertOpinionProps {
  overal: number;
  rateItems: Array<{ name: string; rating: number }>;
  comment?: string;
}
const RatingItem = ({ name, rating }: { name: string; rating: number }) => {
  return (
    <div key={`rate-item${name}`} className="flex flex-col gap-2">
      <div className=" flex flex-row justify-between">
        <p className="txt-md"> {name}</p>
        <p className="txt-md-bold"> {`${rating}`}</p>
      </div>
      <progress
        className="progress progress-primary w-full"
        value={rating}
        max="10"
      ></progress>
    </div>
  );
};

const ExpertOpinion = ({ overal, rateItems, comment }: ExpertOpinionProps) => {
  const valueProgress = overal * 10;
  const radialStyle = {
    "--value": valueProgress,
    "--size": "8rem",
    "--thickness": "8px",
  } as React.CSSProperties;
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <p className="txt-heading-xsmal">Expert Opinions</p>
      <div className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:gap-16">
        <div className="flex w-full flex-row gap-8 md:gap-12">
          <div>
            <div
              className="radial-progress text-primary border-neutral-300"
              style={radialStyle}
            >
              <p className="txt-heading-medium md:text-6xl md:font-extrabold">
                {overal}
              </p>
            </div>
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
