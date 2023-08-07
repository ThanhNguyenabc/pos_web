import React from "react";
import HeroSection from "components/common/HeroSection";
import Loading from "components/common/loading/Loading";
import useSWRImmutable from "swr";
import { fetchTestimonials } from "api_client/axios_client";
import ReviewerSectionV2 from "./ReviewerSection";
import { Locale } from "models/app_configs";
import useTrans from "hooks/useTrans";

const TestimonialSectionV2Translate = {
  heading: {
    [Locale.en]: "See What Our Customers Are Saying",
    [Locale.es]: "Perhaps some captcha settings",
  },
};
const TestimonialSectionV2 = () => {
  const { locale } = useTrans();
  const { data, isLoading } = useSWRImmutable(
    "testimonials",
    fetchTestimonials
  );
  return (
    <HeroSection>
      <h3 className="txt-heading-medium md:txt-heading-large text-center lg:w-[600px] m-auto">
        {TestimonialSectionV2Translate.heading[locale]}
      </h3>
      {isLoading && <Loading />}
      {data && <ReviewerSectionV2 reviews={data} />}
    </HeroSection>
  );
};

export default TestimonialSectionV2;
