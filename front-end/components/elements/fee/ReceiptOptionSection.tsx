import { POS2Img } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import Image from "next/image";
import React from "react";
import ColorUtils from "utils/ColorUtils";

const ReceiptOptionSection = () => {
  return (
    <div className="flex flex-col xl:flex-row-reverse">
      <div className="flex flex-1 flex-col px-4 py-12 gap-8 md:px-8 md:py-14 xl:p-[120px]">
        <p className="txt-heading-small md:text-5xl md:font-extrabold md:leading-[56px]">
          <span className=" text-success">Various</span> Cash Discount Receipt
          Options
        </p>
        <p className="txt-md md:text-xl">
          Let us help you choose the right receipt layout for your business. Our
          agents can even work with your current POS company in helping
          implement the cash discount program.
        </p>
        <Button
          title="Get Started Now"
          classname="w-fit"
          style={{ background: ColorUtils.success }}
        />
      </div>
      <div className="flex flex-1">
        <Image src={POS2Img} alt="" className="w-full h-hull" />
      </div>
    </div>
  );
};

export default ReceiptOptionSection;
