import SelectedList from "components/common/SelectedList";
import React from "react";
import { Categories } from "../home/BusinessCategorySection";
import Image from "next/image";
import { QuestionnaireContext } from "pages/questionnaire";

const BusinessQuestion = () => {
  const value = React.useContext(QuestionnaireContext);
  return (
    <SelectedList
      selectIndex={value.questionData?.businessId}
      data={Categories}
      classname={"md:grid-cols-2"}
      itemBuilder={(item, index: number) => {
        return (
          <div className="flex md:h-[180px] flex-row items-center p-4 gap-4 lg:p-6 md:flex-col md:justify-center lg:h-[190px]">
            <Image
              src={item.link}
              className="w-[84px] h-[56px] md:w-[120px] md:h-20"
              alt="image"
            />
            <p className="txt-md-bold md:text-center ">{item.name}</p>
          </div>
        );
      }}
      onItemSelected={(selectedIndex) => {
        value.setQuestionData({
          ...value.questionData,
          businessId: selectedIndex,
        });
      }}
    />
  );
};

export default BusinessQuestion;
