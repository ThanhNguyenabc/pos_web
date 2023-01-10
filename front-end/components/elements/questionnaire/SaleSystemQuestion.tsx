import SelectedList from "components/common/SelectedList";
import { QuestionnaireContext } from "pages/questionnaire";
import React from "react";
import { YesNoQuestion } from "utils/StringUtil";

const SaleSystemQuestion = () => {
  const value = React.useContext(QuestionnaireContext);

  return (
    <SelectedList
      selectIndex={value.questionData?.isOwnSaleSystemIndex}
      data={YesNoQuestion}
      itemListClassName={"md:max-w-lg"}
      itemBuilder={(item, index) => (
        <div className="p-4 border-neutral-300 ">
          <p className="text-center txt-md-bold">{item}</p>
        </div>
      )}
      onItemSelected={(selectedIndex) => {
        value.setQuestionData({
          ...value.questionData,
          isOwnSaleSystemIndex: selectedIndex,
        });
      }}
    />
  );
};

export default SaleSystemQuestion;
