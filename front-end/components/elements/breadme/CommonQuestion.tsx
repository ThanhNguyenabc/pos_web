import { IcApple } from "assets/AssetUtil";
import List from "components/common/List";
import Image from "next/image";
import React from "react";
import IcMinus from "assets/icons/ic_minus.svg";
import IcPLus from "assets/icons/ic_plus.svg";
import ColorUtils from "utils/ColorUtils";

const CommonQuestionData = [
  {
    title: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How does billing work?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How do I change my account email?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];
const CommonQuestion = () => {
  return (
    <div className="flex flex-col px-4 py-12 gap-10 md:px-8 mx-auto max-w-[768px] lg:pt-[100px] xl:pt-[120px]">
      <p className="txt-heading-small md:text-5xl md:font-extrabold md:leading-[56px]">
        Common Questions About the Cash Discount Program
      </p>
      <p className="txt-md text-neutral-700 md:text-xl">
        Check out Frequently Asked Questions from other merchants just like you.
      </p>

      <List
        showDivider
        data={CommonQuestionData}
        itemBuilder={(item, index, isSelect) => {
          return (
            <>
              <div className=" flex py-6 flex-row w-full items-start">
                <div className="flex flex-1 flex-col gap-4">
                  <p className="txt-md-bold md:text-xl">{item.title}</p>
                  <p className={`${isSelect ? "flex" : "hidden"} md:text-xl`}>
                    {item.answer}
                  </p>
                </div>
                {isSelect ? (
                  <IcMinus className="w-6 h-6 text-success" />
                ) : (
                  <IcPLus className="w-6 h-6 text-neutral-dark" />
                )}
              </div>
            </>
          );
        }}
      />
    </div>
  );
};

export default CommonQuestion;
