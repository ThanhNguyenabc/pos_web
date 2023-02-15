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
import { FindPOSModalId } from "components/elements/find_pos_modal/FindPOSModal";
import { RequestDemoModalId } from "components/elements/request_demo_pos/RequestDemoPOS";
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
    <div className="flex flex-col bg-secondary lg:flex-row">
      <HeroSection className="gap-10 text-white text-center md:gap-12 lg:text-left">
        <div className="flex flex-col gap-4 md:gap-6 lg:w-[480px]">
          <p
            className={`txt-heading-medium text-white max-w-3xl md:font-extrabold md:text-6xl md:leading-[68px]`}
          >
            <span className="text-primary">FREE</span> point-of-sale & terminals
            of your choice available!
          </p>
          <p className="txt-md md:text-xl">
            There are many qualified POS systems out there and BestPOS is here
            to help you find the perfect match!
          </p>
        </div>
        <div className="flex flex-col self-center gap-4 md:gap-6 w-full md:w-fit md:flex-row lg:max-w-[480px] lg:self-start">
          <Button
            classname="lg:h-16 lg:w-[200px]"
            title="Get started"
            onClick={openFindPOSModal}
          />
          <Button
            title="Request a Demo"
            classname="lg:h-16"
            style={{ background: "white", color: "black" }}
            rightIcon={<IcRightArrow className="text-xl" />}
            onClick={() => document.getElementById(RequestDemoModalId)?.click()}
          />
        </div>
      </HeroSection>
      <div className="flex lg:pt-[50px] ">
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
            <span className=" text-secondary"> FREE POS system.</span>
          </>
        }
        subCmp={
          <Button
            classname="self-center md:w-[200px] lg:self-start lg:h-16"
            title="Get started"
            onClick={openFindPOSModal}
          />
        }
        classname="lg:flex-row lg:text-start lg:items-start"
      >
        <div className=" flex flex-col gap-4 md:gap-6">
          {ThreeStep.map((item, index) => (
            <div key={`step-${index}`} className="card bg-base-100">
              <div className="card-body px-4 py-3 md:p-6 flex-row gap-6">
                <p className="txt-heading-small text-neutral-400 md:txt-heading-large">
                  {item.step}
                </p>

                <p className="text-left text-neutral-700 md:txt-large-bold">
                  {item.desc}
                </p>
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
          classname="w-full md:w-fit md:h-16"
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
