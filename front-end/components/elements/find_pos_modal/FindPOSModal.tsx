import { Button } from "components/common/Button";
import { ContactInfo } from "components/common/ContactForm";
import SelectedList from "components/common/SelectedList";
import ThanksYouForm from "components/common/thanksform";
import React, { useState } from "react";
import BusinessInfo from "./BusinessInfo";
import { CreditCardVolume } from "./CreditCardVolume";
import PersonalInfo from "./PersonalInfo";
import Image from "next/image";
import { IcBack, IcChervonRight } from "assets/AssetUtil";
import HeaderWithBack from "components/common/HeaderWithBack";

interface FindPOSData {
  creditVolumeId?: number;
  businessContact?: ContactInfo;
  contact?: ContactInfo;
}

type FindPOSState = {
  cQuestionIndex: number;
  data?: FindPOSData;
  setData: (data: FindPOSData) => void;
};

export const FindPOSModalId = "FindPOSModalId";

export const FindPOSModalContext = React.createContext<FindPOSState>({
  cQuestionIndex: 0,
  setData: () => {},
});

const PAGE_TITLE = [
  "What’s your yearly credit card volume?",
  "Your business information",
  "Your contact information",
];
const PAGES = [<CreditCardVolume />, <BusinessInfo />, <PersonalInfo />];

const FindPOSModal = () => {
  const [isSubmit, setSubmit] = useState(false);

  const setData = (data: FindPOSData) => {
    setFormData((preState) => ({
      ...preState,
      questionData: data,
      cQuestionIndex: preState.cQuestionIndex + 1,
    }));
  };

  const [formState, setFormData] = useState<FindPOSState>({
    cQuestionIndex: 0,
    setData,
  });

  const onBack = () => {
    if (formState.cQuestionIndex > 0) {
      setFormData((preState) => ({
        ...preState,
        cQuestionIndex: preState.cQuestionIndex - 1,
      }));
    }
  };
  const nextButton = () => {
    if (formState.cQuestionIndex < PAGES.length - 1) {
      setFormData((preState) => ({
        ...preState,
        cQuestionIndex: preState.cQuestionIndex + 1,
      }));
    }
  };

  const onClose = () => {
    document.getElementById(FindPOSModalId)?.click();
    setSubmit(false);
    setFormData({ ...formState, cQuestionIndex: 0 });
  };

  return (
    <FindPOSModalContext.Provider value={formState}>
      <input type="checkbox" id={FindPOSModalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-0 h-full ">
          <div className="flex flex-col w-full h-full">
            <HeaderWithBack title="Get Free POS" onClose={onClose} />

            {isSubmit ? (
              <ThanksYouForm />
            ) : (
              <div className="flex flex-col gap-6 h-full">
                <progress
                  className="progress progress-secondary w-full"
                  value={formState.cQuestionIndex + 1}
                  max={PAGES.length}
                />
                <p className="txt-heading-xsmal text-center px-4 mt-6">
                  {PAGE_TITLE[formState.cQuestionIndex]}
                </p>
                <div className="flex-1">{PAGES[formState.cQuestionIndex]}</div>
                <div
                  className={`${
                    formState.cQuestionIndex > 0 ? "flex" : "hidden"
                  } flex-row gap-4 p-4`}
                >
                  <Button
                    type="OUTLINE_MEDIUM"
                    title="Back"
                    classname={`mt-16 md:text-xl`}
                    leftIcon={<Image src={IcBack} alt="back" />}
                    onClick={onBack}
                  />
                  <Button
                    type="SOLID_MEDIUM"
                    title={
                      formState.cQuestionIndex < PAGES.length - 1
                        ? "Next"
                        : "Submit"
                    }
                    background="bg-primary"
                    classname={`flex-1 mt-16 md:text-xl`}
                    onClick={() => {
                      if (formState.cQuestionIndex < PAGES.length - 1) {
                        setData({ ...formState.data });
                      } else {
                        setSubmit(true);
                      }
                    }}
                    rightIcon={
                      <>
                        <svg
                          width="20"
                          height="14"
                          viewBox="0 0 20 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.3 13.2998C12.1167 13.1165 12.025 12.8831 12.025 12.5998C12.025 12.3165 12.1167 12.0831 12.3 11.8998L16.2 7.9998H1C0.716667 7.9998 0.479333 7.9038 0.288 7.7118C0.0960001 7.52047 0 7.28314 0 6.9998C0 6.71647 0.0960001 6.4788 0.288 6.2868C0.479333 6.09547 0.716667 5.9998 1 5.9998H16.2L12.3 2.0998C12.1167 1.91647 12.025 1.68314 12.025 1.3998C12.025 1.11647 12.1167 0.883138 12.3 0.699804C12.4833 0.516471 12.7167 0.424805 13 0.424805C13.2833 0.424805 13.5167 0.516471 13.7 0.699804L19.3 6.2998C19.4 6.3998 19.471 6.50814 19.513 6.6248C19.5543 6.74147 19.575 6.86647 19.575 6.9998C19.575 7.13314 19.5543 7.25814 19.513 7.3748C19.471 7.49147 19.4 7.5998 19.3 7.6998L13.7 13.2998C13.5167 13.4831 13.2833 13.5748 13 13.5748C12.7167 13.5748 12.4833 13.4831 12.3 13.2998Z"
                            fill="white"
                          />
                        </svg>
                      </>
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </FindPOSModalContext.Provider>
  );
};

export default FindPOSModal;
