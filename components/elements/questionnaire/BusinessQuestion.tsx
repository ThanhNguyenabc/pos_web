import SelectedList from "components/common/SelectedList";
import React from "react";
import Image from "next/image";
import { BusinessTypes } from "utils/StringUtil";
import useQuestionnaireStore from "stores/questionnaire_store";

const BusinessQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();
  return (
    <SelectedList
      selectIndex={questionnaireStore.data?.businessId}
      data={BusinessTypes}
      classname={"md:grid-cols-2 md:gap-6"}
      itemBuilder={(item, index: number) => {
        return (
          <div className="flex h-[80px] flex-row items-center p-3 gap-4 md:h-full md:flex-col md:justify-center lg:p-6">
            <Image
              src={item.img}
              alt="image"
              className=" w-[70px] md:w-[120px] object-cover"
            />
            <p className="txt-md-bold md:text-center  ">{item.title}</p>
          </div>
        );
      }}
      onItemSelected={(selectedIndex) => {
        questionnaireStore.setQuestionData({
          ...questionnaireStore.data,
          businessId: selectedIndex,
        });
      }}
    />
  );
};

export default BusinessQuestion;
