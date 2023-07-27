import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import React, { useEffect } from "react";
import useQuestionnaireStore from "stores/questionnaire_store";
import { YesNoQuestion } from "utils/StringUtil";
import { sendGoogleEvent } from "utils/tracking_utils";

const SaleSystemQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();
  const { t } = useTrans();

  useEffect(() => {
    sendGoogleEvent("find_pos_owned_pos");
  }, []);

  return (
    <SelectedList
      selectIndex={questionnaireStore.data.saleSystemIndex}
      data={YesNoQuestion}
      itemListClassName={"md:max-w-lg"}
      itemBuilder={(item, index) => (
        <div className="p-4 border-neutral-300 h-14 md:h-16">
          <p className="text-center txt-md-bold md:text-xl">{t(item)}</p>
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
