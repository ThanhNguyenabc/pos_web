import { Station1Img, Station2Img, Station4Img } from "assets/AssetUtil";
import React, { useEffect } from "react";
import SelectedList from "../../common/SelectedList";
import Image from "next/image";
import { CategoryList, YesNoQuestion } from "utils/StringUtil";
import useQuestionnaireStore from "stores/questionnaire_store";
import { CategoryType } from "models/category_type";
import useTrans from "hooks/useTrans";
import { sendGoogleEvent } from "utils/tracking_utils";

export const StationData = [
  {
    icon: Station1Img,
    content: "1",
  },
  {
    icon: Station2Img,
    content: "2-3",
  },
  {
    icon: Station4Img,
    content: "4+",
  },
];

const StationQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();
  const data = questionnaireStore.data;
  const { t } = useTrans();

  useEffect(() => {
    sendGoogleEvent("find_pos_stations_require");
  }, []);

  return (
    <SelectedList
      selectIndex={data?.numberStationIndex}
      classname={"md:grid-cols-3"}
      data={StationData}
      itemBuilder={(item, index: number) => {
        return (
          <div className="card-body md:h-[190px] flex flex-row items-center p-4 gap-4 lg:p-6 md:flex-col">
            <div className="relative w-16 md:w-[100px] aspect-[4/3]">
              <Image src={item.icon} alt="station" fill sizes="95vw" />
            </div>

            <p className="txt-md-bold md:text-center">
              {`${item.content} ${t("stations")}`}
            </p>
          </div>
        );
      }}
      onItemSelected={(selectedIndex) => {
        let businessType = CategoryList[data.businessId].type;
        let isHaveSaleSystem = YesNoQuestion[data.saleSystemIndex] == "yes";
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
