import { submitBreadme } from "api_client/axios_client";
import { IcAmericanFlag } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import Input from "components/common/Input";
import PhoneNumberInput from "components/common/PhoneNumberInput";
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

  const submit = async (contact: ContactInfo) => {
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
      contact: contact,
    });

    context.nextPage();
  };

  return (
    <ContactForm onSubmitForm={submit} submitBackground={ColorUtils.success} />
  );
};

export default BreadmeContact;
