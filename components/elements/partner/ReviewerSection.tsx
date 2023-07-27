import IcRating from "assets/icons/ic_rating.svg";
import IcRightArrow from "assets/icons/ic_right_arrow.svg";
import IcBack from "assets/icons/ic_back.svg";

import Box from "components/common/Box";
import IconButton from "components/common/IconButton";
import useTrans from "hooks/useTrans";
import { Testimonial } from "models/testimonial.model";
import Image from "next/image";
import React, { useState } from "react";

interface ReviewerSectionProps {
  reviews: Array<Testimonial>;
}

const ReviewerSection = ({ reviews }: ReviewerSectionProps) => {
  const [curIndex, setIndex] = useState(0);
  const data = reviews[curIndex];
  const { locale } = useTrans();
  const onBack = () => {
    if (curIndex > 0) setIndex(curIndex - 1);
  };

  const onNext = () => {
    if (curIndex < reviews.length - 1) setIndex(curIndex + 1);
  };

  return (
    <div className="flex flex-col w-full mx-auto rounded-3xl bg-neutral-100 lg:flex-row lg:h-[560px]">
      <Box className="flex gap-4 py-6 lg:p-16 lg:w-[50%]">
        {data?.rating && (
          <div className="flex flex-row gap-2">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <IcRating
                key={`item-rating${index}`}
                className="text-primary text-2xl"
              />
            ))}
          </div>
        )}
        {data?.short_description && (
          <p className="txt-md-bold text-secondary md:text-xl">
            {data.short_description?.[locale]}
          </p>
        )}
        <div className="overflow-auto flex-1 customScrollbar">
          <p className="txt-heading-xsmal md:txt-heading-small h-[300px] md:h-[250px] lg:h-full">
            {data?.review?.[locale]}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col flex-1">
            <p className="txt-large-bold">{data?.name}</p>
            <p className="text-neutral-700">{data?.jobTitle?.[locale]}</p>
          </div>
          <IconButton onClick={onBack}>
            <IcBack className="text-xl" />
          </IconButton>
          <IconButton onClick={onNext} classname="ml-6">
            <IcRightArrow className="text-xl" />
          </IconButton>
        </div>
      </Box>
      <div className="relative flex-1 w-full aspect-[4/3] lg:aspect-square">
        <Image
          key={`review-image-${data.name}`}
          src={data.image}
          alt={`"testimonial-${data.name}`}
          fill
          sizes="80vw"
          className={`object-cover rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none`}
        />
      </div>
    </div>
  );
};

export default ReviewerSection;
