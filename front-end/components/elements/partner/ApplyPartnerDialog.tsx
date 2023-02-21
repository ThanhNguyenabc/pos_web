import { applyPartner } from "api_client/axios_client";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import HeaderWithBack from "components/common/HeaderWithBack";
import Modal from "components/common/Modal";
import ThanksYouForm from "components/common/thanksform";
import { ContactInfo } from "models/contact_info";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AppRoutes from "utils/routes";

export const ApplyPartnerDialogId = "apply-partner-dialog";

const ApplyPartnerDialog = () => {
  const [isSubmit, setSubmit] = useState(false);
  const router = useRouter();

  const onCloseForm = () => {
    setSubmit(false);
    document.getElementById(ApplyPartnerDialogId)?.click();
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
    <Modal modalId={ApplyPartnerDialogId}>
      <div className="flex flex-col h-full">
        <HeaderWithBack title="" onClose={onCloseForm} />
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
    </Modal>
  );
};

export default ApplyPartnerDialog;
