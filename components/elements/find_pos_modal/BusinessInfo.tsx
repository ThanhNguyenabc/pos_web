import IcRightArrow from "assets/icons/ic_right_arrow.svg";
import IcBack from "assets/icons/ic_back.svg";

import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import useTrans from "hooks/useTrans";
import { ContactInfo } from "models/contact_info";
import React, { useEffect } from "react";
import useFindPOSStore from "stores/findpos_store";
import { sendGoogleEvent } from "utils/tracking_utils";

const BusinessInfo = () => {
  const { t } = useTrans();
  const { data, setData, onNext, onBack } = useFindPOSStore();

  useEffect(() => {
    sendGoogleEvent("get_started_business_type");
  }, []);

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
      nameTitle={t("company_name")}
      phoneTitle={t("business_phone_number")}
    >
      <div className={`flex flex-row gap-4 mt-6 justify-between`}>
        <Button
          title={t("back")}
          isOutLine={true}
          leftIcon={<IcBack />}
          onClick={() => onBack()}
        />
        <Button
          title={t("next")}
          type="submit"
          rightIcon={<IcRightArrow />}
          classname="w-[170px]"
        />
      </div>
    </ContactForm>
  );
};

export default BusinessInfo;
