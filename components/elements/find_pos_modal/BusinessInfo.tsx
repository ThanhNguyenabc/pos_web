import { IcBack, IcRightArrow } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import { ContactInfo } from "models/contact_info";
import React, { useState } from "react";
import useFindPOSStore from "stores/findpos_store";

const BusinessInfo = () => {
  const { data, setData, onNext, onBack } = useFindPOSStore();

  const nextClick = (contact: ContactInfo) => {
    setData({
      ...data,
      businessContact: contact,
    });
    onNext();
  };

  return (
    <ContactForm
      showSubmitButton={false}
      onSubmitForm={nextClick}
      showEmail={false}
      nameTitle="Company name"
      phoneTitle="Business Phone number"
    >
      <div className={`flex flex-row gap-4 mt-6 justify-between`}>
        <Button
          title="Back"
          isOutLine={true}
          leftIcon={<IcBack />}
          onClick={() => onBack()}
        />
        <Button
          title={"Next"}
          type="submit"
          rightIcon={<IcRightArrow />}
          classname="w-[170px]"
        />
      </div>
    </ContactForm>
  );
};

export default BusinessInfo;
