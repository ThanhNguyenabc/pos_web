import Box from "components/common/Box";
import IconButton from "components/common/IconButton";
import React from "react";
import { YesNoQuestion } from "utils/StringUtil";
import IcClose from "assets/icons/ic_close.svg";
import { Button } from "components/common/Button";
import useQuestionnaireStore from "stores/questionnaire_store";
import { useRouter } from "next/router";
import BusinessQuestion from "./BusinessQuestion";
import SaleSystemQuestion from "./SaleSystemQuestion";
import StationQuestion, { StationData } from "./StationQuestion";
import HandHeldQuestion, { HandHeldData } from "./HandheldQuestion";
import useSideBar from "stores/useSideBar";
import { AppRoutes, CategoryList } from "utils/routes";
import DiscountProgram, { DiscountQuestion } from "./DiscountProgram";

const QuestionnaireForm = () => {
  const router = useRouter();
  const closeSideBar = useSideBar((state) => state.closeSideBar);

  const questionnaireStore = useQuestionnaireStore((state) => state);

  const goToSuggestPos = () => {
    router.replace(
      {
        pathname: AppRoutes.SuggestPOSPage,
        query: {
          access: true,
          business: CategoryList[questionnaireStore.businessId].type,
          salesystem: YesNoQuestion[questionnaireStore.saleSystemIndex],
          discount:
            questionnaireStore.discountIndex === DiscountQuestion.length - 1
              ? "_"
              : DiscountQuestion[questionnaireStore.discountIndex],
          stations: StationData[questionnaireStore.numberStationIndex].content,
          handheld:
            questionnaireStore.handHeldIndex != undefined
              ? HandHeldData[questionnaireStore.handHeldIndex].quantity
              : "_",
        },
      },
      AppRoutes.SuggestPOSPage
    );
    closeSideBar();
  };

  return (
    <Box className="flex flex-col gap-6 py-8 md:py-10 md:gap-10">
      <IconButton onClick={closeSideBar} classname="md:w-10 md:h-10">
        <IcClose className="text-base" />
      </IconButton>
      <p className="txt-md-bold p-4 bg-accent  rounded-2xl -mt-4">
        Our experts at BestPOS will recommend the Best POS systems for your
        business needs.
      </p>
      <BusinessQuestion />
      <SaleSystemQuestion />
      <StationQuestion />

      <HandHeldQuestion />
      <DiscountProgram />
      <Button
        title="Get Results"
        classname="w-[200px] self-center"
        onClick={goToSuggestPos}
      />
    </Box>
  );
};

export default QuestionnaireForm;
