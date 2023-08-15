import IcRightArrow from "assets/icons/ic_right_arrow.svg";
import IcService from "assets/icons/ic_service.svg";
import IcATM from "assets/icons/ic_atm.svg";
import IcBackup from "assets/icons/ic_backup.svg";
import IcCredit from "assets/icons/ic_credit.svg";
import IcSolution from "assets/icons/ic_solution.svg";
import IcSaleSystem from "assets/icons/ic_salesystem.svg";
import { Button } from "components/common/Button";
import { FooterCTA } from "components/common/FooterCTA";
import HeroSection from "components/common/HeroSection";
import List from "components/common/List";
import MetricSection from "components/common/MetricSection";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useSideBar from "stores/useSideBar";
import HeadTag from "components/common/HeadTag";
import { RightSideBarType } from "components/common/RightSideBar";
import { AppRoutes } from "utils/routes";

const ServiceData = [
  {
    title: "layer_of_service",
    image: IcService,
  },
  {
    title: "point_of_sale_system",
    image: IcSaleSystem,
  },
  {
    title: "card_processing",
    image: IcCredit,
  },
  {
    title: "atm_terminals",
    image: IcATM,
  },
  {
    title: "it_solutions",
    image: IcSolution,
  },
  {
    title: "internet_failover",
    image: IcBackup,
  },
];
const AboutPage = () => {
  const router = useRouter();
  const { t } = useTrans();
  const openSideBar = useSideBar((state) => state.openSideBar);

  const findPOS = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(AppRoutes.QuestionnairePage);
  };

  const demoPOS = () => {
    openSideBar(RightSideBarType.RequestDemo);
  };

  const FindPOSBtn = (
    <Button title={t("find_your_pos")} onClick={findPOS} classname="md:h-16" />
  );

  const RequestDemoBtn = (
    <Button
      title={t("request_a_demo")}
      classname="md:h-16"
      isOutLine
      rightIcon={<IcRightArrow className="text-xl" />}
      onClick={demoPOS}
    />
  );
  return (
    <>
      <HeadTag />
      <div className="bg-neutral-100">
        <HeroSection className="flex flex-col px-4 py-12 md:px-8 md:py-14">
          <h1 className="txt-heading-medium text-center md:text-start md:txt-heading-xlarge">
            {t("about_us_title")}
          </h1>
          <h2 className="txt-md text-neutral-700 mt-4 mb-10 md:mt-6 md:mb-12 md:text-xl lg:max-w-[800px]">
            {HTMLReactParser(t("about_us_desc"))}
          </h2>
          <div className="flex flex-col gap-4 md:flex-row">
            {FindPOSBtn}
            {RequestDemoBtn}
          </div>
        </HeroSection>
        <div className="container-content relative w-full aspect-video">
          <Image
            src="https://res.cloudinary.com/dgrym3yz3/image/upload/v1681793952/assets/common/about_img_tlfrgd.png"
            alt="about-cover-image"
            fill
          />
        </div>
      </div>

      <HeroSection className=" text-center items-center gap-10 md:gap-12 lg:gap-20">
        <div className="flex flex-col text-center w-full items-center">
          <p className="txt-md-bold text-primary">{t("our_services")}</p>
          <p className="txt-heading-small max-w-xl md:txt-heading-large mt-2">
            {HTMLReactParser(t("unparalleled_sevice"))}
          </p>
          <p className="txt-md max-w-3xl md:text-xl text-neutral-700 my-6 md:mt-8 md:mb-0">
            {t("unparalleled_sevice_desc")}
          </p>

          <Button
            classname="w-fit md:hidden"
            title={t("find_your_pos")}
            onClick={findPOS}
          />
        </div>
        <List
          data={ServiceData}
          classname={"grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-20"}
          itemBuilder={(item, index, selectIndex) => {
            const Icon = item.image;
            return (
              <div
                key={`service-${item.title}`}
                className="flex flex-col gap-4 items-center"
              >
                <Icon className=" text-[80px]" />
                <p className="txt-md-bold md:text-xl">{t(item.title)}</p>
              </div>
            );
          }}
        />
        <Button
          classname="hidden md:flex w-fit md:h-16"
          title={t("find_your_pos")}
          onClick={findPOS}
        />
      </HeroSection>
      <MetricSection />
      <FooterCTA />
    </>
  );
};

export default AboutPage;
