import React from "react";
import HeroSection from "components/common/HeroSection";
import Loading from "components/common/loading/Loading";
import useSWRImmutable from "swr/immutable";
import { fetchTestimonials } from "api_client/axios_client";
import ReviewerSectionV2 from "./ReviewerSection";
import useTrans from "hooks/useTrans";

const TestimonialSectionV2 = () => {
  const { t } = useTrans();
  const { data, isLoading } = useSWRImmutable(
    "testimonials",
    fetchTestimonials
  );

  return (
    <HeroSection>
      <h3 className="txt-heading-medium md:txt-heading-large text-center lg:w-[600px] m-auto">
        {t("testimonials.heading")}
      </h3>
      {isLoading && <Loading />}
      {data && <ReviewerSectionV2 reviews={data} />}
    </HeroSection>
  );
};

export default TestimonialSectionV2;
