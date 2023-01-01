import { IcRightArrow, BillingImg } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import { RequestDemoModalId } from "components/elements/request_demo_pos/RequestDemoPOS";
import React from "react";
import Image from "next/image";
import ColorUtils from "utils/ColorUtils";
import Badge from "components/common/Badge";
import { FooterCTA } from "components/common/FooterCTA";
import MetricSection from "components/common/MetricSection";
import FeatureForFee from "components/elements/fee/FeatureForFee";
import ReceiptOptionSection from "components/elements/fee/ReceiptOptionSection";
import CommonQuestion from "components/elements/fee/CommonQuestion";
import { useRouter } from "next/router";
import { Contact } from "utils/routes";

const ProcessingFee = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-green-100 xl:flex-row">
        <div className="flex flex-col flex-1 px-4 py-12 gap-10 items-center md:px-8 md:py-14 xl:items-start xl:p-[120px]">
          <div className=" flex flex-col gap-6 text-center items-center xl:items-start xl:text-start">
            <Badge>Breadme partnership</Badge>
            <p
              className={`txt-heading-medium max-w-3xl md:font-extrabold md:text-6xl md:leading-[68px]`}
            >
              <span className=" text-success">0%</span> Processing Fees POS
              System
            </p>
            <p className="txt-md text-neutral-700 md:text-xl">
              Boost your business&apos; revenue and incentivize cash payments.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 w-full md:w-fit">
            <Button
              title="Get Started Now"
              style={{ background: ColorUtils.success }}
              onClick={() =>
                document.getElementById(RequestDemoModalId)?.click()
              }
            />
            <Button
              title="Request a Demo"
              isOutLine
              onClick={() =>
                document.getElementById(RequestDemoModalId)?.click()
              }
            />
          </div>
        </div>
        <div className="flex-1 xl:mt-24">
          <Image src={BillingImg} alt="" className="w-full h-full " />
        </div>
      </div>
      <div className="flex flex-col bg-neutral-100 px-4 py-6 gap-6 items-center justify-between md:flex-row md:px-8 xl:px-[120px]">
        <p className="txt-md md:text-xl">
          Learn why thousands of businesses are implementing the Cash Discount
          Programs
        </p>
        <Button
          title="Contact US Today!"
          isOutLine
          rightIcon={<Image src={IcRightArrow} alt="icon" />}
          onClick={() => router.push(Contact)}
        />
      </div>
      <FeatureForFee />
      <ReceiptOptionSection />
      <MetricSection
        heading="What sets us apart from other companies?"
        titleColor="text-success"
        itemSection={[
          { title: "30+", content: "Over 30 years experience" },
          { title: "1000+", content: "Over 1000 Clients" },
          { title: "50", content: "Available in all 50 states" },
        ]}
      />
      <CommonQuestion />
      <FooterCTA
        background="bg-green-100"
        actions={
          <Button
            title="Get Started Now"
            style={{ background: ColorUtils.success }}
            onClick={() => {}}
          />
        }
        title={
          <h3>
            Is the
            <span className=" text-success "> Cash Discount Program</span>Right
            For Your Business?
          </h3>
        }
      />
    </div>
  );
};

export default ProcessingFee;
