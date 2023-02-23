import SelectedList from "components/common/SelectedList";
import { BreadmeContext } from "pages/bread-me-questions";
import React from "react";
import { YesNoQuestion } from "utils/StringUtil";

const BreadmeDiscountQuestion = () => {
  const value = React.useContext(BreadmeContext);

  return (
    <SelectedList
      selectIndex={value.questionData?.isDiscountIndex}
      data={YesNoQuestion}
      selectBorderColor="border-success"
      itemListClassName="active:border-success"
      itemBuilder={(item, index) => (
        <p className="text-center txt-md-bold p-4 md:text-xl">{item}</p>
      )}
      onItemSelected={(selectIndex) => {
        value.setQuestionData({
          ...value.questionData,
          isDiscountIndex: selectIndex,
        });
      }}
    />
  );
};

export default BreadmeDiscountQuestion;
