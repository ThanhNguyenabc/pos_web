import SelectedList from "components/common/SelectedList";
import React, { useEffect } from "react";
import { CategoryList } from "utils/StringUtil";
import useTrans from "hooks/useTrans";
import useQuestionnaireStore, {
  updateQuestionnaireAns,
} from "stores/questionnaire_store";

const BusinessQuestion = () => {
  const businessId = useQuestionnaireStore((state) => state.businessId);
  const updateData = updateQuestionnaireAns();

  const { locale } = useTrans();

  useEffect(() => {
    // sendGoogleEvent("find_pos_business_type");
  }, []);

  console.log("business form");

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
        onItemSelected={(index) => {
          updateData({ businessId: index });
        }}
      />
    </div>
  );
};

export default BusinessQuestion;
