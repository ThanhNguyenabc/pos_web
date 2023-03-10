import { IcApple } from "assets/AssetUtil";
import List from "components/common/List";
import React from "react";
import IcMinus from "assets/icons/ic_minus.svg";
import IcPLus from "assets/icons/ic_plus.svg";
import HeroSection from "components/common/HeroSection";

const CommonQuestionData = [
  {
    title: "What is the cash discount program?",
    answer:
      "The cash discount program allows you as a merchant to offset most of your merchant service fees. It is a method of implementing a service fee to all customers, while providing a discount to those who pay with cash.",
  },
  {
    title: "Is it legal to offer a cash discount?",
    answer:
      "Yes, cash discount is legal. Law prohibits payment card network such as Visa from inhibiting the ability to provide a discount for payment by cash, checks, debit cards or credit cards.",
  },
  {
    title: "What if I don't like the cash discount program?",
    answer:
      "If you are not a fan of the cash discount program, we have a 100% satisfaction guarantee. If for any reason you want to stop using our cash discount program, we will immediately switch you back to the traditional pricing.",
  },
  {
    title: "Is cash discount the same as a surcharge?",
    answer:
      "No, it is not. A surcharge is a fee added to a credit card transaction to cover the credit card processing costs. With cash discount, a discount is applied to the total amount when a customer pays with cash.",
  },
];

const CommonQuestion = () => {
  return (
    <HeroSection className="gap-10 lg:pb-0">
      <div className=" flex flex-col gap-10 md:gap-12 lg:gap-16 lg:max-w-[786px] mx-auto">
        <div className="flex flex-col gap-10 md:gap-6 text-center">
          <p className="txt-heading-small md:txt-heading-large">
            Common Questions About the Cash Discount Program
          </p>
          <p className="txt-md text-neutral-700 md:text-xl">
            Check out Frequently Asked Questions from other merchants just like
            you.
          </p>
        </div>

        <List
          showDivider
          data={CommonQuestionData}
          itemBuilder={(item, index, isSelect) => {
            return (
              <>
                <div className=" flex py-6 flex-row w-full items-start">
                  <div className="flex flex-1 flex-col gap-4">
                    <p className="txt-md-bold md:text-xl">{item.title}</p>
                    <p
                      className={`txt-sm ${
                        isSelect ? "flex" : "hidden"
                      } md:text-xl text-neutral-700`}
                    >
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
    </HeroSection>
  );
};

export default CommonQuestion;
