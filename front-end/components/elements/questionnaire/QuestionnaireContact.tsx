import { submitQuestionnaireContact } from "api_client/axios_client";
import { IcAmericanFlag } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm, { ContactInfo } from "components/common/ContactForm";
import Input from "components/common/Input";
import { QuestionnaireContact } from "models/questionnaire_contact";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useProductStore from "stores/product_store";
import useQuestionnaireStore from "stores/questionnaire_store";
import AppRoutes from "utils/routes";
import {
  BusinessTypes,
  HandHeldData,
  isValidEmail,
  isValidPhoneNumber,
  StationData,
  YesNoQuestion,
} from "utils/StringUtil";

const QuestionnaireContact = () => {
  const questionnaireStore = useQuestionnaireStore();
  const productStore = useProductStore();
  const router = useRouter();

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

  const submit = async () => {
    const { name = "", email = "", phoneNumber = "" } = contactInfo;

    if (name.length <= 0) {
      setContactInfo((prev) => ({
        ...prev,
        nameError: "Contact name is not empty",
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

    const data: QuestionnaireContact = {
      name: contactInfo.name || "",
      email: contactInfo.email || "",
      phoneNumber: contactInfo.phoneNumber || "",
      business: BusinessTypes[questionnaireStore.data.businessId].title,
      haveSaleSystem: YesNoQuestion[questionnaireStore.data.saleSystemIndex],
      numberOfStations:
        StationData[questionnaireStore.data.numberStationIndex].content,
      numberOfHandheld:
        questionnaireStore.data.handHeldIndex != undefined
          ? HandHeldData[questionnaireStore.data.handHeldIndex].content
          : "_",
      onDiscountProgram:
        questionnaireStore.data.discountIndex != undefined
          ? YesNoQuestion[questionnaireStore.data.discountIndex]
          : "_",
    };

    console.log("data -------------");

    console.log("request data = ", data);
    console.log(
      HandHeldData[questionnaireStore.data.handHeldIndex || 0].content
    );

    let suggestProduct = await submitQuestionnaireContact(data);
    productStore.setSuggestPOSList(suggestProduct);
    router.push(AppRoutes.SuggestPOSPage);
  };

  return (
    <div className={`flex flex-col gap-6`}>
      <Input
        label={"Contact name"}
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
          contactInfo.phoneError.length > 0 ? contactInfo.phoneError : undefined
        }
      />

      <Button title="Submit" classname={` mt-4`} onClick={submit} />
    </div>
  );
};

export default QuestionnaireContact;
