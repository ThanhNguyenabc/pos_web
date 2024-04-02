import List from "components/common/List";
import React from "react";
import IcMinus from "assets/icons/ic_minus.svg";
import IcPLus from "assets/icons/ic_plus.svg";
import HeroSection from "components/common/HeroSection";
import { Locale } from "models/app_configs";
import useTrans from "hooks/useTrans";

const QuestionData = [
  {
    title: {
      [Locale.en]: "What is the cash discount program?",
      [Locale.es]: "¿Qué es el programa de descuento en efectivo?",
    },
    answer: {
      [Locale.en]:
        "The cash discount program allows you as a merchant to offset most of your merchant service fees. It is a method of implementing a service fee to all customers, while providing a discount to those who pay with cash.",
      [Locale.es]:
        "El programa de descuento en efectivo le permite como comerciante compensar la mayor parte de sus tarifas de servicio comercial. Es un método de aplicar una tarifa de servicio a todos los clientes, al tiempo que ofrece un descuento a los que pagan en efectivo.",
    },
  },

  {
    title: {
      [Locale.en]: "Is it legal to offer a cash discount?",
      [Locale.es]: "¿Es legal ofrecer descuento en efectivo?",
    },
    answer: {
      [Locale.en]:
        "Yes, cash discount is legal. Law prohibits payment card network such as Visa from inhibiting the ability to provide a discount for payment by cash, checks, debit cards or credit cards.",
      [Locale.es]:
        "Sí, el descuento por pago en efectivo es legal. La ley prohíbe que una red de tarjetas de pago como Visa inhiba la capacidad de ofrecer un descuento por pago en efectivo, cheques, tarjetas de débito o tarjetas de crédito.",
    },
  },
  {
    title: {
      [Locale.en]: "What if I don't like the cash discount program?",
      [Locale.es]:
        "¿Qué pasa si no me gusta el programa de descuento en efectivo?",
    },
    answer: {
      [Locale.en]:
        "If you are not a fan of the cash discount program, we have a 100% satisfaction guarantee. If for any reason you want to stop using our cash discount program, we will immediately switch you back to the traditional pricing.",
      [Locale.es]:
        "Si no te agrada el programa de descuento en efectivo, tenemos una garantía de satisfacción del 100%. Si por alguna razón desea dejar de usar nuestro programa de descuento en efectivo, lo cambiaremos de inmediato al precio tradicional.",
    },
  },
  {
    title: {
      [Locale.en]: "Is cash discount the same as a surcharge?",
      [Locale.es]: "¿Es lo mismo un descuento por pronto pago que un recargo?",
    },
    answer: {
      [Locale.en]:
        "No, it is not. A surcharge is a fee added to a credit card transaction to cover the credit card processing costs. With cash discount, a discount is applied to the total amount when a customer pays with cash.",
      [Locale.es]:
        "No, no lo es. Un recargo es una tarifa que se agrega a una transacción con tarjeta de crédito para cubrir los costos de procesamiento de la tarjeta de crédito. Con el descuento por pronto pago, se aplica un descuento al monto total cuando un cliente paga en efectivo.",
    },
  },
];

const CashDiscountFAQ = () => {
  const { t, locale } = useTrans();
  return (
    <HeroSection className="gap-10 lg:pb-0">
      <div className=" flex flex-col gap-10 md:gap-12 lg:gap-16 lg:max-w-[786px] mx-auto">
        <div className="flex flex-col gap-10 md:gap-6 text-center">
          <h3 className="txt-heading-medium lg:txt-heading-large">
            {t("common_question_discount")}
          </h3>
          <p className="txt-md text-neutral-700 md:text-xl">
            {t("common_question_discount_desc")}
          </p>
        </div>

        <List
          showDivider
          data={QuestionData}
          itemBuilder={(item, index, isSelect) => {
            return (
              <>
                <div className=" flex py-6 flex-row w-full items-start">
                  <div className="flex flex-1 flex-col gap-4">
                    <p className="txt-md-bold md:text-xl">
                      {item.title[locale]}
                    </p>
                    <p
                      className={`txt-sm ${
                        isSelect ? "flex" : "hidden"
                      } md:text-xl text-neutral-700`}
                    >
                      {item.answer[locale]}
                    </p>
                  </div>
                  {isSelect ? (
                    <IcMinus className="w-6 h-6 text-primary" />
                  ) : (
                    <IcPLus className="w-6 h-6 text-neutral-dark" />
                  )}
                </div>
              </>
            );
          }}
        />
      </div>
    </HeroSection>
  );
};

export default CashDiscountFAQ;
