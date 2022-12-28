import ContactForm from "components/common/ContactForm";
import React from "react";

const BusinessInfo = () => {
  return (
    <ContactForm
      showEmail={false}
      nameTitle={"Company name"}
      phoneTitle={"Business Phone number"}
    />
  );
};

export default BusinessInfo;
