import SelectedList from "components/common/SelectedList";
import React from "react";
import useFindPOSStore from "stores/findpos_store";
import { CreditCardVolumeData } from "utils/StringUtil";

export const CreditCardVolume = () => {
  const { data, setData, onNext } = useFindPOSStore();
  return (
    <SelectedList
      selectIndex={data?.creditVolumeId}
      data={CreditCardVolumeData}
      itemBuilder={(item, index) => (
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
