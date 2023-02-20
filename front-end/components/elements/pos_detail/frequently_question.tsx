import React from "react";

const QuestionData = [
  {
    question: "Can I change my plan later?",
    answer: "You are always free to change the plan of your POS system.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Depending on the POS system and contract, the cancellation policy differs.",
  },
  {
    question: "How does billing work?",
    answer: "Free, monthly or yearly depending on your contract.",
  },
];
const FrequentlyQuestion = ({ id }: { id: string }) => {
  return (
    <div id={id} className="flex flex-col gap-6 md:gap-12">
      <p className="txt-heading-xsmal md:txt-heading-small">
        Frequently asked questions
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {QuestionData.map((item, index) => {
          return (
            <div
              key={`frequently-question-${index}`}
              className=" flex flex-col p-6 bg-neutral-100 gap-2 rounded-2xl"
            >
              <p className="txt-md-bold"> {item.question}</p>
              <p className=" text-neutral-700 md:text-xl">{item.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
