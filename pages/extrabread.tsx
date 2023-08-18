import IcRightArrow from "assets/icons/ic_right_arrow.svg";

import { Button } from "components/common/Button";
import React from "react";
import Image from "next/image";
import ColorUtils from "utils/ColorUtils";
import Badge from "components/common/Badge";
import MetricSection from "components/common/MetricSection";
import BreadmeFeatureSection from "components/elements/breadme/FeatureForFee";
import ReceiptOptionSection from "components/elements/breadme/ReceiptOptionSection";
import CommonQuestion from "components/elements/breadme/CommonQuestion";
import { useRouter } from "next/router";
import HeroSection from "components/common/HeroSection";
import useSideBar from "stores/useSideBar";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";
import Box from "components/common/Box";
import HeadTag from "components/common/HeadTag";
import { RightSideBarType } from "components/common/RightSideBar";
import { AppRoutes } from "utils/routes";

const BreadmePage = () => {
  const router = useRouter();
  const { t } = useTrans();
  const openSideBar = useSideBar((state) => state.openSideBar);

  const navigateToBreadmeQuestion = () => {
    router.push(AppRoutes.BreadmeQuestionPage);
  };

  const GetStartNow = (
    <Button
      title={t("get_start_now")}
      classname="md:h-16"
      style={{ background: ColorUtils.success }}
      onClick={navigateToBreadmeQuestion}
    />
  );

  return (
    <>
      <HeadTag screen="breadme" />
      <div className="bg-green-100">
        <div className="flex flex-col max-w-[1320px] lg:h-[640px] lg:flex-row xl:ml-[calc((100%-1200px)/2)]">
          <HeroSection className="flex-1 gap-6 text-center lg:text-left lg:py-[80px] xl:py-[120px] my-auto">
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <Badge>{t("breadme_partnership")}</Badge>
              <h1
                className={`txt-heading-medium max-w-3xl md:txt-heading-xlarge lg:max-w-[480px]`}
              >
                {HTMLReactParser(t("breadme_title"))}
              </h1>
            </div>

            <h2 className="txt-md-bold text-neutral-700 md:text-xl lg:max-w-[480px]">
              {t("breadme_desc")}
            </h2>
            <div className="flex flex-col self-center gap-4 md:gap-6 mt:mt-6 w-full md:w-fit md:flex-row lg:self-start">
              {GetStartNow}
              <Button
                classname=" md:h-16"
                style={{
                  background: "white",
                  color: "inherit",
                }}
                title={t("request_a_demo")}
                onClick={() => openSideBar(RightSideBarType.RequestDemo)}
              />
            </div>
          </HeroSection>

          <div className="flex flex-1 relative w-full aspect-[4/3] lg:aspect-square lg:max-h-[600px] self-end">
            <Image
              alt="billing-image"
              src="https://res.cloudinary.com/dgrym3yz3/image/upload/v1681793952/assets/common/billing_m2qiow.png"
              fill
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-neutral-100">
        <Box className="max-w-[1440px] mx-auto py-6 gap-6 md:py-6 justify-center md:items-center md:gap-6 md:flex-row lg:py-6">
          <p className="txt-md md:text-xl">{t("breadme_contact_message")}</p>
          <Button
            title={t("contact_us_today")}
            isOutLine
            rightIcon={<IcRightArrow className="text-xl" />}
            onClick={() => router.push(AppRoutes.ContactPage)}
          />
        </Box>
      </div>

      <BreadmeFeatureSection />
      <ReceiptOptionSection />
      <MetricSection titleColor="text-success" />
      <CommonQuestion />
    </>
  );
};

export default BreadmePage;
