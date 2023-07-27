import React, { useEffect } from "react";
import SelectedList from "../../common/SelectedList";
import Image from "next/image";
import { YesNoQuestion } from "utils/StringUtil";
import useQuestionnaireStore from "stores/questionnaire_store";
import { HandHeld1Img, HandHeld2Img, HandHeld4Img } from "assets/AssetUtil";
import useTrans from "hooks/useTrans";
import { sendGoogleEvent } from "utils/tracking_utils";

export const HandHeldData = [
  {
    icon: HandHeld1Img,
    title: "1",
    quantity: "1",
  },
  {
    icon: HandHeld2Img,
    title: "2-3",
    quantity: "2-3",
  },
  {
    icon: HandHeld4Img,
    title: "4+",
    quantity: "4+",
  },
  {
    title: "I don't have any",
    quantity: "0",
  },
];

const HandHeldQuestion = () => {
  const questionnaireStore = useQuestionnaireStore();
  const data = questionnaireStore.data;
  const { t } = useTrans();

  useEffect(() => {
    sendGoogleEvent("find_pos_handhelds_require");
  }, []);

  return (
    <SelectedList
      selectIndex={questionnaireStore.data?.handHeldIndex}
      classname={"md:grid-cols-3 col-span-1"}
      itemListClassName={(index) =>
        index == HandHeldData.length - 1 ? "md:col-span-3 mt-6" : ""
      }
      data={HandHeldData}
      itemBuilder={(item, index: number) => {
        const itemStyle =
          index === HandHeldData.length - 1 ? "md:p-3" : "md:p-6";
        return (
          <div
            className={`card-body flex flex-row items-center p-4 gap-4 md:flex-col ${itemStyle}`}
          >
            {item.icon && (
              <div className="relative w-16 md:w-[100px] aspect-[4/3]">
                <Image src={item.icon} alt="handheld" fill sizes="95vw" />
              </div>
            )}
            <p className="txt-md-bold md:text-center">
              {`${item.title} ${t("handhelds")}`}
            </p>
          </div>
        );
      }}
      onItemSelected={(selectedIndex) => {
        let isHaveSaleSystem = YesNoQuestion[data.saleSystemIndex] == "yes";
        let nextNumberPage = 1;

        if (!isHaveSaleSystem) {
          nextNumberPage = 2;
        }
        questionnaireStore.setQuestionData(
          {
            ...questionnaireStore.data,
            handHeldIndex: selectedIndex,
          },
          nextNumberPage
        );
      }}
    />
  );
};

export default HandHeldQuestion;
