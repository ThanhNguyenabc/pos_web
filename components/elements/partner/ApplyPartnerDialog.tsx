import { applyPartner } from "api_client/axios_client";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import HeaderWithBack from "components/common/HeaderWithBack";
import ThanksYouForm from "components/common/ThanksForm";
import { ContactInfo } from "models/contact_info";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AppRoutes from "utils/routes";

const ApplyPartnerDialog = ({ onClose }: { onClose: () => void }) => {
  const [isSubmit, setSubmit] = useState(false);
  const router = useRouter();

  const onCloseForm = () => {
    setSubmit(false);
    onClose?.();
  };

  const navigateToBreadme = () => {
    onCloseForm();
    router.push(AppRoutes.BreadmePage);
  };

  const submitForm = async (contact: ContactInfo) => {
    await applyPartner(contact);
    setSubmit(true);
  };

  return (
    <>
      <HeaderWithBack title="" onClose={onCloseForm} />
      <div className=" flex flex-col  w-full lg:w-[500px] mx-auto px-4 md:px-8 lg:px-12">
        {!isSubmit && (
          <div className=" flex flex-col p-4 h-full">
            <p className="txt-heading-small mb-4 text-center">
              Apply to be an Agent
            </p>
            <p className="text-center">
              Please provide your name and contact information.
            </p>
            <ContactForm
              onSubmitForm={submitForm}
              submitBtnTitle="Get Started"
            />
          </div>
        )}
        {isSubmit && (
          <div className="flex flex-col gap-6">
            <ThanksYouForm />
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

export default ApplyPartnerDialog;
