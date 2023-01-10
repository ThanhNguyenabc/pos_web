import SelectedList from "components/common/SelectedList";
import Image from "next/image";
import { BreadmeContext } from "pages/breadme";
import React from "react";
import { BreadmeStationData } from "utils/StringUtil";

const BreadmeStation = () => {
  const value = React.useContext(BreadmeContext);

  return (
    <SelectedList
      selectIndex={value.questionData?.numberStationIndex}
      data={BreadmeStationData}
      classname="md:grid-cols-3 md:gap-8"
      selectBorderColor="border-success"
      itemListClassName="hover:border-success"
      itemBuilder={(item, index: number) => {
        return (
          <div className="card-body flex flex-row items-center p-4 gap-4 md:flex-col">
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

export default BreadmeStation;
