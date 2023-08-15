import Box from "components/common/Box";
import { BreadMeBtn } from "components/common/BreadmeBtn";
import PricingBtn from "components/common/PricingBtn";
import TabList from "components/common/TabList";
import Image from "next/image";
import React from "react";
import useSideBar from "stores/useSideBar";
import ColorUtils from "utils/ColorUtils";
import { getSystemIcon } from "utils/StringUtil";
import ExpertOpinion from "./ExpertOpinion";
import FrequentlyQuestion from "./FrequentlyQuestion";
import ProsAndCons from "./ProsAndCons";
import Pricing from "./Pricing";
import SpecificationView from "./Specification";
import Loading from "components/common/loading/Loading";
import { Product } from "models/product.model";
import useTrans from "hooks/useTrans";
import PaymentProcessing from "./payment_processing";
import { Locale } from "models/app_configs";
import { DefaultImg } from "assets/AssetUtil";
import { RightSideBarType } from "components/common/RightSideBar";
import { getCurrentMonth } from "utils/date_utils";
import { Button } from "components/common/Button";

const DetailTabs = [
  {
    title: {
      [Locale.en]: "Introduction",
      [Locale.es]: "Introducción",
    },
    id: "introduction",
  },
  {
    title: {
      [Locale.en]: "Expert Opinions",
      [Locale.es]: "Opiniones de expertos",
    },
    id: "export-opinion",
  },
  {
    title: {
      [Locale.en]: "Specifications",
      [Locale.es]: "Especificaciones",
    },
    id: "specifications",
  },
  {
    title: {
      [Locale.en]: "POS Integrations",
      [Locale.es]: "Integraciones",
    },
    id: "integrations",
  },
  {
    title: {
      [Locale.en]: "Software",
      [Locale.es]: "Software",
    },
    id: "software",
  },
  {
    title: {
      [Locale.en]: "Payment Processing",
      [Locale.es]: "Pago",
    },
    id: "payment",
  },
  {
    title: {
      [Locale.en]: "Pricing",
      [Locale.es]: "Precios",
    },
    id: "pricing",
  },
  {
    title: {
      [Locale.en]: "FAQ",
      [Locale.es]: "Preguntas frecuentes",
    },
    id: "faq",
  },
];

export const ProductDetail = ({ productData }: { productData: Product }) => {
  const openSideBar = useSideBar((state) => state.openSideBar);
  const { t, locale } = useTrans();

  const openDemoDialog = () => openSideBar(RightSideBarType.RequestDemo);

  if (!productData) {
    return (
      <div className="flex justify-center mt-8">
        <Loading />
      </div>
    );
  }

  return (
    <Box className="flex flex-col container-content py-6 gap-8 lg:gap-16 md:py-8">
      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
        <div className="col-span-1 items-center flex flex-col gap-4">
          <span className="txt-sm-bold ">
            {`${t("last_updated")} ${getCurrentMonth(locale)}`}
          </span>
          <div className="block w-[120px] aspect-[2] md:w-[240px]">
            <Image
              src={productData.logo || DefaultImg}
              alt="pos-logo"
              width={240}
              height={120}
            />
          </div>

          <Button
            title={t("request_a_demo")}
            style={{ backgroundColor: ColorUtils.success }}
            classname="hidden rounded-full w-[240px] lg:flex"
            onClick={openDemoDialog}
          />
        </div>
        <div className="col-span-2 flex flex-col gap-4 md:gap-8 flex-1">
          <p className="txt-md md:text-xl text-neutral-700 whitespace-pre-line">
            {productData.intro?.[locale]}
          </p>
          <div className="hidden items-center gap-3 lg:flex">
            {productData.os_system?.map((item, index) => {
              const Icon = getSystemIcon(item);
              return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
            })}
          </div>

          <Button
            title={t("request_a_demo")}
            style={{ backgroundColor: ColorUtils.success }}
            classname="flex rounded-full w-[222px] self-center lg:hidden"
            onClick={openDemoDialog}
          />
        </div>
      </div>
      <div className="block">
        <Image
          src={productData.image || DefaultImg}
          alt="pos-pic"
          className="object-contain"
          width={500}
          height={500}
        />
      </div>
      <ProsAndCons pros={productData.pros} cons={productData.cons} />
      <ExpertOpinion id={DetailTabs[1].id} data={productData.expert_opinion} />
      <SpecificationView id={DetailTabs[2].id} posId={`${productData.id}`} />
      <div
        id={DetailTabs[3].id}
        className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3"
      >
        <p className="txt-heading-xsmal col-span-1 md:txt-heading-small">
          {DetailTabs[3].title[locale]}
        </p>
        <p className="col-span-2 txt-md text-neutral-700 whitespace-pre-line">
          {productData.pos_integrations?.[locale]}
        </p>
      </div>
      <div
        id={DetailTabs[4].id}
        className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3"
      >
        <p className="txt-heading-xsmal col-span-1 md:txt-heading-small">
          {DetailTabs[4].title[locale]}
        </p>
        <p className="txt-md col-span-2 text-neutral-700 whitespace-pre-line">
          {productData.software?.[locale]}
        </p>
      </div>
      <PaymentProcessing
        id={DetailTabs[5].id}
        desc={productData.payment_processing}
      />
      <Pricing
        id={DetailTabs[6].id}
        monthlyPrice={productData.monthly_price}
        desc={productData.pricing_desc?.[locale] || []}
        oneTimePurchase={productData.one_time_purchase}
        onRequestDemo={openDemoDialog}
        productName={productData.name}
      />
      <FrequentlyQuestion id={DetailTabs[7].id} />
    </Box>
  );
};
