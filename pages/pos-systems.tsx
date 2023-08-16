import React from "react";
import HeadTag from "components/common/HeadTag";
import { FooterCTA } from "components/common/FooterCTA";
import POSSystems from "components/elements/POSSytems";

export default function index() {
  return (
    <>
      <HeadTag screen="posSystem" />
      <POSSystems />
      <FooterCTA
        heading="Real advice from real people"
        description="Speak with a consultant today to find he best POS for your business"
        formTitle="Qualify for Free Premium POS"
        formSubTilte="BestPOS helps businesses secure the best deals on premium POS systems. Sign up to receive deals."
      />
    </>
  );
}
