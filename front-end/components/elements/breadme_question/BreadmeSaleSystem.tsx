import { IcRightArrow } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import SelectedList from "components/common/SelectedList";
import Image from "next/image";
import { BreadmeContext } from "pages/bread-me-questions";
import React, { ChangeEvent, useRef, useState } from "react";
import ColorUtils from "utils/ColorUtils";
import { SaleSystem } from "utils/StringUtil";

const BreadmeSaleSystem = () => {
  const context = React.useContext(BreadmeContext);
  const [cIndex, setCurrentIndex] = useState(-1);
  const [otherSystem, setOtherSystem] = useState(
    context.questionData?.otherSaleSystem ?? ""
  );

  const onNext = () => {
    context.setQuestionData({
      ...context.questionData,
      saleSystemIndex: cIndex,
      otherSaleSystem: otherSystem || "Other",
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setOtherSystem(newValue);
  };

  return (
    <div className="flex flex-col">
      <SelectedList
        selectIndex={context.questionData?.saleSystemIndex}
        data={SaleSystem}
        selectBorderColor="border-success"
        itemListClassName="h-16 active:border-success"
        itemBuilder={(item, index) => {
          if (index == SaleSystem.length - 1) {
            return (
              <div className="flex flex-row px-4 my-auto w-full items-center gap-4">
                <p className="txt-md-bold">{item}</p>
                <input
                  type="text"
                  value={otherSystem}
                  placeholder="enter name of system"
                  className="input input-bordered w-full my-auto h-10"
                  onChange={onChange}
                />
              </div>
            );
          }
          return <p className="px-4 txt-md-bold my-auto w-full">{item}</p>;
        }}
        onItemSelected={setCurrentIndex}
      />
      <Button
        classname="mt-[148px]"
        title="Continue"
        style={{
          background: ColorUtils.success,
        }}
        rightIcon={<IcRightArrow className="text-white" />}
        onClick={onNext}
      />
    </div>
  );
};

export default BreadmeSaleSystem;
