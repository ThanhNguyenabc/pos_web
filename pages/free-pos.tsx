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
import HeroSection from "components/common/HeroSection";
import { SideBarType } from "components/SideBar";
import Image from "next/image";
import React from "react";
import useSideBar from "stores/useSideBar";

const FeatureData = [
  {
    image: HardwareImg,
    title: "Hardware integrity",
  },
  {
    image: SupportImg,
    title: "POS Support",
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

const FreePOS = () => {
  const { openSideBar } = useSideBar();

  const openRequestPOS = () => openSideBar(SideBarType.RequestDemo);

  const openFindPOSView = () => openSideBar(SideBarType.FindPOS);

  return (
    <>
      <div className="bg-secondary">
        <div className="flex flex-col max-w-[1320px]  lg:flex-row xl:ml-[calc((100%-1200px)/2)]">
          <HeroSection className="flex-1">
            <div className="flex flex-col gap-4 text-center md:gap-6 lg:text-left lg:max-w-[460px]">
              <p
                className={`txt-heading-medium text-white md:txt-heading-xlarge`}
              >
                FREE point-of-sale & terminals of your choice available!
              </p>
              <p className="txt-md-bold text-white md:text-xl">
                There are many qualified POS systems out there and BestPOS is
                here to help you find the perfect match!
              </p>
              <div className="flex flex-col self-center gap-4 md:gap-8 md:mt-6 w-full md:w-fit md:flex-row lg:self-start">
                <Button
                  classname="lg:h-16 md:w-[200px]"
                  title="Get started"
                  onClick={openFindPOSView}
                />
                <Button
                  title="Request a Demo"
                  classname="lg:h-16"
                  style={{ background: "white", color: "black" }}
                  rightIcon={<IcRightArrow className="text-xl" />}
                  onClick={openRequestPOS}
                />
              </div>
            </div>
          </HeroSection>
          <div className="flex flex-1 lg:mt-10">
            <Image src={POS2Img} alt="" className="aspect-[4/3]" />
          </div>
        </div>
      </div>

      <HeroSection className="gap-10 md:gap-16">
        <div className="flex flex-col gap-6 text-center lg:max-w-[800px] self-center">
          <p className="txt-heading-small  md:txt-heading-large">
            How we evaluate point of sale software
          </p>
          <p className="txt-md text-neutral-700 md:text-xl">
            We take into consideration the most important aspects of choosing
            the best POS for your business
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 md:gap-16 md:gap-x-8 lg:grid-cols-4 lg:gap-8">
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
              <p className="txt-md-bold md:text-xl text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </HeroSection>

      <div className="flex flex-col bg-neutral-100 w-full">
        <HeroSection className="gap-10 md:gap-16 lg:gap-28 lg:flex-row">
          <div className="flex flex-col gap-6 items-center text-center md:gap-12 lg:text-start lg:items-start lg:max-w-[480px]">
            <p className="txt-heading-small md:txt-heading-large">
              With these three easy steps your business may be qualified for a
              <span className=" text-secondary"> FREE POS system.</span>
            </p>
            <Button
              classname="lg:h-16 md:w-[200px]"
              title="Get started"
              onClick={openFindPOSView}
            />
          </div>
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
        </HeroSection>
        <div className="flex max-w-[1200px] mx-auto">
          <Image src={BannerImage} alt="" className="aspect-[4/3]" />
        </div>
      </div>
      <ClientSection />
      <FooterCTA
        bgColor="bg-secondary"
        actions={
          <Button
            classname="w-full md:w-[200px] md:h-16"
            title="Get Started now"
            onClick={openFindPOSView}
          />
        }
        title={
          <h3 className=" text-white">
            FREE point-of-sale & terminals of your choice available!
          </h3>
        }
      />
    </>
  );
};

export default FreePOS;
