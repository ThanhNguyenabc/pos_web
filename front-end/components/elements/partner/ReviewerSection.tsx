import Box from "components/common/Box";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ReviewerSectionProps {
  reviews: Array<{
    comment: string;
    name: string;
    jobTitle: string;
    avatar: string | StaticImageData;
  }>;
}

const ReviewerSection = ({ reviews }: ReviewerSectionProps) => {
  const data = reviews[0];
  return (
    <Box className="py-14 xl:py-[120px]">
      <h3 className="mb-12 txt-heading-medium text-center">
        Be part of a community full of opportunity
      </h3>

      <div className="flex flex-col max-w-[1216px] mx-auto rounded-3xl bg-neutral-100 lg:max-h-[560px] lg:flex-row">
        <Box className="flex-1 py-6 lg:p-16">
          <p className="txt-heading-xsmal mb-20 flex-1">{data.comment}</p>
          <div>
            <p className="txt-large-bold">{data.name}</p>
            <p>{data.jobTitle}</p>
          </div>
        </Box>
        <div className="flex-1">
          <Image
            src={data.avatar}
            alt="avatar"
            className="object-cover aspect-[4/3] w-full rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none "
          />
        </div>
      </div>
    </Box>
  );
};

export default ReviewerSection;
