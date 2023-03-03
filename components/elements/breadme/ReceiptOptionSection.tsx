import { POS2Img } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import HeroSection from "components/common/HeroSection";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ColorUtils from "utils/ColorUtils";
import AppRoutes from "utils/routes";

const ReceiptOptionSection = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col mx-auto max-w-[1200px] lg:flex-row-reverse lg:gap-[120px]">
      <HeroSection className="flex-1 gap-8 ">
        <p className="txt-heading-small md:txt-heading-large">
          <span className=" text-success">Various</span> Cash Discount Receipt
          Options
        </p>
        <p className="txt-md text-neutral-700 md:text-xl">
          Let us help you choose the right receipt layout for your business. Our
          agents can even work with your current POS company in helping
          implement the cash discount program.
        </p>
        <Button
          title="Get Started Now"
          classname="w-fit"
          style={{ background: ColorUtils.success }}
          onClick={() => router.push(AppRoutes.BreadmeQuestionPage)}
        />
      </HeroSection>
      <div className="flex flex-1">
        <Image src={POS2Img} alt="" className="w-full h-hull" />
      </div>
    </div>
  );
};

export default ReceiptOptionSection;
