import SelectedList from "components/common/SelectedList";
import React from "react";
import { FindPOSModalContext } from "./FindPOSModal";
const CreditCardVolumeData = ["$10K - $49k", "$50K - $149k", "$150+"];

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
