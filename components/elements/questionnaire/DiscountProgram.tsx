import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import React from "react";
import useQuestionnaireStore, {
  updateQuestionnaireAns,
} from "stores/questionnaire_store";
import { YesNoQuestion } from "utils/StringUtil";
import IcQuestion from "assets/icons/ic_question.svg";

export const DiscountQuestion = [...YesNoQuestion, "i_dont_know"];

const DiscountProgram = () => {
  const handHeldIndex = useQuestionnaireStore((state) => state.businessId);
  const updateData = updateQuestionnaireAns();

  const { t } = useTrans();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 ">
        <h3 className="txt-large-bold">
          Are you using a Zero Fee credit card processing solution?
        </h3>
      </div>

      <SelectedList
        data={DiscountQuestion}
        selectIndex={handHeldIndex}
        className={"md:grid-cols-2 lg:grid-cols-3"}
        renderItem={(item, index: number) => {
          return (
            <div className="p-4">
              <p className="text-center txt-md-bold">{t(item)}</p>
            </div>
          );
        }}
        onItemSelected={(index) => {
          updateData({
            discountIndex: index,
          });
        }}
      />
    </div>
  );
};

export default DiscountProgram;
