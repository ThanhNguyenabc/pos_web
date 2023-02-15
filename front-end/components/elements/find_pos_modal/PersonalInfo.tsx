import { submitForFreePOS } from "api_client/axios_client";
import { IcAmericanFlag, IcBack } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm, { ContactInfo } from "components/common/ContactForm";
import Input from "components/common/Input";
import PhoneNumberInput from "components/common/PhoneNumberInput";
import React, { useState } from "react";
import {
  CreditCardVolumeData,
  isValidEmail,
  isValidPhoneNumber,
} from "utils/StringUtil";
import { FindPOSModalContext } from "./FindPOSModal";

const PersonalInfo = () => {
  const value = React.useContext(FindPOSModalContext);
  const [contactInfo, setContactInfo] = useState<
    ContactInfo & {
      nameError: string;
      emailError: string;
      phoneError: string;
    }
  >({
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const onSubmit = async () => {
    const { name = "", email = "", phoneNumber = "" } = contactInfo;

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

    await submitForFreePOS({
      creditCardVolume: CreditCardVolumeData[value.data?.creditVolumeId || 0],
      businessname: value.data?.businessName || "",
      businessphone: value.data?.businessPhone || "",
      personalPhone: phoneNumber,
      email: email,
      name: name,
    });
    value.nextPage();
  };

  return (
    <div className="flex flex-col gap-6">
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
          contactInfo.emailError.length > 0 ? contactInfo.emailError : undefined
        }
      />
      <PhoneNumberInput
        title={"Your Phone number"}
        onChangeValue={(value) => {
          setContactInfo((prev) => ({
            ...prev,
            phoneNumber: value,
          }));
        }}
        errorMessage={
          contactInfo.phoneError.length > 0 ? contactInfo.phoneError : undefined
        }
      />
      <div className={`flex flex-row gap-4`}>
        <Button
          title="Back"
          isOutLine={true}
          classname={`mt-16 md:text-xl`}
          leftIcon={<IcBack />}
          onClick={value.onBack}
        />
        <Button
          title={"Submit"}
          classname={`flex-1 mt-16 md:text-xl`}
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
