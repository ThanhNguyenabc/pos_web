import { IcBack, IcRating, IcRightArrow } from "assets/AssetUtil";
import Box from "components/common/Box";
import IconButton from "components/common/IconButton";
import Image, { StaticImageData } from "next/image";
import React from "react";

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
  const data = reviews[0];
  return (
    <div className="flex flex-col w-full max-w-[1216px] mx-auto rounded-3xl bg-neutral-100 lg:h-[560px] lg:flex-row">
      <Box className="flex gap-4 py-6 lg:p-16 lg:w-[50%]">
        {data.rating && (
          <div className="flex flex-row gap-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <IcRating className="text-primary text-2xl" />
            ))}
          </div>
        )}
        {data.title && (
          <p className="txt-md-bold text-secondary md:text-xl">{data.title}</p>
        )}
        <p className="txt-heading-xsmal flex-1 md:txt-heading-small">
          {data.comment}
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="txt-large-bold">{data.name}</p>
            <p className="text-neutral-700">{data.jobTitle}</p>
          </div>
          <div className="flex flex-row gap-6">
            <IconButton>
              <IcBack className="text-xl" />
            </IconButton>
            <IconButton>
              <IcRightArrow className="text-xl" />
            </IconButton>
          </div>
        </div>
      </Box>
      <div className="flex flex-1">
        <Image
          src={data.avatar}
          alt="avatar"
          className="object-cover w-full h-full rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none "
        />
      </div>
    </div>
  );
};

export default ReviewerSection;
