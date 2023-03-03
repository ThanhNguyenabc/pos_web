import { IcRightArrow, BillingImg } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import { RequestDemoModalId } from "components/elements/request_demo_pos/RequestDemoPOS";
import React from "react";
import Image from "next/image";
import ColorUtils from "utils/ColorUtils";
import Badge from "components/common/Badge";
import { FooterCTA } from "components/common/FooterCTA";
import MetricSection from "components/common/MetricSection";
import BreadmeFeatureSection from "components/elements/breadme/FeatureForFee";
import ReceiptOptionSection from "components/elements/breadme/ReceiptOptionSection";
import CommonQuestion from "components/elements/breadme/CommonQuestion";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import HeroSection from "components/common/HeroSection";
import useOpenDemoPOSDialog from "stores/useOpenDemoPOSDialog";

const BreadmePage = () => {
  const router = useRouter();
  const { toogleOpen: toogleDialog } = useOpenDemoPOSDialog();

  const navigateToBreadmeQuestion = () => {
    router.push(AppRoutes.BreadmeQuestionPage);
  };

  return (
    <>
      <div className="flex flex-col bg-green-100 lg:flex-row">
        <div className="flex flex-col max-w-[1320px] lg:h-[640px] lg:flex-row xl:ml-[calc((100%-1200px)/2)]">
          <HeroSection className="flex-1">
            <div className="flex flex-col gap-6 text-center lg:text-left lg:max-w-[500px]">
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <Badge>Breadme partnership</Badge>
                <p
                  className={`txt-heading-medium max-w-3xl md:txt-heading-xlarge`}
                >
                  <span className=" text-success">0%</span> Processing Fees POS
                  System
                </p>
              </div>

              <p className="txt-md-bold text-neutral-700 md:text-xl">
                Boost your business&apos; revenue and incentivize cash payments.
              </p>
              <div className="flex flex-col self-center gap-4 md:gap-6 mt:mt-6 w-full md:w-fit md:flex-row lg:self-start">
                <Button
                  title="Get Started Now"
                  classname="md:h-16"
                  style={{ background: ColorUtils.success }}
                  onClick={navigateToBreadmeQuestion}
                />
                <Button
                  classname=" md:h-16"
                  style={{
                    background: "white",
                    color: "inherit",
                  }}
                  title="Request a Demo"
                  onClick={toogleDialog}
                />
              </div>
            </div>
          </HeroSection>
          <div className="flex flex-1">
            <Image src={BillingImg} alt="" className="aspect-[4/3]" />
          </div>
        </div>
      </div>

      <div className="bg-neutral-100">
        <HeroSection className=" py-6 gap-6 md:py-6 md:gap-8 md:flex-row lg:py-6 md:justify-between md:items-center">
          <p className="txt-md md:text-xl">
            Learn why thousands of businesses are implementing the Cash Discount
            Programs
          </p>
          <Button
            title="Contact US Today!"
            isOutLine
            rightIcon={<IcRightArrow className="text-xl" />}
            onClick={() => router.push(AppRoutes.ContactPage)}
          />
        </HeroSection>
      </div>

      <BreadmeFeatureSection />
      <ReceiptOptionSection />
      <MetricSection titleColor="text-success" />
      <CommonQuestion />
      <FooterCTA
        bgColor="bg-green-100"
        actions={
          <Button
            classname="md:h-16"
            title="Get Started Now"
            style={{ background: ColorUtils.success }}
            onClick={navigateToBreadmeQuestion}
          />
        }
        title={
          <h3>
            Is the
            <span className=" text-success "> Cash Discount Program</span> Right
            For Your Business?
          </h3>
        }
      />
    </>
  );
};

export default BreadmePage;
