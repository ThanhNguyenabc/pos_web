import { submitForDemoPOS } from "api_client/axios_client";
import ContactForm from "components/common/ContactForm";
import useTrans from "hooks/useTrans";
import { ContactInfo } from "models/contact_info";
import React, { useCallback } from "react";
import useRequestDemoStore from "stores/request_demo_store";

const RequestDemoContactForm = () => {
  const { t } = useTrans();

  const submitForm = useCallback(async (contact: ContactInfo) => {
    const states = useRequestDemoStore.getState();

    submitForDemoPOS({
      conversion_funnel: "Request Demo POS",
      ref_url: window.location.href,
      data: {
        typeBusiness: states.businessType,
        posSystems: states.selectedPOS.join(" - "),
        otherPOS: states.otherPOS,
        contact: contact,
      },
    });
    useRequestDemoStore.setState((prev) => ({
      ...prev,
      isSubmittedForm: true,
    }));
  }, []);

  return (
    <ContactForm
      onSubmitForm={submitForm}
      showZipCode={false}
      showMessage={false}
    />
  );
};

export default RequestDemoContactForm;
