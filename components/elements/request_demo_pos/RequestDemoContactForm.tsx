import { submitForDemoPOS } from "api_client/axios_client";
import { Button } from "components/common/Button";
import Input from "components/common/Input";
import PhoneNumberInput from "components/common/PhoneNumberInput";
import useTrans from "hooks/useTrans";
import { ContactInfo } from "models/contact_info";
import React, { ChangeEvent } from "react";
import useRequestDemoStore from "stores/request_demo_store";

const RequestDemoContactForm = () => {
  const { t } = useTrans();

  const submitForm = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contact: ContactInfo = {};
    for (const [key, value] of formData.entries()) {
      if (key) {
        contact[key as keyof ContactInfo] = value as string;
      }
    }
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
  };

  return (
    <form className={`flex w-full flex-col gap-6`} onSubmit={submitForm}>
      <Input
        label={t("your_name")}
        inputProps={{
          required: true,
          name: "name",
        }}
      />
      <div className="flex flex-col gap-6 md:flex-row">
        <PhoneNumberInput title={t("your_phone")} />
        <Input
          label={t("email")}
          inputProps={{
            required: true,
            type: "email",
            name: "email",
          }}
        />
      </div>
      <Button title={t("submit")} classname={"mt-4 md:w-fit"} type="submit" />
    </form>
  );
};

export default RequestDemoContactForm;
