import HeaderWithBack from "components/common/HeaderWithBack";
import SelectedList from "components/common/SelectedList";
import React, { useState } from "react";
import Image from "next/image";
import { ContactInfo } from "components/common/ContactForm";
import { Button } from "components/common/Button";
import ThanksYouForm from "components/common/thanksform";
import Modal from "components/common/Modal";
import Input from "components/common/Input";
import { IcAmericanFlag } from "assets/AssetUtil";
import {
  BusinessTypes,
  isValidEmail,
  isValidPhoneNumber,
} from "utils/StringUtil";
import { submitForDemoPOS } from "api_client/axios_client";

export const RequestDemoModalId = "requestDemoModal";

const RequestDemoPOS = () => {
  const [isSubmit, setSubmit] = useState(false);
  const [contactInfo, setContactInfo] = useState<
    ContactInfo & {
      nameError: string;
      emailError: string;
      phoneError: string;
      businessType: string;
    }
  >({
    nameError: "",
    emailError: "",
    phoneError: "",
    businessType: "",
  });

  const onClose = () => {
    setSubmit(false);
    setContactInfo((prev) => ({
      ...prev,
      name: "",
      phoneNumber: "",
      email: "",
    }));
    document.getElementById(RequestDemoModalId)?.click();
  };

  const submitForm = async () => {
    const {
      name = "",
      email = "",
      phoneNumber = "",
      businessType,
    } = contactInfo;

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
    if (!isValidPhoneNumber(phoneNumber)) {
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

    await submitForDemoPOS({
      name: name,
      personalPhone: phoneNumber,
      email: email,
      typeBusiness: businessType,
    });
    setSubmit(true);
  };

  const PAGE = isSubmit ? (
    <ThanksYouForm />
  ) : (
    <div className="flex flex-col px-4 py-5">
      <p className="txt-md-bold mb-4 md:mb-6">Type of business</p>
      <SelectedList
        data={BusinessTypes}
        classname={" p-0 md:grid-cols-2"}
        itemBuilder={(item, index: number) => {
          return (
            <div className="flex w-full md:h-[152px] flex-row items-center p-3 gap-4 md:flex-col md:justify-center">
              <Image
                src={item.img}
                className="w-[84px] h-[56px] md:w-[120px] md:h-20"
                alt="image"
              />
              <p className="txt-md-bold md:text-center ">{item.title}</p>
            </div>
          );
        }}
        onItemSelected={(index) => {
          setContactInfo((prev) => ({
            ...prev,
            businessType: BusinessTypes[index].type,
          }));
        }}
      />
      <p className="txt-md-bold mt-10 mb-4">Contact informations</p>
      <div className={`flex flex-col gap-6`}>
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
            contactInfo.nameError.length > 0 ? contactInfo.nameError : undefined
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
            contactInfo.emailError.length > 0
              ? contactInfo.emailError
              : undefined
          }
        />

        <Input
          label={"Your Phone number"}
          leftIcon={<IcAmericanFlag className="text-2xl" />}
          inputProps={{
            type: "tel",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setContactInfo((prev) => ({
                ...prev,
                phoneNumber: e.target.value,
              }));
            },
          }}
          errorMessage={
            contactInfo.phoneError.length > 0
              ? contactInfo.phoneError
              : undefined
          }
        />
      </div>
      <Button classname="mt-12" title="Send Request" onClick={submitForm} />
    </div>
  );

  return (
    <>
      <Modal modalId={RequestDemoModalId}>
        <div className="flex flex-col w-full">
          <HeaderWithBack title="Request a Demo" onClose={onClose} />
          {PAGE}
        </div>
      </Modal>
    </>
  );
};

export default RequestDemoPOS;
