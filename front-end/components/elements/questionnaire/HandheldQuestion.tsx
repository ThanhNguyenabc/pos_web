import {
  HandHeld1Img,
  HandHeld2Img,
  HandHeld3Img,
  Station1Img,
  Station2Img,
  Station3Img,
} from "assets/AssetUtil";
import React from "react";
import SelectedList from "../../common/SelectedList";
import Image from "next/image";
import { QuestionnaireContext } from "pages/questionnaire";

export const HandHeldData = [
  {
    icon: HandHeld1Img,
    content: "1 handhelds",
  },
  {
    icon: HandHeld2Img,
    content: "2-3 handhelds",
  },
  {
    icon: HandHeld3Img,
    content: "4+ handhelds",
  },
];

const HandHeldQuestion = () => {
  const value = React.useContext(QuestionnaireContext);

  return (
    <SelectedList
      selectIndex={value.questionData?.handHeldIndex}
      classname={"md:grid-cols-3"}
      data={HandHeldData}
      itemBuilder={(item, index: number) => {
        return (
          <div className="card-body flex flex-row items-center p-4 gap-4 lg:p-6 md:flex-col">
            <Image src={item.icon} className="w-16 md:w-[100px]" alt="image" />
            <p className="txt-md-bold md:text-center">{item.content}</p>
          </div>
        );
      }}
      onItemSelected={(selectedIndex) => {
        value.setQuestionData({
          ...value.questionData,
          handHeldIndex: selectedIndex,
        });
      }}
    />
  );
};

export default HandHeldQuestion;
