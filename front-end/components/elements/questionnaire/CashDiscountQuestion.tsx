import SelectedList from "components/common/SelectedList";
import React from "react";
import useQuestionnaireStore from "stores/questionnaire_store";
import { YesNoQuestion } from "utils/StringUtil";

const CashDiscountQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();

  return (
    <SelectedList
      selectIndex={questionnaireStore.data?.discountIndex}
      data={YesNoQuestion}
      itemBuilder={(item, index) => (
        <div className="p-4 border-neutral-300 ">
          <p className="text-center txt-md-bold">{item}</p>
        </div>
      )}
      onItemSelected={(selectIndex) => {
        questionnaireStore.setQuestionData({
          ...questionnaireStore.data,
          discountIndex: selectIndex,
        });
      }}
    />
  );
};

export default CashDiscountQuestion;
