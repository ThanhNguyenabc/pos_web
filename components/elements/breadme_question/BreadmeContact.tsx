import { submitBreadme } from "api_client/axios_client";
import ContactForm from "components/common/ContactForm";
import { ContactInfo } from "models/contact_info";
import { BreadmeContext } from "pages/bread-me-questions";
import React, { useContext, useEffect } from "react";
import ColorUtils from "utils/ColorUtils";
import { YesNoQuestion } from "utils/StringUtil";
import { BreadmeCreditCardVolumeData } from "./BreadmeCreditCard";
import { SaleSystemItems } from "./BreadmeSaleSystem";
import { BreadmeStationData } from "./BreadmeStation";
import { sendGoogleEvent } from "utils/tracking_utils";

const BreadmeContact = () => {
  const context = useContext(BreadmeContext);

  useEffect(() => {
    sendGoogleEvent("breadme_fill_information");
  }, []);

  const submit = async (contact: ContactInfo) => {
    const currentSaleSystem = context.questionData?.saleSystemIndex
      ? SaleSystemItems[context.questionData?.saleSystemIndex].en
      : context.questionData?.otherSaleSystem;

    submitBreadme({
      conversion_funnel: "Breadme",
      ref_url: window.location.href,
      data: {
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
        contact: contact,
      },
    });

    context.nextPage();
  };

  return (
    <ContactForm onSubmitForm={submit} submitBackground={ColorUtils.success} />
  );
};

export default BreadmeContact;
