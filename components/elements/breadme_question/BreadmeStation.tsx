import { Station2Img, Station4Img, Station5Img } from "assets/AssetUtil";
import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import Image from "next/image";
import { BreadmeContext } from "pages/bread-me-questions";
import React, { useEffect } from "react";
import { sendGoogleEvent } from "utils/tracking_utils";

export const BreadmeStationData = [
  {
    icon: Station2Img,
    content: "0-3",
  },
  {
    icon: Station4Img,
    content: "3-5",
  },
  {
    icon: Station5Img,
    content: "5+",
  },
];

const BreadmeStation = () => {
  const { t } = useTrans();
  const value = React.useContext(BreadmeContext);

  useEffect(() => {
    sendGoogleEvent("breadme_stations");
  }, []);

  return (
    <SelectedList
      selectIndex={value.questionData?.numberStationIndex}
      data={BreadmeStationData}
      className="md:grid-cols-3 md:gap-8"
      selectBorderColor="border-success"
      renderItem={(item, index: number) => {
        return (
          <div className="card-body flex flex-row items-center p-4 gap-4 md:flex-col">
            <div className="relative w-16 h-16 md:w-[100px] md:h-[100px]">
              <Image src={item.icon} alt="image" fill sizes="95vw" />
            </div>

            <p className="txt-md-bold md:text-center">
              {item.content} {t("stations")}
            </p>
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

export default BreadmeStation;
