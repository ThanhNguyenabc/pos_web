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
    <div className="flex flex-col px-4 py-12 gap-10 md:px-8 mx-auto max-w-[768px] xl:py-[120px]">
      <p className="txt-heading-small md:text-5xl md:font-extrabold">
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 13H16.025C16.3083 13 16.5417 12.904 16.725 12.712C16.9083 12.5207 17 12.2833 17 12C17 11.7167 16.904 11.479 16.712 11.287C16.5207 11.0957 16.2833 11 16 11H7.975C7.69167 11 7.45833 11.0957 7.275 11.287C7.09167 11.479 7 11.7167 7 12C7 12.2833 7.09567 12.5207 7.287 12.712C7.479 12.904 7.71667 13 8 13ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                      fill={ColorUtils.success}
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17C12.2833 17 12.521 16.904 12.713 16.712C12.9043 16.5207 13 16.2833 13 16V13H16.025C16.3083 13 16.5417 12.904 16.725 12.712C16.9083 12.5207 17 12.2833 17 12C17 11.7167 16.904 11.479 16.712 11.287C16.5207 11.0957 16.2833 11 16 11H13V7.975C13 7.69167 12.9043 7.45833 12.713 7.275C12.521 7.09167 12.2833 7 12 7C11.7167 7 11.4793 7.09567 11.288 7.287C11.096 7.479 11 7.71667 11 8V11H7.975C7.69167 11 7.45833 11.0957 7.275 11.287C7.09167 11.479 7 11.7167 7 12C7 12.2833 7.09567 12.5207 7.287 12.712C7.479 12.904 7.71667 13 8 13H11V16.025C11 16.3083 11.096 16.5417 11.288 16.725C11.4793 16.9083 11.7167 17 12 17ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                      fill="#101828"
                    />
                  </svg>
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
