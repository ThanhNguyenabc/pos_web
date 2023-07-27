"use client";

import HeroSection from "components/common/HeroSection";
import React from "react";
import ReviewerSection from "../partner/ReviewerSection";
import Loading from "components/common/loading/Loading";
import useSWRImmutable from "swr/immutable";
import { fetchTestimonials } from "api_client/axios_client";

const TestimonialSection = () => {
  const { data, isLoading } = useSWRImmutable(
    "testimonials",
    fetchTestimonials
  );
  return (
    <HeroSection>
      {isLoading && <Loading />}
      {data && <ReviewerSection reviews={data} />}
    </HeroSection>
  );
};

export default TestimonialSection;
