import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import React from "react";
import useQuestionnaireStore, {
  updateQuestionnaireAns,
} from "stores/questionnaire_store";
import { YesNoQuestion } from "utils/StringUtil";

const SaleSystemQuestion = () => {
  const saleSystemIndex = useQuestionnaireStore((state) => state.businessId);
  const updateData = updateQuestionnaireAns();
  const { t } = useTrans();

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="txt-large-bold">
        Do you currently own a point of sale system?
      </h3>
      <SelectedList
        data={YesNoQuestion}
        selectIndex={saleSystemIndex}
        className={" md:grid-cols-2"}
        renderItem={(item, index: number) => {
          return (
            <div className="p-4">
              <p className="text-center txt-md-bold">{t(item)}</p>
            </div>
          );
        }}
        onItemSelected={(index) => {
          updateData({ saleSystemIndex: index });
        }}
      />
    </div>
  );
};

export default SaleSystemQuestion;
