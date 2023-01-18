import SelectedList from "components/common/SelectedList";
import React from "react";
import Image from "next/image";
import { QuestionnaireContext } from "pages/questionnaire";
import { CategoryList } from "utils/StringUtil";

const BusinessQuestion = () => {
  const value = React.useContext(QuestionnaireContext);
  return (
    <SelectedList
      selectIndex={value.questionData?.businessId}
      data={CategoryList}
      classname={"md:grid-cols-2"}
      itemBuilder={(item, index: number) => {
        return (
          <div className="flex md:h-[180px] flex-row items-center p-4 gap-4 lg:p-6 md:flex-col md:justify-center lg:h-[190px]">
            <Image
              src={item.img}
              className="w-[84px] h-[56px] md:w-[120px] md:h-20"
              alt="image"
            />
            <p className="txt-md-bold md:text-center ">{item.title}</p>
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
