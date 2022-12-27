import SelectedList from "components/common/SelectedList";
import { QuestionnaireContext } from "pages/questionnaire";
import React from "react";

const CashDiscountAnswerData = ["Yes", "No"];

const CashDiscountQuestion = () => {
  const value = React.useContext(QuestionnaireContext);

  return (
    <SelectedList
      selectIndex={value.questionData?.isDiscountIndex}
      data={CashDiscountAnswerData}
      itemBuilder={(item, index) => (
        <div className="p-4 border-neutral-300 ">
          <p className="text-center txt-md-bold">{item}</p>
        </div>
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

export default CashDiscountQuestion;
