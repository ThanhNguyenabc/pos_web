import SelectedList from "components/common/SelectedList";
import React, { useEffect } from "react";
import Image from "next/image";
import { CategoryList } from "utils/StringUtil";
import useQuestionnaireStore from "stores/questionnaire_store";
import useTrans from "hooks/useTrans";
import { sendGoogleEvent } from "utils/tracking_utils";

const BusinessQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();
  const { locale } = useTrans();

  useEffect(() => {
    sendGoogleEvent("find_pos_business_type");
  }, []);

  return (
    <SelectedList
      selectIndex={questionnaireStore.data?.businessId}
      data={CategoryList}
      classname={"md:grid-cols-2 lg:grid-cols-3 md:gap-6"}
      itemBuilder={(item, index: number) => {
        return (
          <div className="flex h-[80px] flex-row items-center p-3 gap-4 md:h-full md:flex-col">
            <div className="relative w-[70px] md:w-[120px] aspect-[4/3]">
              <Image
                src={item.img}
                alt="image"
                fill
                className="object-cover"
                sizes="90vw"
              />
            </div>
            <div className="flex flex-1 items-center">
              <p className="txt-md-bold md:text-center">{item.title[locale]}</p>
            </div>
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
