import { submitForFreePOS } from "api_client/axios_client";
import { IcBack } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import { ContactInfo } from "models/contact_info";
import React, { useState } from "react";
import { CreditCardVolumeData } from "utils/StringUtil";
import { FindPOSModalContext } from "./FindPOSModal";

const PersonalInfo = () => {
  const value = React.useContext(FindPOSModalContext);

  const onSubmit = async (contact: ContactInfo) => {
    await submitForFreePOS({
      creditCardVolume: CreditCardVolumeData[value.data?.creditVolumeId || 0],
      businessContact: {
        name: value.data?.businessName || "",
        phone: value.data?.businessPhone || "",
      },
      personalContact: contact,
    });
    value.nextPage();
  };

  return (
    <div className="flex flex-col gap-6">
      <ContactForm onSubmitForm={onSubmit} showSubmitButton={false}>
        <div className={`flex flex-row gap-4`}>
          <Button
            title="Back"
            isOutLine={true}
            classname={`mt-16 md:text-xl`}
            leftIcon={<IcBack />}
            onClick={value.onBack}
          />
          <Button title={"Submit"} classname={`flex-1 mt-16 md:text-xl`} />
        </div>
      </ContactForm>
    </div>
  );
};

export default PersonalInfo;
