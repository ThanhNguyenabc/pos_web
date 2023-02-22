import {
  AboutCoverImg,
  ATMImg,
  CloudSystemImg,
  CreditCardImg,
  ExtraServiceImg,
  IcRightArrow,
  ITSolutionImg,
  POSAboutImg,
} from "assets/AssetUtil";
import { Button } from "components/common/Button";
import { FooterCTA } from "components/common/FooterCTA";
import HeroSection from "components/common/HeroSection";
import List from "components/common/List";
import MetricSection from "components/common/MetricSection";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useOpenDemoPOSDialog from "stores/useOpenDemoPOSDialog";
import AppRoutes from "utils/routes";

const ServiceData = [
  {
    title: "Extra Layer of Service",
    image: ExtraServiceImg,
  },
  {
    title: "Point of Sale Systems",
    image: POSAboutImg,
  },
  {
    title: "Credit / Debit/ Gift Card Processing",
    image: CreditCardImg,
  },
  {
    title: "ATM Terminals",
    image: ATMImg,
  },
  {
    title: "IT Solutions (Network/PC Fixes)",
    image: ITSolutionImg,
  },
  {
    title: "Internet Failover Using Cellular",
    image: CloudSystemImg,
  },
];
const AboutPage = () => {
  const router = useRouter();
  const { toogleOpen } = useOpenDemoPOSDialog();

  const findPOS = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(AppRoutes.QuestionnairePage);
  };

  const getPOSFree = () => {
    toogleOpen();
  };

  const goToContactPage = () => {
    router.push(AppRoutes.ContactPage);
  };

  return (
    <>
      <div className=" bg-neutral-100">
        <HeroSection className="flex flex-col px-4 py-12 md:px-8 md:py-14">
          <p className="txt-heading-medium text-center md:text-start md:font-extrabold md:text-6xl md:leading-[68px]">
            About Us
          </p>
          <p className="txt-md text-neutral-700 mt-4 mb-10 md:mt-6 md:mb-12 md:text-xl lg:max-w-[800px]">
            Best POS offers a wide variety of products and services to assist
            our merchants, as well as industry-tailored options that few
            competitors can (or will) match. <br /> <br /> To complement our
            services, and to make processing easier and affordable for our
            customers, we provide cutting-edge credit card processing equipment,
            terminals, POS systems and software &#45; free of charge.
            <br /> <br />
            If you&#39;re not well-versed in technology, dealing with software,
            hardware, and networks can be quite challenging. It&#39;s best to work
            with a POS specialist and that&#39;s what BestPOS is here for. The
            variety of products available on the market can be overwhelming,
            making research very confusing. The POS industry is highly
            competitive, with hundreds of products available, making it
            challenging to navigate. With our expertise and consulting, we will
            find you the point-of-sale system best suited for you and your
            business.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button
              title="Find your POS"
              onClick={findPOS}
              classname="md:h-16"
            />
            <Button
              title="Request A Demo"
              classname="md:h-16"
              isOutLine
              rightIcon={<IcRightArrow className="text-xl" />}
              onClick={getPOSFree}
            />
            <Button
              title="Contact Us"
              classname="md:h-16"
              isOutLine
              rightIcon={<IcRightArrow className=" text-xl" />}
              onClick={goToContactPage}
            />
          </div>
        </HeroSection>

        <Image
          src={AboutCoverImg}
          alt="about-cover-image"
          className="lg:bg-neutral-100  object-cover"
        />
      </div>

      <HeroSection className=" text-center items-center gap-10 md:gap-12 lg:gap-20">
        <div className="flex flex-col text-center w-full items-center">
          <p className="txt-md-bold text-primary">Our Services</p>
          <p className="txt-heading-small max-w-xl md:txt-heading-large mt-2">
            <span className=" text-secondary">Unparalleled Service</span> via
            E-mail & Phone.
          </p>
          <p className="txt-md max-w-3xl md:text-xl text-neutral-700 my-6 md:mt-8 md:mb-0">
            Our team is dedicated in helping with the initial point-of-sale set
            up as well as being your reoccurringtech support liaison with your
            new point-of-sale system.
          </p>
          <Button
            classname="w-fit md:hidden"
            title="Find your POS"
            onClick={findPOS}
          />
        </div>
        <List
          data={ServiceData}
          classname={"grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-20"}
          itemBuilder={(item, index, selectIndex) => {
            return (
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={item.image}
                  alt="service-image"
                  className="w-20 h-20"
                />
                <p className="txt-md-bold md:text-xl">{item.title}</p>
              </div>
            );
          }}
        />
        <Button
          classname="hidden md:flex w-fit md:h-16"
          title="Find your POS"
          onClick={findPOS}
        />
      </HeroSection>
      <MetricSection />
      <FooterCTA
        bgColor="bg-accent md:my-20"
        actions={
          <>
            <Button
              title="Find your POS"
              onClick={findPOS}
              classname="md:h-16"
            />
            <Button
              title="Get POS for free"
              classname="md:h-16"
              style={{ background: "white", color: "black" }}
              onClick={getPOSFree}
            />
          </>
        }
        title={
          <h3>
            Real advice
            <span className="text-secondary "> from real consultants</span>
          </h3>
        }
        des={
          "Speak with a consultant today to find the best point-of-sale for your business"
        }
      />
    </>
  );
};

export default AboutPage;
