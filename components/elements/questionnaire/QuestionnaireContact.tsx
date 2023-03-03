import { submitQuestionnaireContact } from "api_client/axios_client";
import ContactForm from "components/common/ContactForm";
import { ContactInfo } from "models/contact_info";
import { QuestionnaireContact } from "models/questionnaire_contact";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useProductStore from "stores/product_store";
import useQuestionnaireStore from "stores/questionnaire_store";
import AppRoutes from "utils/routes";
import {
  BusinessTypes,
  HandHeldData,
  StationData,
  YesNoQuestion,
} from "utils/StringUtil";

const QuestionnaireContact = () => {
  const questionnaireStore = useQuestionnaireStore();
  const productStore = useProductStore();
  const router = useRouter();

  const submit = async (contact: ContactInfo) => {
    const data: QuestionnaireContact = {
      contact: contact,
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

    let suggestProduct = await submitQuestionnaireContact(data);
    productStore.setSuggestPOSList(suggestProduct);
    router.push(AppRoutes.SuggestPOSPage);
  };

  return (
    <ContactForm onSubmitForm={submit} submitBtnClassName=" md:h-16 md:mt-10" />
  );
};

export default QuestionnaireContact;
