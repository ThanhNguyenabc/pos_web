import React from "react";
import HeadTag from "components/common/HeadTag";
import { FooterCTA } from "components/common/FooterCTA";
import POSSystems from "components/elements/POSSytems";
import { getSEOTags } from "./api/configs";
import { cacheTime } from "utils/constants";
import { MetaTag } from "models/app_configs";

export const getStaticProps = async () => {
  const seoTag = await getSEOTags("posSystem");
  return {
    props: {
      seoTag,
    },
    revalidate: cacheTime,
  };
};

export default function Page({ seoTag }: { seoTag: MetaTag }) {
  return (
    <>
      <HeadTag tags={seoTag} />
      <POSSystems />
      <FooterCTA />
    </>
  );
}
