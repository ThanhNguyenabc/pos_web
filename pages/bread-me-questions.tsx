import { BreadMeImg } from "assets/AssetUtil";
import IcBack from "assets/icons/ic_back.svg";

import IconButton from "components/common/IconButton";
import Image from "next/image";
import React, { useState } from "react";
import Progress from "components/common/progress";
import { ContactInfo } from "models/contact_info";
import ThanksYouForm from "components/common/ThanksForm";
import { Locale } from "models/app_configs";
import useTrans from "hooks/useTrans";
import dynamic from "next/dynamic";

const BreadmeIntroduction = dynamic(
  () => import("components/elements/breadme_question/BreadmeIntroduction")
);
const BreadmeCreditCard = dynamic(
  () => import("components/elements/breadme_question/BreadmeCreditCard")
);
const BreadmeDiscountQuestion = dynamic(
  () => import("components/elements/breadme_question/BreadmeDiscount")
);
const BreadmeStation = dynamic(
  () => import("components/elements/breadme_question/BreadmeStation")
);
const BreadmeSaleSystem = dynamic(
  () => import("components/elements/breadme_question/BreadmeSaleSystem")
);
const BreadmeContact = dynamic(
  () => import("components/elements/breadme_question/BreadmeContact")
);

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
  {
    [Locale.en]: "What’s your total credit card processing volume?",
    [Locale.es]:
      "¿Cuál es su volumen total de procesamiento de tarjetas de crédito?",
  },
  {
    [Locale.en]: "Are you currently on the cash discount program?",
    [Locale.es]:
      "¿Está usted actualmente en el programa de descuento en efectivo?",
  },
  {
    [Locale.en]: "How many stations are you looking for?",
    [Locale.es]: "¿Cuántas estaciones estás buscando?",
  },
  {
    [Locale.en]: "What point of sale system do you currently use?",
    [Locale.es]: "¿Qué sistema de punto de venta utiliza actualmente?",
  },
  {
    [Locale.en]: "How us contact to you?",
    [Locale.es]: "¿Cómo nos contactamos contigo?",
  },
  {},
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

const BreadmeQuestionPage = () => {
  const { locale } = useTrans();

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
    <>
      <BreadmeContext.Provider value={questionSate}>
        <div className={`flex flex-1 bg-green-100`}>
          <div className="flex container-content mx-auto lg:px-8 lg:flex-row lg:gap-12">
            <BreadmeIntroduction
              onStart={onStart}
              isShow={!questionSate.showQuestions}
            />
            <div
              className={`${
                questionSate.showQuestions ? "flex" : "hidden"
              }  flex-col w-full bg-white lg:my-12 lg:flex`}
            >
              <Progress
                value={questionSate.cQuestionIndex + 1}
                max={PAGES.length}
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

                <div className="flex-1 flex justify-center px-4">
                  <Image
                    src={BreadMeImg}
                    className="object-contain"
                    alt="breadme-img"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
              <div className="flex flex-col max-w-lg w-full mx-auto px-4 py-6 gap-6 md:gap-20">
                <h3 className="flex-1 txt-heading-xsmal text-center md:text-3xl">
                  {Questions[questionSate.cQuestionIndex][locale] || ""}
                </h3>
                {PAGES[questionSate.cQuestionIndex]}
              </div>
            </div>
          </div>
        </div>
      </BreadmeContext.Provider>
    </>
  );
};

export default BreadmeQuestionPage;
