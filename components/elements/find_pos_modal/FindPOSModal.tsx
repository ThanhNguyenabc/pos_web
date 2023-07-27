import React from "react";
import BusinessInfo from "./BusinessInfo";
import { CreditCardVolume } from "./CreditCardVolume";
import PersonalInfo from "./PersonalInfo";
import HeaderWithBack from "components/common/HeaderWithBack";
import Progress from "components/common/progress";
import ThanksYouForm from "components/common/ThanksForm";
import useFindPOSStore from "stores/findpos_store";
import useSideBar from "stores/useSideBar";
import useTrans from "hooks/useTrans";

const PAGE_TITLE = [
  "pos_question_credit_volume",
  "pos_question_business_info",
  "pos_question_contact_info",
  "",
];
const PAGES = [
  <CreditCardVolume key={`credit-key`} />,
  <BusinessInfo key={`business-key`} />,
  <PersonalInfo key={`personal-key`} />,
  <ThanksYouForm
    key={`thanks-form`}
    title="thanks_your_time"
    eventName="lead_form"
  />,
];

const FindPOSModal = () => {
  const { t } = useTrans();
  const { cQuestionIndex, clearStoreData } = useFindPOSStore();
  const closeSideBar = useSideBar((state) => state.closeSideBar);

  const onClose = () => {
    closeSideBar();
    clearStoreData();
  };

  return (
    <div className="flex flex-col">
      <HeaderWithBack title={t("get_a_free_pos")} onClose={onClose} />

      <div className="flex flex-col gap-6 md:gap-10">
        <Progress
          value={cQuestionIndex + 1}
          max={PAGES.length}
          className={`${
            cQuestionIndex == PAGES.length - 1 ? "hidden" : "flex"
          }`}
        />
        <div className="flex flex-col w-full max-w-[500px] px-4 md:px-8 mx-auto">
          <p className="txt-heading-xsmal text-center md:text-3xl">
            {t(PAGE_TITLE[cQuestionIndex])}
          </p>
          <div className="mt-6 md:mt-12">{PAGES[cQuestionIndex]}</div>
        </div>
      </div>
    </div>
  );
};

export default FindPOSModal;
