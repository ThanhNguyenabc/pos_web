import { Button } from "components/common/Button";
import HTMLReactParser from "html-react-parser";
import React from "react";
import Image from "next/image";
import Box from "components/common/Box";
import { getSEOTags } from "pages/api/configs";
import { cacheTime } from "utils/constants";
import useTrans from "hooks/useTrans";
import IcCheck from "assets/icons/ic_checkbox.svg";
import HeroSection from "components/common/HeroSection";
import { InvoiceImg, PayZeroImg } from "assets/AssetUtil";
import IcTerminal from "assets/icons/ic_terminal.svg";
import IcAppointment from "assets/icons/ic_appointment.svg";
import IcReceivedCash from "assets/icons/ic_receive_cash.svg";
import CashDiscountFAQ from "components/elements/cash_discount/CashDiscountFAQ";
import useSideBar from "stores/useSideBar";
import { RightSideBarType } from "components/common/RightSideBar";

export const getStaticProps = async () => {
  const data = await Promise.all([getSEOTags("home")]);

  return {
    props: {
      products: JSON.parse(JSON.stringify(data?.[0])),
      seoTags: data?.[0],
    },
    revalidate: cacheTime,
  };
};

const BannerItems = [
  {
    en: "Zero processing fees",
    es: "",
  },
  {
    en: "Fees are passed onto the customer",
    es: "",
  },
  {
    en: "Compliant with laws and regulations in all 50 states",
    es: "",
  },

  {
    en: "Receive a FREE credit card terminal at no cost",
    es: "",
  },
];

const additionalValues = [
  {
    title: {
      en: "Next day funding (11PM EST)",
      es: "",
    },
    icon: IcReceivedCash,
  },
  {
    title: {
      en: "Month-to-month contracts on all accounts",
      es: "",
    },
    icon: IcAppointment,
  },
  {
    title: {
      en: "Equipment comes pre-installed with software to easily implement the cash discount program and offers back-office reporting tools",
      es: "",
    },
    icon: IcTerminal,
  },
];

const CashDiscount = () => {
  const { t, locale } = useTrans();

  const openSideBar = useSideBar((state) => state.openSideBar);

  const findPOS = () => {
    openSideBar(RightSideBarType.Questionnaire);
  };

  return (
    <>
      <div className="bg-accent">
        <div className="flex flex-col gap-4 items-center  mx-auto max-w-[1300px] lg:gap-8 lg:flex-row">
          <Box className="flex-1 gap-6 my-10 lg:gap-12 lg:max-w-[500px]">
            <div className="flex flex-col gap-6">
              <h1
                className={`text-center txt-heading-large lg:text-start lg:txt-heading-xlarge`}
              >
                {HTMLReactParser(t("cash_discount.heading"))}
              </h1>
              <div className="flex flex-col gap-[10px]">
                {BannerItems.map((item) => (
                  <div
                    key={item[locale]}
                    className="flex gap-2 items-center txt-md-bold"
                  >
                    <IcCheck />
                    <p>{item[locale]}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button
              classname="md:h-16 w-fit sm:w-[266px]"
              title={t("get_start_now")}
              onClick={findPOS}
            />
          </Box>

          <div className="flex flex-1 lg:inline-block lg:self-end">
            <Image
              alt="hp-2-image"
              src="https://res.cloudinary.com/dgrym3yz3/image/upload/v1712029632/assets/common/l5dmaobptrvvfzrdenup.png"
              width={640}
              height={640}
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>

      <HeroSection className="flex flex-col gap-6 lg:flex-row ">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={InvoiceImg}
            width={400}
            height={680}
            alt="invoice image"
          />
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <h3 className="text-center txt-heading-medium lg:text-start lg:txt-heading-large">
            {t("cash_discount.invoice_heading")}
          </h3>
          <p className=" md:text-lg text-neutral-700 whitespace-pre-wrap">
            {t("cash_discount.invoice_desc")}
          </p>
        </div>
      </HeroSection>

      <HeroSection className="flex flex-col gap-4 lg:flex-row ">
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <h3 className="text-center txt-heading-medium lg:text-start lg:txt-heading-large">
            {t("cash_discount.pay_zero_heading")}
          </h3>
          <p className=" md:text-lg text-neutral-700 whitespace-pre-wrap">
            {HTMLReactParser(t("cash_discount.pay_zero_desc"))}
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={PayZeroImg}
            width={500}
            height={500}
            alt="payzero image"
          />
        </div>
      </HeroSection>

      <HeroSection className="flex flex-col gap-6 lg:flex-row ">
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-center txt-heading-medium lg:text-start lg:txt-heading-large">
            {t("cash_discount.additional_values")}
          </h3>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          {additionalValues.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title[locale]}
                className="flex flex-row gap-4 p-4 items-center bg-neutral-100 md:p-6 md:gap-6 rounded-2xl"
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12" />
                <p className="flex-1 txt-md-bold lg:txt-large-bold">
                  {item.title[locale]}
                </p>
              </div>
            );
          })}
        </div>
      </HeroSection>
      <CashDiscountFAQ />

      <HeroSection className="px-0 py-0 md:py-0 md:px-0">
        <div className="flex flex-col bg-accent items-center py-10 px-4 gap-8 md:rounded-2xl md:px-8 lg:gap-10 lg:px-[120px] lg:py-20">
          <h3 className="txt-heading-medium text-center md:max-w-3xl lg:txt-heading-large">
            {t("cash_discount.implement_for_business")}
          </h3>
          <Button
            classname="md:h-16 w-fit sm:w-[266px]"
            title={t("get_start_now")}
            onClick={findPOS}
          />
        </div>
      </HeroSection>
    </>
  );
};

export default CashDiscount;
