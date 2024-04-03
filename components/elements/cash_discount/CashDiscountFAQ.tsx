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
        "A cash discount program is when a merchant raises prices slightly to cover credit card processing fees and offers a discount to customers who pay with cash. This is legal as long as it's properly disclosed and implemented, and can be a way for merchants to save on fees.",
      [Locale.es]:
        "Un programa de descuento por effectivo es cuando un comerciante aumenta ligeramente los precios para cubrir las tarifas de procesamiento detarjetas de crédito y ofrece un descuento a los clientes que pagan en efectivo. Esto es legal siempre que se divulgue e implemente adecuadamente, y puede ser una forma para que los comerciantes ahorren tarifas.",
    },
  },

  {
    title: {
      [Locale.en]: "Is Cash Discount Legal?",
      [Locale.es]: "¿Es legal el descuento por effectivo?",
    },
    answer: {
      [Locale.en]:
        "Yes, cash discount programs are legal in the United States as long as they are properly disclosed and implemented. Merchants are allowed to raise prices to cover the cost of credit card processing fees and offer a discount to customers who pay with cash. However, it's important to ensure that the program is properly disclosed to customers and that the discount is applied before taxes. Additionally, some states may have specific regulations around cash discount programs, so it's important to check local laws and regulations.",
      [Locale.es]:
        "Sí, el descuento por pago en efectivo es legal. La ley prohíbe que una red de tarjetas de pago como Visa inhiba la capacidad de ofrecer un descuento por pago en efectivo, cheques, tarjetas de débito o tarjetas de crédito.",
    },
  },
  {
    title: {
      [Locale.en]: "What if I decide to using the Cash Discount Program?",
      [Locale.es]:
        "¿Qué pasa si decido utilizar el Programa de descuento por effectivo?",
    },
    answer: {
      [Locale.en]:
        "At BestPOS, we have a 100% satisfaction guarantee. If for any reason you want to stop using Cash Discount Program, we will immediately switch you back to the traditional pricing.",
      [Locale.es]:
        "En BestPOS tenemos una garantía de satisfacción del 100%. Si por algún motivo desea dejar de utilizar el Programa de descuento por effectivo lo cambiaremos inmediatamente al precio tradicional.",
    },
  },
  {
    title: {
      [Locale.en]: "Is this the same as surcharge?",
      [Locale.es]: "¿Es esto lo mismo que un recargo?",
    },
    answer: {
      [Locale.en]:
        "No, it is not! A surcharge is a fee added to a credit card transaction to cover the credit card processing costs. With cash discount, a discount is applied to the total amount when a customer pays with cash.",
      [Locale.es]:
        "¡No, no es! Un recargo es una tarifa que se agrega a una transacción con tarjeta de crédito para cubrir los costos de procesamiento de la tarjeta de crédito. Con el descuento por effectivo, se aplica un descuento al monto total cuando un cliente paga en efectivo.",
    },
  },

  {
    title: {
      [Locale.en]: "What do I need to enroll into Cash Discount Program?",
      [Locale.es]: "¿Qué necesito para inscribirme en el Programa de descuento por effectivo?",
    },
    answer: {
      [Locale.en]:
        "All you simply need is a merchant application and your processing statements",
      [Locale.es]:
        "Todo lo que necesita es una solicitud de comerciante y sus estados de cuenta de procesamiento.",
    },
  },

  {
    title: {
      [Locale.en]: "How does a cash discount program work?",
      [Locale.es]: "¿Cómo funciona un programa de descuento por effectivo?",
    },
    answer: {
      [Locale.en]:
        "The merchant raises their prices slightly to cover the cost of credit card processing fees but offers a discount to customers who pay with cash, so they can pay the lower price.",
      [Locale.es]:
        "El comerciante aumenta ligeramente sus precios para cubrir el costo de las tarifas de procesamiento de tarjetas de crédito, pero ofrece un descuento a los clientes que pagan en efectivo, para que puedan pagar el precio más bajo.",
    },
  },

  {
    title: {
      [Locale.en]: "Are there any specific regulations around cash discount programs?",
      [Locale.es]: "¿Existe alguna normativa específica sobre los programas de descuento por pronto pago?",
    },
    answer: {
      [Locale.en]:
        "Some states may have specific regulations around cash discount programs, so it's important to check local laws and regulations.",
      [Locale.es]:
        "Algunos estados pueden tener regulaciones específicas sobre los programas de descuento por effectivo, por lo que es importante consultar las leyes y regulaciones locales.",
    },
  },

  {
    title: {
      [Locale.en]: "Can merchants charge a fee for credit card transactions instead of offering a cash discount?",
      [Locale.es]: "¿Pueden los comerciantes cobrar una tarifa por las transacciones con tarjeta de crédito en lugar de ofrecer un descuento por effectivo?",
    },
    answer: {
      [Locale.en]:
        "Merchants can choose to charge a fee for credit card transactions instead of offering a cash discount, but this is considered a surcharge and may be subject to different regulations and laws.",
      [Locale.es]:
        "Los comerciantes pueden optar por cobrar una tarifa por las transacciones con tarjeta de crédito en lugar de ofrecer un descuento por effectivo, pero esto se considera un recargo y puede estar sujeto a diferentes regulaciones y leyes.",
    },
  }
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
