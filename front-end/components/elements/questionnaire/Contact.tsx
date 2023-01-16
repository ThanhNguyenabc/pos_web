import AxiosInstance, {
  submitQuestionnaireContact,
} from "api_client/axios_client";
import { IcAmericanFlag } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm, { ContactInfo } from "components/common/ContactForm";
import Input from "components/common/Input";
import { QuestionnaireContact } from "models/questionnaire_contact";
import { QuestionnaireContext } from "pages/questionnaire";
import React, { useState } from "react";
import useSwr from "swr";
import { HandHeldData, isValidEmail, isValidPhoneNumber, StationData, YesNoQuestion } from "utils/StringUtil";
import { Categories } from "../home/BusinessCategorySection";

const Contact = () => {
  const value = React.useContext(QuestionnaireContext);

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

    const data: QuestionnaireContact = {
      name: contactInfo.name || "",
      email: contactInfo.email || "",
      onDiscountProgram: YesNoQuestion[value.questionData.isDiscountIndex || 0],
      phoneNumber: contactInfo.phoneNumber || "",
      business: Categories[value.questionData.businessId || 0].name,
      haveSaleSystem:
        YesNoQuestion[value.questionData.isOwnSaleSystemIndex || 0],
      numberOfHandheld:
        HandHeldData[value.questionData.handHeldIndex || 0].content,
      numberOfStations:
        StationData[value.questionData.numberStationIndex || 0].content,
    };

    await submitQuestionnaireContact(data).then((res) => {
      console.log("success");
      console.log(res);
    });
  };

  return (
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

export default Contact;
