import { IcBack } from "assets/AssetUtil";
import IconButton from "components/common/IconButton";
import Introduction from "components/elements/questionnaire/Introduction";
import SelectedList from "components/common/SelectedList";
import StationQuestion from "components/elements/questionnaire/StationQuestion";
import StepView from "components/elements/questionnaire/StationQuestion";
import Image from "next/image";
import React, { useState } from "react";
import BusinessQuestion from "components/elements/questionnaire/BusinessQuestion";
import SaleSystemQuestion from "components/elements/questionnaire/SaleSystemQuestion";
import HandHeldQuestion from "components/elements/questionnaire/HandheldQuestion";
import ContactForm, { ContactInfo } from "components/common/ContactForm";
import CashDiscountQuestion from "components/elements/questionnaire/CashDiscountQuestion";
import { Button } from "components/common/Button";
import QuestionnaireSuccess from "components/elements/questionnaire/QuestionnaireSuccess";

type QuestionnaireState = {
  showQuestions: boolean;
  cQuestionIndex: number;
  questionData?: QuestionData;
  setQuestionData: (data: QuestionData) => void;
};
export const QuestionnaireContext = React.createContext<QuestionnaireState>({
  showQuestions: false,
  cQuestionIndex: 0,
  setQuestionData: () => {},
});

const Questions = [
  "What best describes your business?",
  "Do you currently own a point of sale system?",
  "How many stations do you require?",
  "How many handhelds do you require?",
  "Are you currently on the cash discount program?",
  "Connect today!",
];

const PAGES = [
  <BusinessQuestion />,
  <SaleSystemQuestion />,
  <StationQuestion />,
  <HandHeldQuestion />,
  <CashDiscountQuestion />,
  <ContactForm />,
];

interface QuestionData {
  businessId?: number;
  numberStationIndex?: number;
  handHeldIndex?: number;
  contacInfo?: ContactInfo;
  isDiscountIndex?: number;
  isOwnSaleSystemIndex?: number;
}

const Questionnaire = () => {
  const [isSubmit, setSubmit] = useState(false);
  const updateQuestionData = (data: QuestionData) => {
    setQuestionState((preState) => ({
      ...preState,
      questionData: data,
      cQuestionIndex: preState.cQuestionIndex + 1,
    }));
  };

  const [questionSate, setQuestionState] = useState<QuestionnaireState>({
    showQuestions: false,
    cQuestionIndex: 0,
    setQuestionData: updateQuestionData,
  });

  const backButton = () => {
    if (questionSate.cQuestionIndex > 0) {
      setQuestionState((preState) => ({
        ...preState,
        cQuestionIndex: preState.cQuestionIndex - 1,
      }));
    }
  };

  const onStart = () => {
    setQuestionState((preState) => ({
      ...preState,
      showQuestions: true,
    }));
  };

  const onSubmit = () => {
    setSubmit(true);
  };

  return (
    <QuestionnaireContext.Provider value={questionSate}>
      <div
        className={`flex flex-col lg:flex-row min-h-[95vh] ${
          isSubmit ? "hidden" : "flex"
        }`}
      >
        <Introduction
          classname={`hidden lg:flex lg:bg-gradient-to-b  lg:from-[#FF5A22] lg:to-[#FFA722] ${
            questionSate.showQuestions ? "hidden" : "flex"
          }`}
          onStart={onStart}
        />
        <div
          className={`w-full flex-col flex-1 ${
            questionSate.showQuestions ? "flex" : "hidden"
          } lg:flex`}
        >
          <progress
            className="progress progress-secondary w-full"
            value={questionSate.cQuestionIndex + 1}
            max={PAGES.length}
          />

          <div className="w-full flex flex-col mb-6 p-4 gap-4 md:py-6 md:flex-row md:items-center md:gap-3">
            <IconButton onClick={backButton}>
              <Image src={IcBack} alt="back" />
            </IconButton>
            <p className="flex-1 txt-heading-xsmal text-center mr-10">
              {Questions[questionSate.cQuestionIndex]}
            </p>
          </div>

          <div className="flex flex-col max-w-lg w-full self-center pb-6">
            {PAGES[questionSate.cQuestionIndex]}
            <Button
              type="SOLID_MEDIUM"
              title="Submit"
              background="bg-primary"
              classname={`mx-4 mt-16 hidden ${
                questionSate.cQuestionIndex == PAGES.length - 1 ? "flex" : ""
              } md:h-16 md:text-xl`}
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
      <QuestionnaireSuccess classname={`${isSubmit ? "flex" : "hidden"}`} />
    </QuestionnaireContext.Provider>
  );
};

export default Questionnaire;
