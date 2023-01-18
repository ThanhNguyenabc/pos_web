import SelectedList from "components/common/SelectedList";
import { BreadmeContext } from "pages/bread-me-questions";
import React from "react";
import { BreadmeCreditCardVolumeData } from "utils/StringUtil";

const BreadmeCreditCard = () => {
  const value = React.useContext(BreadmeContext);
  return (
    <SelectedList
      selectIndex={value.questionData?.creditCardVolumnId}
      data={BreadmeCreditCardVolumeData}
      selectBorderColor="border-success"
      itemListClassName="hover:border-success"
      itemBuilder={(item, index) => (
        <p className="text-center txt-md-bold md:text-xl p-4">
          {item} USD per month
        </p>
      )}
      onItemSelected={(selectIndex) => {
        value.setQuestionData({
          ...value.questionData,
          creditCardVolumnId: selectIndex,
        });
      }}
    />
  );
};

export default BreadmeCreditCard;
