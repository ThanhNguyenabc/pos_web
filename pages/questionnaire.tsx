import IcBack from "assets/icons/ic_back.svg";

import IconButton from "components/common/IconButton";
import React, { useEffect } from "react";
import useQuestionnaireStore from "stores/questionnaire_store";
import Progress from "components/common/progress";
import useTrans from "hooks/useTrans";
import dynamic from "next/dynamic";
import HeadTag from "components/common/HeadTag";

const Introduction = dynamic(
  () => import("components/elements/questionnaire/Introduction")
);
const BusinessQuestion = dynamic(
  () => import("components/elements/questionnaire/BusinessQuestion")
);
const SaleSystemQuestion = dynamic(
  () => import("components/elements/questionnaire/SaleSystemQuestion")
);
const HandHeldQuestion = dynamic(
  () => import("components/elements/questionnaire/HandheldQuestion")
);
const CashDiscountQuestion = dynamic(
  () => import("components/elements/questionnaire/CashDiscountQuestion")
);
const QuestionnaireContact = dynamic(
  () => import("components/elements/questionnaire/QuestionnaireContact")
);
const StationQuestion = dynamic(
  () => import("components/elements/questionnaire/StationQuestion")
);
const Questions = [
  "question_your_business",
  "question_salesystem",
  "question_stations",
  "question_handhelds",
  "question_discount_program",
  "connect_today",
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
  const {
    clearStoreData,
    isShowQuestion,
    currentQuestionIndex,
    backToPrevious,
    showQuestion,
  } = useQuestionnaireStore();

  const { t } = useTrans();

  useEffect(() => {
    return () => clearStoreData();
  }, [clearStoreData]);

  const backButton = () => {
    if (currentQuestionIndex > 0) {
      backToPrevious();
    }
  };

  const onStart = () => {
    showQuestion();
  };

  return (
    <>
      <HeadTag screen="questionnaire" />
      <div className="flex min-h-screen lg:bg-blue-light">
        <div className="flex container-content w-full lg:pt-6 mx-auto lg:flex-row lg:gap-12">
          <Introduction
            className={`${isShowQuestion ? "hidden" : "flex"}`}
            onStart={onStart}
          />

          <div
            className={`${
              isShowQuestion ? "flex" : "hidden"
            } flex-col flex-1 lg:flex bg-white`}
          >
            <Progress
              value={currentQuestionIndex + 1}
              max={PAGES.length}
              progressColor={"bg-primary"}
            />
            <div className="flex flex-col mb-6 p-4 gap-4 justify-center md:py-6 md:flex-row md:items-center md:gap-3">
              <IconButton
                onClick={backButton}
                classname={currentQuestionIndex > 0 ? "flex" : "hidden"}
              >
                <IcBack className="text-xl" />
              </IconButton>
              <h3 className="flex-1 txt-heading-xsmal text-center md:mr-10 md:text-3xl">
                {t(Questions[currentQuestionIndex])}
              </h3>
            </div>
            <div className="flex flex-col max-w-lg w-full self-center pb-6 px-4 md:px-8">
              {PAGES[currentQuestionIndex]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
