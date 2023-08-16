import IcPhone from "assets/icons/ic_phone.svg";
import IcMail from "assets/icons/ic_mail.svg";
import React, { ReactElement } from "react";
import { submitContact } from "api_client/axios_client";
import { ContactInfo } from "models/contact_info";
import ContactForm from "components/common/ContactForm";
import { toast } from "react-hot-toast";
import { SuccessMessage } from "utils/StringUtil";
import useTrans from "hooks/useTrans";
import { useRouter } from "next/router";
import HeadTag from "components/common/HeadTag";
import { AppRoutes } from "utils/routes";

const ContactItem = ({
  icon,
  title,
  desc,
  subDesc,
}: {
  icon: ReactElement;
  title: string;
  desc: string;
  subDesc: string;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center text-center md:gap-5">
      <div className=" flex w-12 h-12 p-1 rounded-2xl bg-accent justify-center items-center text-primary">
        {icon}
      </div>
      <p className="txt-md-bold md:text-xl">{title}</p>
      <p className="txt-md text-neutral-600">{desc}</p>
      <p className="txt-md-bold text-secondary md:max-w-[200px]">{subDesc}</p>
    </div>
  );
};

const ContactPage = () => {
  const { t } = useTrans();
  const router = useRouter();

  const sendContactInfo = async (data: ContactInfo) => {
    submitContact({
      conversion_funnel: "Contact",
      ref_url: window.location.href,
      data: data,
    });
    toast.success(SuccessMessage);
    router.push(AppRoutes.POSSystemPage);
  };

  return (
    <>
      <HeadTag screen="contact" />
      <div className="flex  flex-col py-12 items-center gap-12 md:gap-14 lg:gap-20 md:py-14">
        <div className="flex flex-col container-content w-full px-4 md:px-8 gap-10">
          <div className="flex flex-col gap-4 items-center text-center">
            <p className="txt-md-bold text-primary">{t("contact_us")}</p>
            <h1 className="txt-heading-medium md:md:txt-heading-xlarge">
              {t("contact_title")}
            </h1>
            <h2 className="txt-md text-neutral-600 md:text-xl">
              {t("contact_desc")}
            </h2>
          </div>
          <div className="flex flex-col gap-10 md:flex-row justify-center">
            <ContactItem
              icon={<IcMail className="w-6 h-6" />}
              title={t("email")}
              desc={t("email_message")}
              subDesc="info@bestpos.com"
            />

            <ContactItem
              icon={<IcPhone className="w-5 h-5" />}
              title={t("phone")}
              desc={t("phone_message")}
              subDesc="(888) 410-2188"
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="px-4 md:px-8">
          <p className="txt-heading-small text-center md:txt-heading-large">
            {t("get_in_touch")}
          </p>
          <p className="txt-md mt-4 mb-10 text-center md:mt-5 md:text-xl text-neutral-600">
            {t("get_in_touch_message")}
          </p>

          <ContactForm
            submitBtnTitle={t("send_message")}
            showMessage
            showZipCode
            onSubmitForm={sendContactInfo}
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
