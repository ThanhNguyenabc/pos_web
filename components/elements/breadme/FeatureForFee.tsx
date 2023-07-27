import IcSupport from "assets/icons/ic_support.svg";
import IcServiceFee from "assets/icons/ic_service_fee.svg";
import IcPayZero from "assets/icons/ic_pay_zero.svg";
import IcChat from "assets/icons/ic_chat.svg";

import HeroSection from "components/common/HeroSection";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";
import { Locale } from "models/app_configs";
import React from "react";

const FeatureForBreadmeData = [
  {
    ic: IcChat,
    title: {
      [Locale.en]: "Full Purchase Price",
      [Locale.es]: "Precio de compra total",
    },
    desc: {
      [Locale.en]: "You get the full purchase price for the transaction.",
      [Locale.es]: "Obtiene el precio total de compra de la transacción.",
    },
  },
  {
    ic: IcSupport,
    title: {
      [Locale.en]: "Pay all your monthly transactions",
      [Locale.es]: "Paga todas tus transacciones mensuales",
    },
    desc: {
      [Locale.en]:
        "The fees for processing the cards come directly to us and and we pay all your monthly transactions.",
      [Locale.es]:
        "Las tarifas por procesar las tarjetas nos llegan directamente y nosotros pagamos todas sus transacciones mensuales.",
    },
  },
  {
    ic: IcPayZero,
    title: {
      [Locale.en]: "Pay Zero",
      [Locale.es]: "Cero pagos",
    },
    desc: {
      [Locale.en]:
        "You will always pay zero when you receive your statement each month.",
      [Locale.es]:
        "Siempre pagará cero cuando reciba su estado de cuenta cada mes.",
    },
  },
  {
    ic: IcServiceFee,
    title: {
      [Locale.en]: "Eliminates service fees",
      [Locale.es]: "Elimina las tarifas de servicio",
    },
    desc: {
      [Locale.en]:
        "A solution that completely eliminates merchant service and point-of-sale fees.",
      [Locale.es]:
        "Una solución que elimina por completo el servicio comercial y las tarifas de punto de venta.",
    },
  },
];

const BreadmeFeatureSection = () => {
  const { t, locale } = useTrans();
  return (
    <HeroSection className="gap-12 md:gap-14">
      <p className="txt-heading-small md:txt-heading-large">
        {HTMLReactParser(t("breadme_feature_heading"))}
      </p>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-y-12 md:gap-x-8 lg:grid-cols-4">
        {FeatureForBreadmeData.map((item, index) => {
          const Icon = item.ic;
          return (
            <div
              key={`feature-section-${index}`}
              className="flex flex-row gap-6 items-start md:flex-col"
            >
              <Icon className="w-14 h-14" />
              <div className="flex flex-1 flex-col gap-2 md:gap-4">
                <p className="txt-md-bold md:text-xl">{item.title[locale]}</p>
                <p className="txt-md text-neutral-600">{item.desc[locale]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </HeroSection>
  );
};

export default BreadmeFeatureSection;
