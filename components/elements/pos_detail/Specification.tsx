import { getSpecification } from "api_client/axios_client";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import React from "react";
import useSWR from "swr";

const SpecificationTrans = {
  heading: {
    [Locale.en]: "Specifications",
    [Locale.es]: "Especificaciones",
  },
  businessSize: {
    [Locale.en]: "Business Size",
    [Locale.es]: "Tamaño de la empresa",
  },
  posType: {
    [Locale.en]: "POS Type",
    [Locale.es]: "Tipo de punto de venta",
  },
  softwareType: {
    [Locale.en]: "Software type",
    [Locale.es]: "Tipo de Software",
  },
  freeTrial: {
    [Locale.en]: "Free Trial",
    [Locale.es]: "Prueba Gratuita",
  },
  merchant: {
    [Locale.en]: "Merchant Services",
    [Locale.es]: "Servicios comerciales",
  },
  pricingModel: {
    [Locale.en]: "Pricing Model",
    [Locale.es]: "Modelo de precios",
  },
  pricingRange: {
    [Locale.en]: "Price Range",
    [Locale.es]: "Price Range",
  },
};

interface SpecificationProps {
  id: string;
  posId: string;
}
const SpecificationView = ({ id, posId }: SpecificationProps) => {
  const { locale } = useTrans();
  const { data } = useSWR(`specification-${posId}`, () =>
    getSpecification(`${posId}`)
  );

  const items = [
    {
      title: SpecificationTrans.businessSize,
      desc: data?.businessSize,
    },
    {
      title: SpecificationTrans.posType,
      desc: data?.posType,
    },
    {
      title: SpecificationTrans.softwareType,
      desc: data?.softwareType,
    },
    {
      title: SpecificationTrans.freeTrial,
      desc: data?.freeTrial,
    },
    {
      title: SpecificationTrans.merchant,
      desc: data?.merchantService,
    },
    {
      title: SpecificationTrans.pricingModel,
      desc: data?.pricingModel,
    },
    {
      title: SpecificationTrans.pricingRange,
      desc: data?.priceRange || "$$-$$$$",
    },
  ];

  return (
    <div id={id} className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <p className="col-span-1 txt-heading-xsmal md:txt-heading-small">
        {SpecificationTrans.heading[locale]}
      </p>
      <table className="col-span-2 table txt-md w-full">
        <tbody>
          {items.map((item, index) => {
            const desc =
              typeof item.desc == "object" ? item.desc?.[locale] : item.desc;
            return (
              <tr key={`sp-${index}`}>
                <th className="font-semibold p-0">{item.title[locale]}</th>
                <td className="whitespace-pre-wrap">{desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationView;
