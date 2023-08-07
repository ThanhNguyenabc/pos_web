import React from "react";
import HeadTag from "components/common/HeadTag";
import { FooterCTA } from "components/common/FooterCTA";
import POSSystems from "components/elements/POSSytems";

export default function () {
  return (
    <>
      <HeadTag screen="posSystem" />
      <POSSystems />
      <FooterCTA />
    </>
  );
}
