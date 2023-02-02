import { applyPartner } from "api_client/axios_client";
import { Button } from "components/common/Button";
import HeaderWithBack from "components/common/HeaderWithBack";
import Input from "components/common/Input";
import Modal from "components/common/Modal";
import ThanksYouForm from "components/common/thanksform";
import { ContactInfo } from "models/contact_info";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AppRoutes from "utils/routes";
import { isValidEmail, isValidPhoneNumber } from "utils/StringUtil";

export const ApplyPartnerDialogId = "apply-partner-dialog";

const initialState: ContactInfo & {
  nameError: string;
  emailError: string;
  phoneError: string;
} = {
  name: "",
  phone: "",
  email: "",
  nameError: "",
  emailError: "",
  phoneError: "",
};

const ApplyPartnerDialog = () => {
  const [isSubmit, setSubmit] = useState(false);
  const router = useRouter();

  const [contactInfo, setContactInfo] = useState<
    ContactInfo & {
      nameError: string;
      emailError: string;
      phoneError: string;
    }
  >(initialState);

  const onCloseForm = () => {
    setSubmit(false);
    setContactInfo(initialState);
    document.getElementById(ApplyPartnerDialogId)?.click();
  };

  const navigateToBreadme = () => {
    onCloseForm();
    router.push(AppRoutes.BreadmePage);
  };

  const submitForm = async () => {
    const { name = "", email = "", phone = "" } = contactInfo;

    if (name.length <= 0) {
      setContactInfo((prev) => ({
        ...prev,
        nameError: "Your name is not empty",
      }));
      return;
    }
    if (!isValidEmail(email)) {
      setContactInfo((prev) => ({
        ...prev,
        emailError: "Your email is not correct",
      }));
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setContactInfo((prev) => ({
        ...prev,
        phoneError: "Your phone number must be at least 10 numbers",
      }));
      return;
    }

    setContactInfo((prev) => ({
      ...prev,
      phoneError: "",
      emailError: "",
      nameError: "",
    }));

    await applyPartner({
      name: name,
      phone: phone,
      email: email,
    });

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
            <div className="flex flex-col flex-1 mt-6 gap-6 mb-8">
              <Input
                label={"Your name"}
                inputProps={{
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    setContactInfo((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  },
                }}
                errorMessage={
                  contactInfo.nameError ? contactInfo.nameError : undefined
                }
              />
              <Input
                label="Email"
                inputProps={{
                  type: "email",
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    setContactInfo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  },
                }}
                errorMessage={
                  contactInfo.emailError ? contactInfo.emailError : undefined
                }
              />
              <Input
                label={"Your Phone number"}
                inputProps={{
                  type: "tel",
                  placeholder: "(555) 000-0000",
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    setContactInfo((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }));
                  },
                }}
                errorMessage={
                  contactInfo.phoneError ? contactInfo.phoneError : undefined
                }
              />
            </div>
            <Button title="Get started" onClick={submitForm} />
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
