import {
  IcRightArrow,
  BannerImage,
  HardwareImg,
  EasyUsingImg,
  SupportImg,
  DashboardImg,
  POS2Img,
} from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ClientSection from "components/common/ClientSection";
import { FooterCTA } from "components/common/FooterCTA";
import Hero from "components/common/Hero";
import MetricSection from "components/common/MetricSection";
import Image from "next/image";

import React from "react";
const FeatureData = [
  {
    image: HardwareImg,
    title: "Hardware integrity",
  },
  {
    image: SupportImg,
    title: "Hardware integrity",
  },
  {
    image: DashboardImg,
    title: "Management Dashboard",
  },
  {
    image: EasyUsingImg,
    title: "Ease of use software",
  },
];

const ThreeStep = [
  {
    step: 1,
    desc: "Merchant is willing to go on the Cash Discount Program which leads to zero processing fees!",
  },
  {
    step: 2,
    desc: "Qualify a review of the merchant’s most recent three month credit card processing statements",
  },
  {
    step: 3,
    desc: "Merchant’s Credit Card Processing Application (must apply with our recommended processing company)",
  },
];

const FreePOS = () => (
  <div className="flex-column">
    <div className="flex flex-col lg:flex-row bg-secondary lg:pt-24">
      <div className="flex flex-1 flex-col justify-center items-center text-white px-4 pt-10 ">
        <div className="lg:max-w-lg">
          <p
            className={`txt-heading-large md:txt-heading-xlarge text-center lg:text-start text-white`}
          >
            <span className="text-primary">FREE</span> point-of-sale & terminals
            of your choice available!
          </p>
          <p className="txt-md-bold text-center pt-4 lg:text-start mb-6 md:txt-large-bold  md:mt-6 md:mb-12">
            Speak with a consultant today to find the best POS for your business
          </p>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mb-10">
            <Button
              classname="w-full md:w-fit"
              title="Get started"
              type="SOLID_MEDIUM"
              background={`bg-primary`}
            />
            <Button
              classname="w-full md:w-fit"
              title="Request a Demo"
              type="SOLID_MEDIUM"
              rightIcon={<Image height={13} src={IcRightArrow} alt="" />}
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image src={POS2Img} alt="" className="w-full" />
      </div>
    </div>
    <Hero
      title="How we evaluate point of sale software"
      subTitle="We take into consideration the most important aspects of choosing the best POS for your business"
    >
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 text-neutral-900 gap-10 ">
        {FeatureData.map((item) => (
          <div className="flex-1 gap-4 md:gap-6 flex flex-col items-center flex-grow self-stretch">
            <Image
              src={item.image}
              alt=""
              className=" w-20 h-20 md:w-[120px] md:h-[120px]"
            />
            <p className="txt-md-bold md:text-xl">{item.title}</p>
          </div>
        ))}
      </div>
    </Hero>

    <div className=" bg-neutral-100">
      <Hero
        title={`With these three easy steps your business may be qualified for a FREE POS system.`}
        subCmp={
          <Button
            classname="w-fit self-center md:self-start"
            title="Get started"
            type="SOLID_MEDIUM"
            background={`bg-primary`}
          />
        }
        classname="md:flex-row md:text-start md:items-start"
      >
        <div className=" flex flex-col gap-4 md:gap-6 ">
          {ThreeStep.map((item, index) => (
            <div className="card bg-base-100">
              <div className="card-body p-4 flex-row txt-sm md:text-xl gap-6">
                <div
                  className={`[box-shadow:0px_0px_0px_1px_rgba(208,_213,_221,_1)_inset] [box-shadow-width:1px] 
              px-4 py-2.5 w-10 h-10 mt-1 rounded-lg font-semibold  text-neutral-900`}
                >
                  <p className="flex-1 leading-5">{item.step}</p>
                </div>
                <p className="text-left">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Hero>
      <Image src={BannerImage} alt="" className=" max-h-[995px]" />
    </div>
    <ClientSection />

    <FooterCTA
      background="bg-accent"
      actions={
        <>
          <Button
            classname="w-full md:w-fit"
            title="Get Started now"
            type="SOLID_MEDIUM"
            background={`bg-primary`}
          />
        </>
      }
      title={
        <>
          <h3>
            <span className="text-secondary "> FREE</span> point-of-sale &
            terminals of your choice available!
          </h3>
        </>
      }
    />
  </div>
);

export default FreePOS;
