import { IcBack, IcRightArrow } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import { ContactInfo } from "models/contact_info";
import React, { useState } from "react";
import { FindPOSModalContext } from "./FindPOSModal";

const BusinessInfo = () => {
  const value = React.useContext(FindPOSModalContext);

  const nextClick = (data: ContactInfo) => {
    const { name, phone } = data;
    value.setData({
      ...value.data,
      businessPhone: phone,
      businessName: name,
    });
    value.nextPage();
  };

  return (
    <div className="flex flex-col gap-6">
      <ContactForm
        showSubmitButton={false}
        onSubmitForm={nextClick}
        showEmail={false}
        nameTitle="Company name"
        phoneTitle="Business Phone number"
      >
        <div className={`flex flex-row gap-4 `}>
          <Button
            title="Back"
            isOutLine={true}
            classname={`mt-16 md:text-xl`}
            leftIcon={<IcBack />}
            onClick={() => value.onBack()}
          />
          <Button
            title={"Next"}
            type="submit"
            rightIcon={<IcRightArrow />}
            classname={`flex-1 mt-16 md:text-xl`}
          />
        </div>
      </ContactForm>
    </div>
  );
};

export default BusinessInfo;
