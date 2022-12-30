import React from "react";

interface ExpertOpinionProps {
  overal: number;
  rateItems: Array<{ name: string; rating: number }>;
  opinion?: string;
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

const ExpertOpinion = ({ overal, rateItems, opinion }: ExpertOpinionProps) => {
  const valueProgress = overal * 10;
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <p className="txt-heading-xsmal">Expert Opinions</p>
      <div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:gap-16">
        <div className="flex flex-row gap-8  w-full flex-3 lg:gap-16 ">
          <div
            className="radial-progress text-primary border-neutral-300 "
            style={{
              "--value": valueProgress,
              "--size": "7.5rem",
              "--thickness": "6px",
            }}
          >
            <p className="txt-heading-medium md:text-6xl md:font-extrabold">
              {overal}
            </p>
          </div>
          <div className="flex flex-col gap-4 flex-1 md:gap-8">
            {rateItems.map((item, index) => (
              <RatingItem key={`key-${index}`} {...item} />
            ))}
          </div>
        </div>
        <p className="txt-md text-neutral-700 md:text-xl"> {opinion}</p>
      </div>
    </div>
  );
};

export default ExpertOpinion;
