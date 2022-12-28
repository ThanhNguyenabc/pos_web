import { RevelImg, IcApple } from "assets/AssetUtil";
import POSCard from "components/common/pos_card/POSCard";
import RecommendPOSCard from "components/common/recommend_card/RecommendPOSCard";
import React from "react";
interface QuestionnaireSuccessProps {
  classname?: string;
}
const QuestionnaireSuccess = ({ classname }: QuestionnaireSuccessProps) => {
  return (
    <div className={`flex flex-col w-full bg-neutral-100 ${classname}`}>
      <div className=" flex flex-col bg-[#D1FADF] gap-2 h-[240px] p-4 pt-6 items-center text-center md:p-8 md:pt-14 xl:px-[120px]">
        <p className="txt-heading-medium text-success">Woohoo! You did it!</p>
        <p className="txt-md text-neutral-700">
          Based on your business requirements, we recommend the following POS
          system
        </p>
        <RecommendPOSCard
          classname="z-1 top-4"
          logo={RevelImg}
          systemos={[IcApple]}
          rating={8}
          desc={
            "Customizable POS system for retail, full & quick-service restaurants"
          }
          pros={[
            "Customizable clouded system",
            "Amazing local on-site support",
            "Great back office management",
          ]}
          cons={[
            "Doesn't work with Android",
            "Potential glitches with weak internet",
            "No modifiers to modifiers feature",
          ]}
        />
      </div>

      <div className="flex flex-col px-4 pb-10 pt-[270px] gap-4 md:pt-[170px]  xl:pt-[200px] md:px-8 md:gap-6 xl:px-[120px]">
        <p className="txt-large-bold">
          Other POS systems you can use based on your answers
        </p>
        <POSCard
          logo={RevelImg}
          systemos={[IcApple]}
          rating={8}
          desc={
            "Toast is a easy-to-use software with a sleek station & handheld hardware"
          }
          pros={[
            "Customizable clouded system",
            "Amazing local on-site support",
            "Great back office management",
          ]}
          cons={[
            "Doesn't work with Android",
            "Potential glitches with weak internet",
            "No modifiers to modifiers feature",
          ]}
        />
        <POSCard
          logo={RevelImg}
          systemos={[IcApple]}
          rating={8}
          desc={
            "Toast is a easy-to-use software with a sleek station & handheld hardware"
          }
          pros={[
            "Customizable clouded system",
            "Amazing local on-site support",
            "Great back office management",
          ]}
          cons={[
            "Doesn't work with Android",
            "Potential glitches with weak internet",
            "No modifiers to modifiers feature",
          ]}
        />
        <POSCard
          logo={RevelImg}
          systemos={[IcApple]}
          rating={8}
          desc={
            "Toast is a easy-to-use software with a sleek station & handheld hardware"
          }
          pros={[
            "Customizable clouded system",
            "Amazing local on-site support",
            "Great back office management",
          ]}
          cons={[
            "Doesn't work with Android",
            "Potential glitches with weak internet",
            "No modifiers to modifiers feature",
          ]}
        />
      </div>
    </div>
  );
};

export default QuestionnaireSuccess;
