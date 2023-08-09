import React from "react";
import Box from "./Box";
import ContactForm from "./ContactForm";
import { submitContact } from "api_client/axios_client";
import { ContactInfo } from "models/contact_info";
import { toast } from "react-hot-toast";
import { SuccessMessage } from "utils/StringUtil";
import useTrans from "hooks/useTrans";

export const FooterCTA = () => {
  const { t } = useTrans();

  const sendContactInfo = async (data: ContactInfo) => {
    submitContact({
      conversion_funnel: "Contact",
      ref_url: window.location.href,
      data: data,
    });
    toast.success(SuccessMessage);
  };

  return (
    <Box className="bg-accent py-10">
      <div className="rounded-3xl bg-white max-w-xl p-10 mx-auto">
        <p className="txt-heading-small text-center md:txt-heading-large">
          {t("footer_form_title")}
        </p>
        <p className="txt-md mt-4 mb-10 text-center text-neutral-700">
          {t("footer_form_desc")}
        </p>

        <ContactForm
          submitBtnTitle={t("submit")}
          onSubmitForm={sendContactInfo}
          submitBtnClassName="w-[150px] md:h-16"
        />
      </div>
    </Box>
  );
};
