import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import React from "react";

const FrequentlyQuestionTrans = {
  title: {
    [Locale.en]: "Frequently asked questions",
    [Locale.es]: "Preguntas frecuentes",
  },
};

const QuestionData = [
  {
    question: {
      [Locale.en]: "Can I change my plan later?",
      [Locale.es]: "¿Puedo cambiar mi plan después?",
    },
    answer: {
      [Locale.en]: "You are always free to change the plan of your POS system.",
      [Locale.es]: "Siempre puede cambiar el plan de su sistema POS.",
    },
  },
  {
    question: {
      [Locale.en]: "What is your cancellation policy?",
      [Locale.es]: "¿Cúal es su política de cancelación?",
    },
    answer: {
      [Locale.en]:
        "Depending on the POS system and contract, the cancellation policy differs.",
      [Locale.es]:
        "Dependiendo de sistema POS y el contrato, las politicas de cancelación varian.",
    },
  },
  {
    question: {
      [Locale.en]: "How does billing work?",
      [Locale.es]: "¿Cómo funciona la facturación?",
    },
    answer: {
      [Locale.en]: "Free, monthly or yearly depending on your contract.",
      [Locale.es]: "Gratuita, mensual, anual o dependiendo de su contrato",
    },
  },
];

const FrequentlyQuestion = ({ id }: { id: string }) => {
  const { locale } = useTrans();
  return (
    <div id={id} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
      <p className="col-span-1 txt-heading-xsmal md:txt-heading-small">
        {FrequentlyQuestionTrans.title[locale]}
      </p>
      <div className="col-span-2 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {QuestionData.map((item, index) => {
          return (
            <div
              key={`frequently-question-${index}`}
              className=" flex flex-col p-6 bg-neutral-100 gap-2 rounded-2xl"
            >
              <p className="txt-md-bold"> {item.question[locale]}</p>
              <p className=" text-neutral-700">{item.answer[locale]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
