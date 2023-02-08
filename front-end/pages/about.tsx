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
import List from "components/common/List";
import MetricSection from "components/common/MetricSection";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
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

  const findPOS = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(AppRoutes.QuestionnairePage);
  };

  const getPOSFree = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(AppRoutes.FreePOSPage);
  };

  const goToContactPage = () => {
    router.push(AppRoutes.ContactPage);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-4 py-12 md:px-8 md:py-14 lg:bg-neutral-100">
        <p className="txt-heading-medium md:font-extrabold md:text-6xl md:leading-[68px]">
          About Us
        </p>
        <p className="txt-md text-neutral-700 mt-4 mb-10 md:mt-6 md:mb-12 md:text-xl">
          Best POS offers a wide variety of products and services to assist our
          merchants, as well as industry-tailored options that few competitors
          can (or will) match. <br /> <br /> To complement our services, and to
          make processing easier and affordable for our customers, we provide
          cutting-edge credit card processing equipment, terminals, POS systems
          and software – free of charge.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <Button title="Find your POS" onClick={findPOS} />
          <Button
            title="Request A Demo"
            isOutLine
            rightIcon={<IcRightArrow className="text-xl" />}
            onClick={getPOSFree}
          />
          <Button
            title="Contact Us"
            isOutLine
            rightIcon={<IcRightArrow className=" text-xl" />}
            onClick={goToContactPage}
          />
        </div>
      </div>

      <Image
        src={AboutCoverImg}
        alt="about-cover-image"
        className="lg:bg-neutral-100"
      />
      <div className="flex flex-col px-4 py-12 items-center text-center md:px-8 md:py-14 lg:p-[100px] xl:p-[120px]">
        <p className="txt-md-bold text-primary">Our Services</p>
        <p className="txt-heading-small mt-4 mb-6  max-w-xl md:mb-8 md:text-5xl md:font-extrabold md:leading-[56px]">
          <span className=" text-secondary">Unparalleled Service</span> via
          E-mail & Phone.
        </p>
        <p className="txt-md mb-6 max-w-3xl md:text-xl">
          Our team is dedicated in helping with the initial point-of-sale set up
          as well as being your reoccurring tech support liaison with your new
          point-of-sale system.
        </p>
        <List
          data={ServiceData}
          classname={"grid-cols-2 my-12 md:grid-cols-3 xl:my-20"}
          itemBuilder={(item, index, selectIndex) => {
            return (
              <div className="flex flex-col gap-4 items-center">
                <Image
                  src={item.image}
                  alt="service-image"
                  className="w-20 h-20"
                />
                <p className="txt-md-bold">{item.title}</p>
              </div>
            );
          }}
        />
        <Button
          classname="w-fit"
          title="Find your POS"
          rightIcon={<IcRightArrow className=" text-xl" />}
          onClick={findPOS}
        />
      </div>
      <MetricSection />
      <FooterCTA
        className="md:my-20"
        actions={
          <>
            <Button title="Find your POS" onClick={findPOS} />
            <Button
              title="Get POS for free"
              style={{ background: "white", color: "black" }}
              onClick={getPOSFree}
            />
          </>
        }
        title={
          <h3>
            Real advice
            <span className="text-secondary "> from real people</span>
          </h3>
        }
        des={
          "Speak with a consultant today to find he best POS for your business"
        }
      />
    </div>
  );
};

export default AboutPage;
