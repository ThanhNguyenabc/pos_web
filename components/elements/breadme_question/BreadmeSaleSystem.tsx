import IcRightArrow from "assets/icons/ic_right_arrow.svg";

import { Button } from "components/common/Button";
import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import { BreadmeContext } from "pages/bread-me-questions";
import React, { useEffect, useState } from "react";
import ColorUtils from "utils/ColorUtils";
import { sendGoogleEvent } from "utils/tracking_utils";

const BreadmeSaleSystemTrans = {
  otherPlaceHolder: {
    [Locale.en]: "enter name of system",
    [Locale.es]: "ingrese un nombre de sistema",
  },
};

export const SaleSystemItems = [
  {
    [Locale.en]: "Revel System",
    [Locale.es]: "Sistema de deleite",
  },
  {
    [Locale.en]: "Clover",
    [Locale.es]: "Trébol",
  },
  {
    [Locale.en]: "Exatouch",
    [Locale.es]: "Exatouch",
  },
  {
    [Locale.en]: "Lightspeed",
    [Locale.es]: "Velocidad de la luz",
  },
  {
    [Locale.en]: "Aldelo Express",
    [Locale.es]: "Aldelo Express",
  },
  {
    [Locale.en]: "Other",
    [Locale.es]: "Otro",
  },
];

const BreadmeSaleSystem = () => {
  const { t, locale } = useTrans();
  const context = React.useContext(BreadmeContext);
  const [cIndex, setCurrentIndex] = useState(-1);
  const [otherSystem, setOtherSystem] = useState(
    context.questionData?.otherSaleSystem ?? ""
  );

  useEffect(() => {
    sendGoogleEvent("breadme_pos_using");
  }, []);

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
        data={SaleSystemItems}
        itemListClassName="h-16"
        itemBuilder={(item, index) => {
          if (index == SaleSystemItems.length - 1) {
            return (
              <div className="flex flex-row px-4 my-auto w-full h-full items-center gap-4">
                <p className="txt-md-bold">{item[locale]}</p>
                <input
                  type="text"
                  value={otherSystem}
                  placeholder={BreadmeSaleSystemTrans.otherPlaceHolder[locale]}
                  className="input input-bordered w-full my-auto h-10"
                  onChange={onChange}
                />
              </div>
            );
          }
          return (
            <div className="flex justify-center h-full">
              <p className="px-4 txt-md-bold my-auto w-full">{item[locale]}</p>
            </div>
          );
        }}
        onItemSelected={setCurrentIndex}
      />
      <Button
        classname="mt-[148px]"
        title={t("continue")}
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
