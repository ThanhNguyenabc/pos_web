import SelectedList from "components/common/SelectedList";
import React, { useEffect } from "react";
import useFindPOSStore from "stores/findpos_store";
import { CreditCardVolumeData } from "./PersonalInfo";
import { sendGoogleEvent } from "utils/tracking_utils";

export const CreditCardVolume = () => {
  const { data, setData, onNext } = useFindPOSStore();

  useEffect(() => {
    sendGoogleEvent("get_started_cc_volume");
  }, []);

  return (
    <SelectedList
      selectIndex={data?.creditVolumeId}
      data={CreditCardVolumeData}
      renderItem={(item, index) => (
        <div className="p-4 border-neutral-300 ">
          <p className="text-center txt-md-bold md:text-xl">{item}</p>
        </div>
      )}
      onItemSelected={(selectIndex) => {
        setData({
          ...data,
          creditVolumeId: selectIndex,
        });
        onNext();
      }}
    />
  );
};
