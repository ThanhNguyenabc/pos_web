import { Button } from "components/common/Button";
import FooterCTA from "components/common/FooterCTA";
import HeroSection from "components/common/HeroSection";
import MetricSection from "components/common/MetricSection";
import useTrans from "hooks/useTrans";
import Image from "next/image";
import React from "react";
import useSideBar from "stores/useSideBar";
import HeadTag from "components/common/HeadTag";
import { RightSideBarType } from "components/common/RightSideBar";
import TestimonialSectionV2 from "components/elements/home/TestimonialSection";
import IcCheck from "assets/icons/ic_check.svg";
import { twMerge } from "tailwind-merge";
import { getSEOTags } from "./api/configs";
import { cacheTime } from "utils/constants";
import { MetaTag } from "models/app_configs";

const ServiceData = [
  {
    title: "Strategic Connections",
    desc: "Over the years, we've built strong relationships with top-notch POS providers who are ready to cater to your unique needs. We understand the unique qualities of each provider, allowing us to seamlessly match you with the one that aligns perfectly with your business objectives.",
  },
  {
    title: "Your Deal Advocate ",
    desc: "Think of us as your deal-making advocates. We roll up our sleeves, negotiating on your behalf to secure the most advantageous terms, pricing, and features. Rest assured, your interests are our top priority.",
  },
  {
    title: "Leveraging Expertise",
    desc: "While we may not service the systems ourselves, our expertise in the POS field is unmatched. Our team is well-versed in the latest trends and technologies, ensuring that the system we connect you with is not only a perfect fit but also future-proof.",
  },
  {
    title: "Time & Cost Efficiency",
    desc: "Say goodbye to the headaches of non-stop comparisons and endless negotiations. With BestPOS by your side, you'll save valuable time and resources, allowing you to focus on what truly matters – growing your business.",
  },
  {
    title: "No Compromises",
    desc: "Just because we're not the service provider doesn't mean we compromise on quality. We hold ourselves to the highest standards, ensuring that the POS solution you receive is of the utmost quality and reliability.",
  },
];

const ServiceItem = ({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex-col w-full flex p-4 gap-4 bg-neutral-100 rounded-2xl md:p-8 lg:p-10",
        className
      )}
    >
      <IcCheck className="text-2xl text-primary" />
      <p className="txt-heading-xsmal md:txt-heading-small"> {title}</p>
      <p className="txt-md text-neutral-600"> {desc}</p>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getSEOTags("about");

  return {
    props: {
      seoTag: data,
    },
    revalidate: cacheTime,
  };
};

const AboutPage = ({ seoTag }: { seoTag?: MetaTag }) => {
  const { t } = useTrans();
  const openSideBar = useSideBar((state) => state.openSideBar);

  const findPOS = () => {
    openSideBar(RightSideBarType.Questionnaire);
  };

  const FindPOSBtn = (
    <Button title={t("find_your_pos")} onClick={findPOS} classname="md:h-16" />
  );

  return (
    <>
      <HeadTag tags={seoTag} />
      <HeroSection className="flex flex-col px-4 py-12 gap-4 md:px-8 md:py-14">
        <h2 className="txt-md-bold text-center text-primary md:text-start">
          {t("about_us_title")}
        </h2>
        <h1 className="txt-heading-medium text-center md:text-start md:txt-heading-xlarge md:max-w-2xl">
          Your Trusted Guide to Point-of-Sale Solutions
        </h1>
        <p className="txt-md md:text-xl text-neutral-600 text-center md:text-start">
          Up to Date & Reliable
        </p>
      </HeroSection>
      <div className="container-content relative w-full aspect-video">
        <Image
          src="https://res.cloudinary.com/dgrym3yz3/image/upload/v1681793952/assets/common/about_img_tlfrgd.png"
          alt="about-cover-image"
          fill
        />
      </div>

      <HeroSection className="items-center gap-10">
        <h3 className="txt-heading-small max-w-3xl md:txt-heading-large mt-2">
          Bridging the Gap: Your Point of Sale System, Your Perfect Deal!
        </h3>
        <p className="txt-md text-neutral-700 max-w-[790px]  md:text-xl lg:ml-3">
          In the dynamic world of business technology, finding the ideal
          point-of-sale system can feel like a puzzle waiting to be solved.
          That&apos;s where we step in! At BestPOS, we specialize in being your
          trusted mediator, seamlessly connecting your business with the right
          POS provider and effortlessly securing the best deal.
        </p>

        <Button
          classname="flex w-fit md:h-16"
          title={t("find_your_pos")}
          onClick={findPOS}
        />
      </HeroSection>
      <HeroSection className="items-center gap-10">
        <h3 className="txt-heading-small text-center max-w-3xl md:txt-heading-large mt-2">
          Why Entrust Us with Your POS Deal?
        </h3>
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-6">
          {ServiceData.map((item, index) => {
            if (index >= ServiceData.length - 2) {
              return (
                <ServiceItem
                  key={`${item.title}`}
                  {...item}
                  className="md:col-span-1 lg:col-span-3"
                />
              );
            }
            return (
              <ServiceItem
                key={`${item.title}`}
                {...item}
                className="col-span-1 md:col-span-1 lg:col-span-2"
              />
            );
          })}
        </div>
      </HeroSection>
      <MetricSection className="bg-white">{FindPOSBtn}</MetricSection>
      <TestimonialSectionV2 />
      <FooterCTA />
    </>
  );
};

export default AboutPage;
