import { POS2Img } from "assets/AssetUtil";
import IcRightArrow from "assets/icons/ic_right_arrow.svg";

import IcSoftware from "assets/icons/ic_software.svg";
import IcDashboard from "assets/icons/ic_dashboard.svg";
import IcSupport24 from "assets/icons/ic_support24.svg";
import IcHardware from "assets/icons/ic_hardware.svg";

import { Button } from "components/common/Button";
import ClientSection from "components/common/ClientSection";
import { FooterCTA } from "components/common/FooterCTA";
import HeroSection from "components/common/HeroSection";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import React from "react";
import useSideBar from "stores/useSideBar";
import HeadTag from "components/common/HeadTag";
import { RightSideBarType } from "components/common/RightSideBar";

const FeatureData = [
  {
    icon: IcHardware,
    title: "hardware_integrity",
  },
  {
    icon: IcSupport24,
    title: "pos_support",
  },
  {
    icon: IcDashboard,
    title: "manage_dashboard",
  },
  {
    icon: IcSoftware,
    title: "ease_of_use",
  },
];

const BusinessSteps = [
  {
    step: 1,
    desc: "business_step_1",
  },
  {
    step: 2,
    desc: "business_step_2",
  },
  {
    step: 3,
    desc: "business_step_3",
  },
];

const FreePOS = () => {
  const openSideBar = useSideBar((state) => state.openSideBar);
  const { t } = useTrans();

  const openRequestPOS = () => {
    openSideBar(RightSideBarType.RequestDemo);
  };

  const openFindPOSView = () => openSideBar(RightSideBarType.FindPOS);

  const GetStartedBtn = (
    <Button
      classname="lg:h-16 md:w-[200px]"
      title={t("get_started")}
      onClick={openFindPOSView}
    />
  );

  const RequestDemoBtn = (
    <Button
      title={t("request_a_demo")}
      classname="lg:h-16"
      style={{ background: "white", color: "black" }}
      rightIcon={<IcRightArrow className="text-xl" />}
      onClick={openRequestPOS}
    />
  );

  return (
    <>
      <HeadTag screen="freePOS" />

      <div className="bg-secondary">
        <div className="flex flex-col max-w-[1320px] lg:flex-row xl:ml-[calc((100%-1200px)/2)]">
          <HeroSection className=" flex-col flex-1 gap-4 text-center md:gap-6 lg:text-left lg:py-[80px] xl:py-[120px]">
            <h1
              className={`txt-heading-medium text-white md:txt-heading-xlarge lg:max-w-[520px]`}
            >
              {t("free_pos_title")}
            </h1>
            <h2 className="txt-md-bold text-white md:text-xl lg:max-w-[520px]">
              {t("free_pos_desc")}
            </h2>
            <div className="flex flex-col self-center gap-4 md:gap-8 md:mt-6 w-full md:w-fit md:flex-row lg:self-start">
              {GetStartedBtn}
              {RequestDemoBtn}
            </div>
          </HeroSection>

          <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-square lg:max-h-[600px] self-end">
            <Image
              alt="freepos-image"
              src={POS2Img}
              fill
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </div>

      <HeroSection className="gap-10 md:gap-16">
        <div className="flex flex-col gap-6 text-center lg:max-w-[800px] self-center">
          <p className="txt-heading-small  md:txt-heading-large">
            {t("evaluate_title")}
          </p>
          <p className="txt-md text-neutral-700 md:text-xl">
            {t("evaluate_desc")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 md:gap-16 md:gap-x-8 lg:grid-cols-4 lg:gap-8">
          {FeatureData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`feature-item-${index}`}
                className="flex-1 gap-4 md:gap-6 flex flex-col items-center flex-grow self-stretch"
              >
                <Icon className="text-[80px] md:text-[120px]" />
                <p className="txt-md-bold md:text-xl text-center">
                  {t(item.title)}
                </p>
              </div>
            );
          })}
        </div>
      </HeroSection>

      <div className="flex flex-col bg-neutral-100 w-full">
        <HeroSection className="gap-10 md:gap-16 lg:gap-28 lg:flex-row">
          <div className="flex flex-col gap-6 items-center text-center md:gap-12 lg:text-start lg:items-start lg:max-w-[480px]">
            <p className="txt-heading-small md:txt-heading-large">
              {HTMLReactParser(t("business_steps_title"))}
            </p>
            {GetStartedBtn}
          </div>
          <ul className="flex flex-col gap-4 md:gap-6">
            {BusinessSteps.map((item, index) => (
              <li
                key={`step-${index}`}
                className="card bg-base-100 px-4 py-3 md:p-6 flex-row gap-6"
              >
                <p className="txt-heading-small text-neutral-400 md:txt-heading-large">
                  {item.step}
                </p>

                <p className="text-left text-neutral-700 md:txt-large-bold">
                  {t(item.desc)}
                </p>
              </li>
            ))}
          </ul>
        </HeroSection>
        <div className="container-content relative mx-auto w-full aspect-[4/3]">
          <Image
            src="https://res.cloudinary.com/dgrym3yz3/image/upload/v1681793953/assets/common/pos_vcifjt.png"
            alt="pos-img"
            fill
            sizes="75vw"
          />
        </div>
      </div>
      <ClientSection />
      <FooterCTA
        bgColor="bg-secondary"
        actions={
          <Button
            classname="w-full md:w-[200px] md:h-16"
            title={t("get_started")}
            onClick={openFindPOSView}
          />
        }
        title={<span className=" text-white">{t("free_point_of_sale")}</span>}
      />
    </>
  );
};

export default FreePOS;
