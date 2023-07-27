import { submitQuestionnaireContact } from "api_client/axios_client";
import ContactForm from "components/common/ContactForm";
import { ContactInfo } from "models/contact_info";
import { QuestionnaireContact } from "models/questionnaire_contact";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useQuestionnaireStore from "stores/questionnaire_store";
import AppRoutes from "utils/routes";
import { CategoryList, YesNoQuestion } from "utils/StringUtil";
import { HandHeldData } from "./HandheldQuestion";
import { StationData } from "./StationQuestion";
import { sendGoogleEvent } from "utils/tracking_utils";

const QuestionnaireContact = () => {
  const questionnaireStore = useQuestionnaireStore();
  const router = useRouter();

  useEffect(() => {
    sendGoogleEvent("find_pos_fill_form");
  }, []);

  const submit = async (contact: ContactInfo) => {
    const data: QuestionnaireContact = {
      contact: contact,
      business: CategoryList[questionnaireStore.data.businessId].type,
      haveSaleSystem: YesNoQuestion[questionnaireStore.data.saleSystemIndex],
      numberOfStations:
        StationData[questionnaireStore.data.numberStationIndex].content,
      numberOfHandheld:
        questionnaireStore.data.handHeldIndex != undefined
          ? HandHeldData[questionnaireStore.data.handHeldIndex].quantity
          : "_",
      onDiscountProgram:
        questionnaireStore.data.discountIndex != undefined
          ? YesNoQuestion[questionnaireStore.data.discountIndex]
          : "_",
    };

    await submitQuestionnaireContact({
      conversion_funnel: "Find your POS",
      ref_url: window.location.href,
      data,
    });

    router.push(
      {
        pathname: AppRoutes.SuggestPOSPage,
        query: {
          access: true,
          business: data.business,
          salesystem: data.haveSaleSystem,
          discount: data.onDiscountProgram,
          stations: data.numberOfStations,
          handheld: data.numberOfHandheld,
        },
      },
      AppRoutes.SuggestPOSPage
    );
  };

  return (
    <ContactForm onSubmitForm={submit} submitBtnClassName="md:h-16 md:mt-10" />
  );
};

export default QuestionnaireContact;
