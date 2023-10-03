import { BreadMeImg } from "assets/AssetUtil";
import useTrans from "hooks/useTrans";
import { useRouter } from "next/router";
import React from "react";
import ColorUtils from "utils/ColorUtils";
import { AppRoutes } from "utils/routes";
import PricingBtn from "./PricingBtn";

export const BreadMeBtn = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { t } = useTrans();
  return (
    <PricingBtn
      className={className}
      logo={BreadMeImg}
      color={ColorUtils.success}
      title={t("get_pos")}
      onClick={() => router.push(AppRoutes.BreadmeQuestionPage)}
    >
      <span className="text-success">{t("free")}</span>
    </PricingBtn>
  );
};
