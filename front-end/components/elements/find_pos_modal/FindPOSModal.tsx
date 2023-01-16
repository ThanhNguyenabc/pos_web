import { ContactInfo } from "components/common/ContactForm";
import ThanksYouForm from "components/common/thanksform";
import React, { useState } from "react";
import BusinessInfo from "./BusinessInfo";
import { CreditCardVolume } from "./CreditCardVolume";
import PersonalInfo from "./PersonalInfo";
import HeaderWithBack from "components/common/HeaderWithBack";
import Modal from "components/common/Modal";

interface FindPOSData {
  creditVolumeId?: number;
  businessName?: string;
  businessPhone?: string;
  contact?: ContactInfo;
}

type FindPOSState = {
  cQuestionIndex: number;
  data?: FindPOSData;
  setData: (data: FindPOSData) => void;
  nextPage: () => void;
  onBack: () => void;
};

export const FindPOSModalId = "FindPOSModalId";

export const FindPOSModalContext = React.createContext<FindPOSState>({
  cQuestionIndex: 0,
  setData: () => {},
  nextPage: () => {},
  onBack: () => {},
});

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
  <ThanksYouForm  key={`thanks-form`}/>,
];

const FindPOSModal = () => {
  const setData = (v: FindPOSData) => {
    setFormData((preState) => ({
      ...preState,
      data: v,
    }));
  };

  const nextButton = () => {
    setFormData((preState) => ({
      ...preState,
      cQuestionIndex: preState.cQuestionIndex + 1,
    }));
  };

  const onBackBtn = () => {
    setFormData((preState) => ({
      ...preState,
      cQuestionIndex: preState.cQuestionIndex - 1,
    }));
  };

  const [formState, setFormData] = useState<FindPOSState>({
    cQuestionIndex: 0,
    setData,
    nextPage: nextButton,
    onBack: onBackBtn,
  });

  const onClose = () => {
    setFormData({ ...formState, cQuestionIndex: 0, data: undefined });
    document.getElementById(FindPOSModalId)?.click();
  };

  return (
    <FindPOSModalContext.Provider value={formState}>
      <Modal modalId={FindPOSModalId}>
        <div className="flex flex-col w-full h-full ">
          <HeaderWithBack title="Get Free POS" onClose={onClose} />

          <div className="flex flex-col gap-6 h-full">
            <progress
              className={`progress progress-secondary w-full md:h-4 ${
                formState.cQuestionIndex == PAGES.length - 1 ? "hidden" : "flex"
              }`}
              value={formState.cQuestionIndex + 1}
              max={PAGES.length}
            />
            <p className="txt-heading-xsmal text-center px-4 mt-6 md:mt-10 md:text-3xl">
              {PAGE_TITLE[formState.cQuestionIndex]}
            </p>
            <div className="flex-1 p-4 md:p-8">
              {PAGES[formState.cQuestionIndex]}
            </div>
          </div>
        </div>
      </Modal>
    </FindPOSModalContext.Provider>
  );
};

export default FindPOSModal;
