import { BreadMeImg } from "assets/AssetUtil";
import Box from "components/common/Box";
import { Button } from "components/common/Button";
import IcLargeArrow from "assets/icons/ic_large_arrow.svg";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";
import { Locale } from "models/app_configs";
import Image from "next/image";
import React from "react";
import ColorUtils from "utils/ColorUtils";

const BreadMeIntroTrans = {
  title: {
    [Locale.en]:
      "See if you qualify for a <span className='text-success'> free point-of-sale system</span>",
    [Locale.es]: "Vea si califica para un sistema de punto de venta gratuito",
  },
  desc: {
    [Locale.en]:
      "At ExtraBread, we're committed to helping you save on Point of Sale costs and increase your profits through reduced payment processing fees. That's why we offer professional and personalized consulting on the ideal point of sale system, payment processing, merchant services, and more",
    [Locale.es]:
      "En Breadme, estamos haciendo las cosas de manera diferente. A cambio de su cuenta de procesamiento de tarjeta de crédito, puede ganar capital y equipo gratis y recibir tarifas de procesamiento cero para su negocio.",
  },
};

const BreadmeFeatures = [
  {
    [Locale.en]: "Save money with a free POS",
    [Locale.es]: "Capital GRATIS para construir su negocio",
  },
  {
    [Locale.en]: "Receive a large cash signing bonus",
    [Locale.es]: "Equipo GRATIS que se adapta a su negocio",
  },
  {
    [Locale.en]: "Zero Processing Fees",
    [Locale.es]: "CERO tarifas de procesamiento para su negocio",
  },
];

const BreadmeFeatureItem = ({ content }: { content: string }) => {
  return (
    <div className="flex flex-row gap-3 md:gap-4">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6 13.8L8.425 11.625C8.24167 11.4417 8.01667 11.35 7.75 11.35C7.48333 11.35 7.25 11.45 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.0833 16.0833 10.3167 16.175 10.6 16.175C10.8833 16.175 11.1167 16.0833 11.3 15.9L16.975 10.225C17.1583 10.0417 17.25 9.81667 17.25 9.55C17.25 9.28333 17.15 9.05 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z"
          fill="#039855"
        />
      </svg>
      <p className="txt-md-bold">{HTMLReactParser(content)}</p>
    </div>
  );
};

const BreadmeIntroduction = ({
  onStart,
  isShow = false,
}: {
  onStart?: () => void;
  isShow?: boolean;
}) => {
  const { locale, t } = useTrans();
  return (
    <Box
      className={`${
        isShow ? "flex" : "hidden"
      } flex-col py-12 gap-10 mx-auto max-w-lg  md:gap-12
      lg:flex lg:px-0 lg:gap-6 lg:max-w-[400px] xl:max-w-lg`}
    >
      <Image
        src={BreadMeImg}
        alt="breadme-intro"
        width={210}
        height={100}
        quality={90}
      />
      <div className=" flex flex-col gap-6">
        <div className="relative">
          <h3 className="txt-heading-small md:txt-heading-large">
            {HTMLReactParser(BreadMeIntroTrans.title[locale])}
          </h3>
          <IcLargeArrow className="hidden absolute lg:block lg:text-[90px]  xl:text-[124px] h-10 -right-2 bottom-0" />
        </div>
        <p className="txt-md text-neutral-700">
          {BreadMeIntroTrans.desc[locale]}
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:mt-4">
        {BreadmeFeatures.map((item, index) => (
          <BreadmeFeatureItem
            content={BreadmeFeatures[index][locale]}
            key={`breadme-feature-${index}`}
          />
        ))}
      </div>
      <Button
        onClick={onStart}
        classname="lg:hidden"
        title={`${t("get_started")}!`}
        style={{
          background: ColorUtils["neutral-dark"],
          color: "white",
        }}
      />
    </Box>
  );
};

export default BreadmeIntroduction;
