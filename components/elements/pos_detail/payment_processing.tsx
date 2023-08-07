import React from "react";
import Attribute from "models/attribute";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";

const PaymentProcessingTrans = {
  title: {
    [Locale.en]: "Payment Processing",
    [Locale.es]: "Procesando pago",
  },
  breadme_title: {
    [Locale.en]: "Get zero processing fees with Breadme",
    [Locale.es]: "Obtén cero tarifas de procesamiento con Breadme",
  },
  btnBreadme: {
    [Locale.en]: "Learn more",
    [Locale.es]: "Aprende más",
  },
};
const PaymentProcessing = ({ id, desc }: { id: string; desc?: Attribute }) => {
  const { locale } = useTrans();
  return (
    <div id={id} className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
      <p className="txt-heading-xsmal col-span-1 md:txt-heading-small">
        {PaymentProcessingTrans.title[locale]}
      </p>
      <p className="col-span-2 txt-md text-neutral-700 whitespace-pre-line">
        {desc?.[locale]}
      </p>
    </div>
  );
};

export default PaymentProcessing;
