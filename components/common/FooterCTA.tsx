import React from "react";
import Box from "./Box";
import ContactForm from "./ContactForm";
import { submitContact } from "api_client/axios_client";
import { ContactInfo } from "models/contact_info";
import { toast } from "react-hot-toast";
import { SuccessMessage } from "utils/StringUtil";
import useTrans from "hooks/useTrans";
import HeroSection from "./HeroSection";

interface FooterCTAProps {
  heading?: string;
  description?: string;
  formTitle?: string;
  formSubTilte?: string;
}

export const FooterCTA = ({
  heading,
  description,
  formSubTilte: formSubTitle,
  formTitle,
}: FooterCTAProps) => {
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
    <div className="bg-accent">
      <HeroSection className="lg:flex-row gap-2 justify-between">
        <div className="flex-1 flex flex-col gap-2 text-center justify-center md:gap-4 lg:text-start  lg:max-w-[480px]">
          <p className="txt-heading-xsmal lg:txt-heading-large">
            {heading || "BestPOS works with all POS providers."}
          </p>
          <p className="txt-sm text-neutral-700 md:text-base lg:text-xl">
            {description ||
              "BestPOS helps businesses secure the best deals on premium POS systems. Get a quote today."}
          </p>
        </div>
        <div className="rounded-3xl bg-white px-4 py-6  md:w-[584px] lg:p-10">
          <p className="txt-large-bold text-center md:txt-heading-medium">
            {formTitle || "Fill in to get a quote"}
          </p>
          <p className="text-xs mt-1 mb-6 text-center text-neutral-700 md:text-base">
            {formSubTitle ||
              "You can save up to 100% of costs on a full POS package."}
          </p>

          <ContactForm
            submitBtnTitle={t("submit")}
            onSubmitForm={sendContactInfo}
            submitBtnClassName="md:h-16  md:w-fit"
          />
        </div>
      </HeroSection>
    </div>
  );
};
