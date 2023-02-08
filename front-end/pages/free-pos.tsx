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
import HeroSection from "components/common/HeroSection";
import FindPOSModal, {
  FindPOSModalId,
} from "components/elements/find_pos_modal/FindPOSModal";
import RequestDemoPOS, {
  RequestDemoModalId,
} from "components/elements/request_demo_pos/RequestDemoPOS";
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

const openFindPOSModal = () => {
  document.getElementById(FindPOSModalId)?.click();
};

const FreePOS = () => (
  <div className="flex-column">
    <div className="flex flex-col flex-1  bg-secondary  lg:flex-row">
      <HeroSection className=" flex-1 lg:w-[55vw] gap-4 text-white text-center md:gap-6 lg:text-left lg:p-0">
        <p
          className={`txt-heading-medium text-white max-w-3xl md:font-extrabold md:text-6xl md:leading-[68px]`}
        >
          <span className="text-primary">FREE</span> point-of-sale & terminals
          of your choice available!
        </p>
        <p className="txt-md md:text-xl">
          There are many qualified POS systems out there and BestPOS is here to
          help you find the perfect match!
        </p>
        <div className="flex flex-col self-center gap-4 md:gap-6 w-full md:w-fit md:flex-row lg:self-start">
          <Button title="Get started" onClick={openFindPOSModal} />
          <Button
            title="Request a Demo"
            style={{ background: "white", color: "black" }}
            rightIcon={<Image height={13} src={IcRightArrow} alt="" />}
            onClick={() => document.getElementById(RequestDemoModalId)?.click()}
          />
        </div>
      </HeroSection>
      <div className="flex flex-1 pt-[50px] ">
        <Image src={POS2Img} alt="" className="aspect-[4/3]" />
      </div>
    </div>

    <Hero
      title="How we evaluate point of sale software"
      subTitle="We take into consideration the most important aspects of choosing the best POS for your business"
    >
      <div className="w-full grid grid-cols-2 gap-10 md:gap-16 lg:grid-cols-4 lg:gap-8">
        {FeatureData.map((item, index) => (
          <div
            key={`feature-item-${index}`}
            className="flex-1 gap-4 md:gap-6 flex flex-col items-center flex-grow self-stretch"
          >
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

    <div className="flex flex-col bg-neutral-100">
      <Hero
        title={
          <>
            With these three easy steps your business may be qualified for a
            <span className=" text-secondary">FREE POS system.</span>
          </>
        }
        subCmp={
          <Button
            classname="self-center md:w-[200px] lg:self-start"
            title="Get started"
            onClick={openFindPOSModal}
          />
        }
        classname="lg:flex-row lg:text-start lg:items-start"
      >
        <div className=" flex flex-col gap-4 md:gap-6">
          {ThreeStep.map((item, index) => (
            <div
              key={`step-${index}`}
              className="card bg-base-100 drop-shadow-lg"
            >
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
      <Image src={BannerImage} alt="" className=" max-h-[900px]" />
    </div>
    <ClientSection />
    <FooterCTA
      className="bg-accent"
      actions={
        <Button
          classname="w-full md:w-fit"
          title="Get Started now"
          onClick={openFindPOSModal}
        />
      }
      title={
        <h3>
          <span className="text-secondary "> FREE</span> point-of-sale &
          terminals of your choice available!
        </h3>
      }
    />
  </div>
);

export default FreePOS;
