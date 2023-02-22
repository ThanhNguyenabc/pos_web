import { BreadMeImg, IcBack } from "assets/AssetUtil";
import IconButton from "components/common/IconButton";
import Image from "next/image";
import React, { useState } from "react";
import BreadmeIntroduction from "components/elements/breadme_question/BreadmeIntroduction";
import BreadmeCreditCard from "components/elements/breadme_question/BreadmeCreditCard";
import BreadmeDiscountQuestion from "components/elements/breadme_question/BreadmeDiscount";
import BreadmeStation from "components/elements/breadme_question/BreadmeStation";
import BreadmeSaleSystem from "components/elements/breadme_question/BreadmeSaleSystem";
import BreadmeContact from "components/elements/breadme_question/BreadmeContact";
import Progress from "components/common/progress";
import { ContactInfo } from "models/contact_info";
import ThanksYouForm from "components/common/thanksform";

type BreadmeState = {
  showQuestions: boolean;
  cQuestionIndex: number;
  questionData?: BreadmeData;
  setQuestionData: (data: BreadmeData) => void;
  nextPage: () => void;
};

export const BreadmeContext = React.createContext<BreadmeState>({
  showQuestions: false,
  cQuestionIndex: 0,
  setQuestionData: () => {},
  nextPage: () => {},
});

const Questions = [
  "What’s your total credit card processing volume?",
  "Are you currently on the cash discount program?",
  "How many stations are you looking for?",
  "What point of sale system do you currently use?",
  "How us contact to you?",
  "",
];

const PAGES = [
  <BreadmeCreditCard key={"breadme-credit-card"} />,
  <BreadmeDiscountQuestion key={"breadme-discount"} />,
  <BreadmeStation key={"breadme-station"} />,
  <BreadmeSaleSystem key={"breadme-sale-system"} />,
  <BreadmeContact key={"breadme-contact"} />,
  <ThanksYouForm key={`breadme-thankyou`} />,
];

interface BreadmeData {
  creditCardVolumnId?: number;
  isDiscountIndex?: number;
  numberStationIndex?: number;
  saleSystemIndex?: number;
  otherSaleSystem?: string;
  contacInfo?: ContactInfo;
}

const Questionnaire = () => {
  const updateQuestionData = (data: BreadmeData) => {
    setQuestionState((preState) => ({
      ...preState,
      questionData: data,
      cQuestionIndex: preState.cQuestionIndex + 1,
    }));
  };

  const onNextPage = () => {
    setQuestionState((preState) => ({
      ...preState,
      cQuestionIndex: preState.cQuestionIndex + 1,
    }));
  };

  const [questionSate, setQuestionState] = useState<BreadmeState>({
    showQuestions: false,
    cQuestionIndex: 0,
    setQuestionData: updateQuestionData,
    nextPage: onNextPage,
  });

  const onPressBack = () => {
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

  return (
    <BreadmeContext.Provider value={questionSate}>
      <div className={`flex w-full flex-1 flex-col lg:flex-row`}>
        <div
          className={`${
            questionSate.showQuestions ? "hidden" : "flex"
          } flex-1 lg:flex lg:bg-green-100`}
        >
          <BreadmeIntroduction onStart={onStart} />
        </div>
        <div
          className={`${
            questionSate.showQuestions ? "flex" : "hidden"
          } lg:flex flex-1 flex-col`}
        >
          <Progress
            value={questionSate.cQuestionIndex + 1}
            max={PAGES.length}
            progressColor="bg-success"
          />
          <div className="w-full flex flex-row items-center justify-center p-4">
            <div
              className={`flex ${
                questionSate.cQuestionIndex > 0 &&
                questionSate.cQuestionIndex < PAGES.length - 1
                  ? "xl:flex"
                  : "hidden"
              }`}
            >
              <IconButton onClick={onPressBack}>
                <IcBack className="text-xl" />
              </IconButton>
            </div>

            <div className="flex-1 flex justify-center px-6">
              <Image src={BreadMeImg} className="h-10 object-contain" alt="" />
            </div>
          </div>
          <div className="flex flex-col max-w-lg w-full mx-auto px-4 py-6 gap-6 md:gap-20">
            <p className="flex-1 txt-heading-xsmal text-center md:text-3xl">
              {Questions[questionSate.cQuestionIndex]}
            </p>
            {PAGES[questionSate.cQuestionIndex]}
          </div>
        </div>
      </div>
    </BreadmeContext.Provider>
  );
};

export default Questionnaire;
