import { IcBack } from "assets/AssetUtil";
import IconButton from "components/common/IconButton";
import Introduction from "components/elements/questionnaire/Introduction";
import StationQuestion from "components/elements/questionnaire/StationQuestion";
import React, { useEffect } from "react";
import BusinessQuestion from "components/elements/questionnaire/BusinessQuestion";
import SaleSystemQuestion from "components/elements/questionnaire/SaleSystemQuestion";
import HandHeldQuestion from "components/elements/questionnaire/HandheldQuestion";
import CashDiscountQuestion from "components/elements/questionnaire/CashDiscountQuestion";
import QuestionnaireContact from "components/elements/questionnaire/QuestionnaireContact";
import useQuestionnaireStore from "stores/questionnaire_store";

const Questions = [
  "What best describes your business?",
  "Do you currently own a point of sale system?",
  "How many stations do you require?",
  "How many handhelds do you require?",
  "Are you currently on the cash discount program?",
  "Connect today!",
];

const PAGES = [
  <BusinessQuestion key={`business-key`} />,
  <SaleSystemQuestion key={`salesystem-key`} />,
  <StationQuestion key={`station-key`} />,
  <HandHeldQuestion key={`handheld-key`} />,
  <CashDiscountQuestion key={`discount-key`} />,
  <QuestionnaireContact key={"questionnaire-contact"} />,
];

const Questionnaire = () => {
  const questionnaireState = useQuestionnaireStore();

  useEffect(() => {
    return () => questionnaireState.clearStoreData();
  }, []);

  const backButton = () => {
    if (questionnaireState.currentQuestionIndex > 0) {
      questionnaireState.backToPrevious();
    }
  };

  const onStart = () => {
    questionnaireState.showQuestion();
  };

  return (
    <div className={`flex w-full flex-1 flex-col min-h-screen lg:flex-row`}>
      <Introduction
        classname={`flex-1 hidden lg:flex lg:bg-gradient-to-b  lg:from-[#FF5A22] lg:to-[#FFA722] ${
          questionnaireState.isShowQuestion ? "hidden" : "flex"
        }`}
        onStart={onStart}
      />

      <div
        className={`${
          questionnaireState.isShowQuestion ? "flex" : "hidden"
        } lg:flex w-full flex-1 flex-col`}
      >
        <progress
          className="progress progress-secondary w-full md:h-4"
          value={questionnaireState.currentQuestionIndex + 1}
          max={PAGES.length}
        />

        <div className="w-full flex flex-col mb-6 p-4 gap-4 justify-center md:py-6 md:flex-row md:items-center md:gap-3">
          <IconButton
            onClick={backButton}
            classname={
              questionnaireState.currentQuestionIndex > 0 ? "flex" : "hidden"
            }
          >
            <IcBack className="text-xl" />
          </IconButton>
          <p className="flex-1 txt-heading-xsmal text-center md:mr-10 md:text-3xl">
            {Questions[questionnaireState.currentQuestionIndex]}
          </p>
        </div>

        <div className="flex flex-col max-w-lg w-full self-center pb-6 px-4 md:px-8 lg:p-0 lg:pb-12">
          {PAGES[questionnaireState.currentQuestionIndex]}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
