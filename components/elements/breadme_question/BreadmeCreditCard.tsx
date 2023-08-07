import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import { BreadmeContext } from "pages/bread-me-questions";
import React, { useEffect } from "react";
import { sendGoogleEvent } from "utils/tracking_utils";

export const BreadmeCreditCardVolumeData = [
  "$25K - $50K",
  "$50K - $100K",
  "$100K - $150K",
  "$150K+",
];

const BreadmeCreditCard = () => {
  const { t } = useTrans();
  const value = React.useContext(BreadmeContext);

  useEffect(() => {
    sendGoogleEvent("breadme_cc_volume");
  }, []);

  return (
    <SelectedList
      selectIndex={value.questionData?.creditCardVolumnId}
      data={BreadmeCreditCardVolumeData}
      selectBorderColor="border-success"
      renderItem={(item, index) => (
        <p className="text-center txt-md-bold md:text-xl p-4">
          {item} {t("per_month")}
        </p>
      )}
      onItemSelected={(selectIndex) => {
        value.setQuestionData({
          ...value.questionData,
          creditCardVolumnId: selectIndex,
        });
      }}
    />
  );
};

export default BreadmeCreditCard;
