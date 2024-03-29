import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import { BreadmeContext } from "pages/bread-me-questions";
import React, { useEffect } from "react";
import { YesNoQuestion } from "utils/StringUtil";
import { sendGoogleEvent } from "utils/tracking_utils";

const BreadmeDiscountQuestion = () => {
  const value = React.useContext(BreadmeContext);
  const { t } = useTrans();

  useEffect(() => {
    sendGoogleEvent("breadme_discount_program");
  }, []);

  return (
    <SelectedList
      selectIndex={value.questionData?.isDiscountIndex}
      data={YesNoQuestion}
      selectedClassName="border-success"
      renderItem={(item, index) => (
        <p
          key={`breame-discount-item-${index}`}
          className="text-center txt-md-bold p-4 md:text-xl"
        >
          {t(item)}
        </p>
      )}
      onItemSelected={(selectIndex) => {
        value.setQuestionData({
          ...value.questionData,
          isDiscountIndex: selectIndex[0],
        });
      }}
    />
  );
};

export default BreadmeDiscountQuestion;
