import { Station1Img, Station2Img, Station4Img } from "assets/AssetUtil";
import React from "react";
import SelectedList from "../../common/SelectedList";
import Image from "next/image";
import { StationData, YesNoQuestion } from "utils/StringUtil";
import useQuestionnaireStore from "stores/questionnaire_store";
import { QuestionList } from "./BusinessQuestion";
import { CategoryType } from "models/category_type";

const StationQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();
  const data = questionnaireStore.data;

  return (
    <SelectedList
      selectIndex={data?.numberStationIndex}
      classname={"md:grid-cols-3"}
      data={StationData}
      itemBuilder={(item, index: number) => {
        return (
          <div className="card-body md:h-[190px] flex flex-row items-center p-4 gap-4 lg:p-6 md:flex-col">
            <Image
              src={item.icon}
              className="w-16 h-16 md:w-[100px] md:h-[100px]"
              alt="image"
            />
            <p className="txt-md-bold md:text-center">
              {item.content} stations
            </p>
          </div>
        );
      }}
      onItemSelected={(selectedIndex) => {
        let businessType = QuestionList[data.businessId].type;
        let isHaveSaleSystem = YesNoQuestion[data.saleSystemIndex] == "Yes";
        let nextPageNumber = 1;

        if (businessType == CategoryType.retail) {
          nextPageNumber = isHaveSaleSystem ? 2 : 3;
        }

        questionnaireStore.setQuestionData(
          {
            ...questionnaireStore.data,
            numberStationIndex: selectedIndex,
          },
          nextPageNumber
        );
      }}
    />
  );
};

export default StationQuestion;
