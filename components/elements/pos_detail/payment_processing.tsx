import router from "next/router";
import React from "react";
import AppRoutes from "utils/routes";
import Image from "next/image";
import IcRightArrow from "assets/icons/ic_right_arrow.svg";
import Attribute from "models/attribute";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import { Button } from "components/common/Button";

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
    <div id={id} className="flex flex-col gap-4 md:gap-8">
      <p className="txt-heading-xsmal md:txt-heading-small">
        {PaymentProcessingTrans.title[locale]}
      </p>
      <p className="txt-md text-neutral-700 whitespace-pre-line">
        {desc?.[locale]}
      </p>
      <div className="flex flex-row p-4 gap-4 items-center border-success border-2 rounded-xl">
        <Image
          src="https://res.cloudinary.com/dgrym3yz3/image/upload/v1681793947/assets/common/breadme_2_qgu0zk.png"
          alt="breadme-payment"
          width={36}
          height={36}
        />
        <p className="txt-md-bold md:txt-large-bold  flex-1 xl:text-start">
          {PaymentProcessingTrans.breadme_title[locale]}
        </p>

        <Button
          title={""}
          rightIcon={<IcRightArrow className="text-2xl text-success" />}
          style={{ background: "white" }}
          onClick={() => router.push(AppRoutes.BreadmeQuestionPage)}
        />
      </div>
    </div>
  );
};

export default PaymentProcessing;
