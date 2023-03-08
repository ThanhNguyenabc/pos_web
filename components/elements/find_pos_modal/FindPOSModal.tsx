import React, { useState } from "react";
import BusinessInfo from "./BusinessInfo";
import { CreditCardVolume } from "./CreditCardVolume";
import PersonalInfo from "./PersonalInfo";
import HeaderWithBack from "components/common/HeaderWithBack";
import Progress from "components/common/progress";
import ThanksYouForm from "components/common/ThanksForm";
import useFindPOSStore from "stores/findpos_store";
import useSideBar from "stores/useSideBar";

const PAGE_TITLE = [
  "What’s your yearly credit card volume?",
  "Your business information",
  "Your contact information",
  "",
];
const PAGES = [
  <CreditCardVolume key={`credit-key`} />,
  <BusinessInfo key={`business-key`} />,
  <PersonalInfo key={`personal-key`} />,
  <ThanksYouForm key={`thanks-form`} title="Thanks for your time!" />,
];

const FindPOSModal = () => {
  const { cQuestionIndex, clearStoreData } = useFindPOSStore();
  const { closeSideBar } = useSideBar();

  const onClose = () => {
    closeSideBar();
    clearStoreData();
  };
  return (
    <div className="flex flex-col">
      <HeaderWithBack title="Get Free POS" onClose={onClose} />

      <div className="flex flex-col gap-6 md:gap-10">
        <Progress
          value={cQuestionIndex + 1}
          max={PAGES.length}
          className={`${
            cQuestionIndex == PAGES.length - 1 ? "hidden" : "flex"
          }`}
        />
        <div className=" flex flex-col w-full max-w-[500px] px-4 md:px-8 mx-auto">
          <p className="txt-heading-xsmal text-center md:text-3xl">
            {PAGE_TITLE[cQuestionIndex]}
          </p>
          <div className="mt-6 md:mt-12">{PAGES[cQuestionIndex]}</div>
        </div>
      </div>
    </div>
  );
};

export default FindPOSModal;
