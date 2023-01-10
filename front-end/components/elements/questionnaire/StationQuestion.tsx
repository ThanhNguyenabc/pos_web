import { Station1Img, Station2Img, Station4Img } from "assets/AssetUtil";
import React from "react";
import SelectedList from "../../common/SelectedList";
import Image from "next/image";
import { QuestionnaireContext } from "pages/questionnaire";
import { StationData } from "utils/StringUtil";

const StationQuestion = () => {
  const value = React.useContext(QuestionnaireContext);

  return (
    <SelectedList
      selectIndex={value.questionData?.numberStationIndex}
      data={StationData}
      itemBuilder={(item, index: number) => {
        return (
          <div className="card-body flex flex-row items-center p-4 gap-4 lg:p-6 md:flex-col">
            <Image
              src={item.icon}
              className="w-16 h-16 md:w-[100px] md:h-[100px]"
              alt="image"
            />
            <p className="txt-md-bold md:text-center">{item.content}</p>
          </div>
        );
      }}
      onItemSelected={(selectedIndex) => {
        value.setQuestionData({
          ...value.questionData,
          numberStationIndex: selectedIndex,
        });
      }}
    />
  );
};

export default StationQuestion;
