import SelectedList from "components/common/SelectedList";
import React from "react";
import { CreditCardVolumeData } from "utils/StringUtil";
import { FindPOSModalContext } from "./FindPOSModal";


export const CreditCardVolume = () => {
  const value = React.useContext(FindPOSModalContext);
  return (
    <SelectedList
      selectIndex={value.data?.creditVolumeId}
      data={CreditCardVolumeData}
      itemBuilder={(item, index) => (
        <div className="p-4 border-neutral-300 ">
          <p className="text-center txt-md-bold md:text-xl">{item}</p>
        </div>
      )}
      onItemSelected={(selectIndex) => {
        value.setData({
          ...value.data,
          creditVolumeId: selectIndex,
        });
      }}
    />
  );
};
