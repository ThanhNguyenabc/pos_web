import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import React, { useEffect } from "react";
import useQuestionnaireStore from "stores/questionnaire_store";
import { YesNoQuestion } from "utils/StringUtil";
import { sendGoogleEvent } from "utils/tracking_utils";

const CashDiscountQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();
  const { t } = useTrans();

  useEffect(() => {
    sendGoogleEvent("find_pos_cash_discount");
  }, []);

  return (
    <SelectedList
      selectIndex={questionnaireStore.data?.discountIndex}
      data={YesNoQuestion}
      itemBuilder={(item, index) => (
        <div className="p-4 border-neutral-300">
          <p className="text-center txt-md-bold">{t(item)}</p>
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
