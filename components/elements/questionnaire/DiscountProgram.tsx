import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import React from "react";
import useQuestionnaireStore, {
  updateQuestionnaireAns,
} from "stores/questionnaire_store";
import { YesNoQuestion } from "utils/StringUtil";
import IcInfo from "assets/icons/ic_info.svg";

export const DiscountQuestion = [...YesNoQuestion, "i_dont_know"];

const DiscountProgram = () => {
  const handHeldIndex = useQuestionnaireStore((state) => state.businessId);
  const updateData = updateQuestionnaireAns();

  const { t } = useTrans();

  return (
    <div className=" flex flex-col gap-4 ">
      <div className=" flex items-center gap-2">
        <h3 className="txt-large-bold">
          Are you using a Zero Fee credit card processing solution?
        </h3>
        <div className="relative group flex pr-8">
          <IcInfo className="hidden text-2xl lg:flex" />
          <div
            className="absolute right-0 invisible
      -top-[170px] bg-white w-96 border 
      rounded-md border-neutral-300 p-2 
      shadow-md group-hover:visible"
          >
            Zero-fee processing or “no cost” processing is a processing solution
            where credit card processing fees are passed to your customers
            automatically. Instead of your business paying the processing costs,
            your customers will pay those fees.
          </div>
        </div>
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
        onItemSelected={(indexes) => {
          updateData({
            discountIndex: indexes[0],
          });
        }}
      />
    </div>
  );
};

export default DiscountProgram;
