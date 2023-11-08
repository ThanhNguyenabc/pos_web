import SelectedList from "components/common/SelectedList";
import React from "react";
import useTrans from "hooks/useTrans";
import useQuestionnaireStore, {
  updateQuestionnaireAns,
} from "stores/questionnaire_store";
import { CategoryList } from "utils/routes";

const BusinessQuestion = () => {
  const businessId = useQuestionnaireStore((state) => state.businessId);
  const updateData = updateQuestionnaireAns();

  const { locale } = useTrans();

  return (
    <div className="flex flex-col gap-4">
      <h3 className="txt-large-bold">What best describes your business?</h3>
      <SelectedList
        data={CategoryList}
        selectIndex={businessId}
        className={" md:grid-cols-2 lg:grid-cols-3"}
        renderItem={(item, index: number) => {
          const Icon = item.icon;
          return (
            <div className="flex flex-row items-center p-3 gap-3 md:gap-2 md:flex-col md:justify-center">
              <Icon className="text-4xl" />
              <p className="txt-md-bold md:text-center">{item.title[locale]}</p>
            </div>
          );
        }}
        onItemSelected={(indexes) => {
          updateData({ businessId: indexes[0] });
        }}
      />
    </div>
  );
};

export default BusinessQuestion;
