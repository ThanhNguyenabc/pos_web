import { submitForFreePOS } from "api_client/axios_client";
import IcBack from "assets/icons/ic_back.svg";

import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import useTrans from "hooks/useTrans";
import { ContactInfo } from "models/contact_info";
import React, { useEffect } from "react";
import useFindPOSStore from "stores/findpos_store";
import { sendGoogleEvent } from "utils/tracking_utils";

export const CreditCardVolumeData = ["$10K - $50k", "$50K - $150k", "$150+"];

const PersonalInfo = () => {
  const { data, onNext, onBack } = useFindPOSStore();
  const { t } = useTrans();

  useEffect(() => {
    sendGoogleEvent("get_started_contact_information");
  }, []);

  const onSubmit = async (contact: ContactInfo) => {
    onNext();
    submitForFreePOS({
      conversion_funnel: "Get Free POS",
      ref_url: window.location.href,
      data: {
        creditCardVolume: CreditCardVolumeData[data?.creditVolumeId || 0],
        businessContact: data?.businessContact || {},
        personalContact: contact,
      },
    });
  };

  return (
    <>
      <ContactForm onSubmitForm={onSubmit} showSubmitButton={false}>
        <div className={`flex flex-row gap-4 mt-6 justify-between`}>
          <Button
            title={t("back")}
            isOutLine={true}
            leftIcon={<IcBack />}
            onClick={onBack}
          />
          <Button title={t("submit")} classname="w-[170px]" />
        </div>
      </ContactForm>
    </>
  );
};

export default PersonalInfo;
