import { submitBreadme } from "api_client/axios_client";
import { IcAmericanFlag } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import Input from "components/common/Input";
import { ContactInfo } from "models/contact_info";
import { BreadmeContext } from "pages/bread-me-questions";
import React, { useContext, useState } from "react";
import ColorUtils from "utils/ColorUtils";
import {
  BreadmeCreditCardVolumeData,
  BreadmeStationData,
  isValidEmail,
  isValidPhoneNumber,
  SaleSystem,
  YesNoQuestion,
} from "utils/StringUtil";

const BreadmeContact = () => {
  const context = useContext(BreadmeContext);

  const [contactInfo, setContactInfo] = useState<
    ContactInfo & {
      nameError: string;
      emailError: string;
      phoneError: string;
    }
  >({
    name: "",
    phone: "",
    email: "",
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const submit = async () => {
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

    const currentSaleSystem = context.questionData?.saleSystemIndex
      ? SaleSystem[context.questionData?.saleSystemIndex]
      : context.questionData?.otherSaleSystem;

    await submitBreadme({
      creditVolume:
        BreadmeCreditCardVolumeData[
          context.questionData?.creditCardVolumnId || 0
        ],
      numberOfStations:
        BreadmeStationData[context.questionData?.numberStationIndex || 0]
          .content || "",
      currentUseSaleSystem: currentSaleSystem || "",
      discountProgram:
        YesNoQuestion[context.questionData?.isDiscountIndex || 0],
      name: name,
      phone: phone,
      email: email,
    });

    context.nextPage();
  };

  return (
    <div className="flex flex-col">
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

      <Input
        label={"Your Phone number"}
        leftIcon={<IcAmericanFlag className=" text-2xl" />}
        inputProps={{
          type: "tel",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setContactInfo((prev) => ({
              ...prev,
              phone: e.target.value,
            }));
          },
        }}
        errorMessage={
          contactInfo.phoneError.length > 0 ? contactInfo.phoneError : undefined
        }
      />
      <Button classname="mt-[148px]" title="Submit" onClick={submit} />
    </div>
  );
};

export default BreadmeContact;
