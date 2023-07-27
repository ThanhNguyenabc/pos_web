import { applyPartner } from "api_client/axios_client";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import HeaderWithBack from "components/common/HeaderWithBack";
import ThanksYouForm from "components/common/ThanksForm";
import { ContactInfo } from "models/contact_info";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSideBar from "stores/useSideBar";
import AppRoutes from "utils/routes";

const ApplyPartner = () => {
  const [isSubmit, setSubmit] = useState(false);
  const closeSideBar = useSideBar((state) => state.closeSideBar);
  const router = useRouter();

  const onCloseForm = () => {
    setSubmit(false);
    closeSideBar();
  };

  const navigateToBreadme = () => {
    onCloseForm();
    router.push(AppRoutes.BreadmePage);
  };

  const submitForm = async (contact: ContactInfo) => {
    applyPartner({
      conversion_funnel: "Partner",
      ref_url: window.location.href,
      data: contact,
    });
    setSubmit(true);
  };

  return (
    <>
      <HeaderWithBack title="" onClose={onCloseForm} />
      <div className="flex flex-col w-full lg:w-[500px] mx-auto px-4 md:px-8 lg:px-12">
        {!isSubmit && (
          <div className="flex flex-col p-4 gap-4 h-full">
            <p className="txt-heading-small text-center">
              Apply to be an Agent
            </p>
            <p className="text-center text-neutral-700">
              Please provide your name and contact information.
            </p>
            <ContactForm
              classname="mt-2 md:mt-8"
              onSubmitForm={submitForm}
              submitBtnTitle="Get Started"
            />
          </div>
        )}
        {isSubmit && (
          <div className="flex flex-col gap-6 md:gap-12">
            <ThanksYouForm title="Thanks for your time!" />
            <Button
              title="Explore Breadme"
              isOutLine
              classname="w-fit self-center"
              onClick={navigateToBreadme}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ApplyPartner;
