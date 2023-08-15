import CustomCircularProgress from "components/common/CustomCircularProgress";
import Progress from "components/common/progress";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import { ExpertOpinion } from "models/product.model";
import React from "react";

const ExpertOpinionTrans = {
  heading: {
    [Locale.en]: "Expert Opinions",
    [Locale.es]: "Expert Opinions",
  },
  average: {
    [Locale.en]: "Average",
    [Locale.es]: "Promedio",
  },
  easy_use: {
    [Locale.en]: "Easy to use",
    [Locale.es]: "Fácil de usar",
  },
  value: {
    [Locale.en]: "Value",
    [Locale.es]: "Valor",
  },
  support: {
    [Locale.en]: "Support",
    [Locale.es]: "Apoyo",
  },
  functionality: {
    [Locale.en]: "Functionality",
    [Locale.es]: "Funcionalidad",
  },
  feedback: {
    [Locale.en]: "Feedback",
    [Locale.es]: "Comentario",
  },
};

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
      <div className="flex flex-row justify-between">
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
  const { t, locale } = useTrans();
  const rateItems = [
    {
      name: ExpertOpinionTrans.easy_use,
      rating: data.easy,
    },
    {
      name: ExpertOpinionTrans.value,
      rating: data.value,
    },
    {
      name: ExpertOpinionTrans.support,
      rating: data.support,
    },
    {
      name: ExpertOpinionTrans.functionality,
      rating: data.functionality,
    },
    {
      name: ExpertOpinionTrans.feedback,
      rating: data.feedback,
    },
  ];

  return (
    <div id={id} className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-8">
      <p className="col-span-1 txt-heading-xsmal md:txt-heading-small">
        {ExpertOpinionTrans.heading[locale]}
      </p>
      <div className="col-span-2 flex flex-col gap-6 md:gap-8 w-full">
        <div className="flex flex-1 flex-row gap-8 md:gap-12 lg:gap-16">
          <CustomCircularProgress
            id="expert-progress"
            className="w-[120px] md:w-[160px] h-fit"
            strokeWidth={8}
            value={data.overall}
            maxValue={10}
          >
            <p className="txt-md-bold md:text-xl text-primary mt-2">
              {ExpertOpinionTrans.average[locale]}
            </p>
            <p className="text-4xl font-extrabold md:text-6xl mx-2.5 ">
              {data.overall}
            </p>
          </CustomCircularProgress>

          <div className="grid grid-cols-1 gap-4 md:gap-6 w-full lg:grid-cols-2">
            {rateItems.map((item, index) => (
              <RatingItem
                key={`key-${index}`}
                rating={item.rating}
                name={item.name[locale]}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 whitespace-pre-line">
          <p className=" txt-md text-neutral-700">{data.comment?.[locale]}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertOpinion;
