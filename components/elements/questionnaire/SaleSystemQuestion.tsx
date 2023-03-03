import SelectedList from "components/common/SelectedList";
import React from "react";
import useQuestionnaireStore from "stores/questionnaire_store";
import { YesNoQuestion } from "utils/StringUtil";

const SaleSystemQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();

  return (
    <SelectedList
      selectIndex={questionnaireStore.data.saleSystemIndex}
      data={YesNoQuestion}
      itemListClassName={"md:max-w-lg"}
      itemBuilder={(item, index) => (
        <div className="p-4 border-neutral-300 h-14 md:h-16">
          <p className="text-center txt-md-bold md:text-xl">{item}</p>
        </div>
      )}
      onItemSelected={(selectedIndex) => {
        questionnaireStore.setQuestionData({
          ...questionnaireStore.data,
          saleSystemIndex: selectedIndex,
        });
      }}
    />
  );
};

export default SaleSystemQuestion;
