import { IcBack, IcRating, IcRightArrow } from "assets/AssetUtil";
import Box from "components/common/Box";
import HeroSection from "components/common/HeroSection";
import IconButton from "components/common/IconButton";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface ReviewerSectionProps {
  reviews: Array<{
    title?: string;
    rating?: number;
    comment: string;
    name: string;
    jobTitle: string;
    avatar: string | StaticImageData;
  }>;
}

const ReviewerSection = ({ reviews }: ReviewerSectionProps) => {
  const [index, setIndex] = useState(0);
  const data = reviews[index];

  const onBack = () => {
    if (index > 0) setIndex(index - 1);
  };

  const onNext = () => {
    if (index < reviews.length - 1) setIndex(index + 1);
  };

  return (
    <div className="flex flex-col w-full mx-auto rounded-3xl bg-neutral-100 lg:flex-row lg:h-[560px]">
      <Box className="flex gap-4 py-6 lg:p-16 lg:w-[50%]">
        {data.rating && (
          <div className="flex flex-row gap-2">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <IcRating
                key={`item-rating${index}`}
                className="text-primary text-2xl"
              />
            ))}
          </div>
        )}
        {data.title && (
          <p className="txt-md-bold text-secondary md:text-xl">{data.title}</p>
        )}
        <div className=" overflow-auto flex-1 customScrollbar ">
          <p className="txt-heading-xsmal md:txt-heading-small h-[300px] md:h-[250px] lg:h-full">
            {data.comment}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="txt-large-bold">{data.name}</p>
            <p className="text-neutral-700">{data.jobTitle}</p>
          </div>
          <div className="flex flex-row gap-6">
            <IconButton onClick={onBack}>
              <IcBack className="text-xl" />
            </IconButton>
            <IconButton onClick={onNext}>
              <IcRightArrow className="text-xl" />
            </IconButton>
          </div>
        </div>
      </Box>
      <div className="flex flex-1 w-full">
        <Image
          src={data.avatar}
          alt="avatar"
          className=" w-full  object-cover rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none"
        />
      </div>
    </div>
  );
};

export default ReviewerSection;
