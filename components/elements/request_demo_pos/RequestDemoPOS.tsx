import HeaderWithBack from "components/common/HeaderWithBack";
import SelectedList from "components/common/SelectedList";
import React, { useEffect, useState } from "react";
import { submitForDemoPOS } from "api_client/axios_client";
import { ContactInfo } from "models/contact_info";
import ContactForm from "components/common/ContactForm";
import ThanksYouForm from "components/common/ThanksForm";
import useSideBar from "stores/useSideBar";
import useTrans from "hooks/useTrans";
import { sendGoogleEvent } from "utils/tracking_utils";
import { CategoryList } from "utils/routes";

const RequestDemoPOS = () => {
  const [isSubmit, setSubmit] = useState(false);
  const [businessType, setBusinessType] = useState(CategoryList[0].title.en);
  const { t, locale } = useTrans();
  const closeSidebar = useSideBar((state) => state.closeSideBar);

  const submitForm = async (data: ContactInfo) => {
    submitForDemoPOS({
      conversion_funnel: "Request Demo POS",
      ref_url: window.location.href,
      data: {
        typeBusiness: businessType,
        contact: data,
      },
    });
    setSubmit(true);
  };

  useEffect(() => {
    sendGoogleEvent("request_demo_fill_information");
  }, []);

  const PAGE = isSubmit ? (
    <ThanksYouForm
      className="mt-16 lg:mt-[100px]"
      eventName="request_demo_lead_form"
    />
  ) : (
    <div className="flex w-full flex-col px-4 py-5 md:px-10">
      <p className="txt-md-bold mb-4 md:mb-6">{t("type_of_business")}</p>
      <SelectedList
        data={CategoryList}
        selectIndex={0}
        className={" md:grid-cols-2 lg:grid-cols-3"}
        renderItem={(item, index: number) => {
          const Icon = item.icon;
          return (
            <div className="flex flex-row items-center p-3 gap-3 md:gap-2 md:flex-col md:justify-center">
              <Icon className="text-4xl" />
              <p className="txt-md-bold md:text-center">{item.title[locale]}</p>
            </div>
          );
        }}
        onItemSelected={(index) => {
          setBusinessType(CategoryList[index].title.en);
        }}
      />
      <p className="txt-md-bold mt-10 mb-4">{t("contact_informations")}</p>
      <ContactForm
        onSubmitForm={submitForm}
        submitBtnClassName="md:w-fit"
        submitBtnTitle={t("send_request")}
      />
    </div>
  );

  return (
    <>
      <HeaderWithBack
        title={t("request_a_demo")}
        onClose={closeSidebar}
        subTitle={
          <p className="txt-sm max-w-xl text-neutral-700 md:text-center md:ml-3">
            We&apos;ll connect you with the POS provider to setup a demo and get
            the best deal possible. Go through BestPOS to get the best deal
            possible.{" "}
            <span className="text-secondary font-semibold">
              Up to 100% off!
            </span>
          </p>
        }
      />
      {PAGE}
    </>
  );
};

export default RequestDemoPOS;
