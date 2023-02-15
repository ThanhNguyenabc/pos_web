import React from "react";
import SelectedList from "../../common/SelectedList";
import Image from "next/image";
import { HandHeldData, YesNoQuestion } from "utils/StringUtil";
import useQuestionnaireStore from "stores/questionnaire_store";

const HandHeldQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();
  const data = questionnaireStore.data;

  return (
    <SelectedList
      selectIndex={questionnaireStore.data?.handHeldIndex}
      classname={"md:grid-cols-3"}
      data={HandHeldData}
      itemBuilder={(item, index: number) => {
        return (
          <div className="card-body md:h-[190px] flex flex-row items-center p-4 gap-4 lg:p-6 md:flex-col">
            <Image src={item.icon} className="w-16 md:w-[100px]" alt="image" />
            <p className="txt-md-bold md:text-center">
              {item.content} handhelds
            </p>
          </div>
        );
      }}
      onItemSelected={(selectedIndex) => {
        let isHaveSaleSystem = YesNoQuestion[data.saleSystemIndex] == "Yes";
        let nextNumberPage = 1;

        if (!isHaveSaleSystem) {
          nextNumberPage = 2;
        }
        questionnaireStore.setQuestionData(
          {
            ...questionnaireStore.data,
            handHeldIndex: selectedIndex,
          },
          nextNumberPage
        );
      }}
    />
  );
};

export default HandHeldQuestion;
