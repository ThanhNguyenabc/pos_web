import { submitForFreePOS } from "api_client/axios_client";
import { IcBack } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import { ContactInfo } from "models/contact_info";
import React, { useState } from "react";
import useFindPOSStore from "stores/findpos_store";
import { CreditCardVolumeData } from "utils/StringUtil";

const PersonalInfo = () => {
  const { data, onNext, onBack } = useFindPOSStore();

  const onSubmit = async (contact: ContactInfo) => {
    await submitForFreePOS({
      creditCardVolume: CreditCardVolumeData[data?.creditVolumeId || 0],
      businessContact: data?.businessContact || {},
      personalContact: contact,
    });
    onNext();
  };

  return (
    <div className="flex flex-col gap-6">
      <ContactForm onSubmitForm={onSubmit} showSubmitButton={false}>
        <div className={`flex flex-row gap-4 mt-6 justify-between`}>
          <Button
            title="Back"
            isOutLine={true}
            leftIcon={<IcBack />}
            onClick={onBack}
          />
          <Button title={"Submit"} classname="w-[170px]" />
        </div>
      </ContactForm>
    </div>
  );
};

export default PersonalInfo;
