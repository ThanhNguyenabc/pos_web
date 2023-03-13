import { PartnerImg, ReviewerImg } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ClientSection from "components/common/ClientSection";
import { FooterCTA } from "components/common/FooterCTA";
import HeroSection from "components/common/HeroSection";
import List from "components/common/List";
import MetricSection from "components/common/MetricSection";
import ReviewerSection from "components/elements/partner/ReviewerSection";
import { SideBarType } from "components/SideBar";
import Image from "next/image";
import React from "react";
import useSideBar from "stores/useSideBar";

const PartnerProgram = [
  {
    title: "Lucrative Signing Bonus",
    desc: "Receive bonuses up to $5,000 for merchants who use BestPOS.",
  },
  {
    title: "Monthly Residual Income",
    desc: "Receive the most competitive monthly residual income in the market for credit card processing.",
  },
  {
    title: "Virtual Office",
    desc: "With our virtual office you'll be able to see your signed referrals, daily & monthly reporting, bonus and residual payouts.",
  },
  {
    title: "Competitive Products",
    desc: "Our competitive products and services put our agents at an advantage to build their portfolio.",
  },
  {
    title: "Syndication Opportunities",
    desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
];

const PartnerPage = () => {
  const { openSideBar } = useSideBar();
  const openPartnerForm = () => openSideBar(SideBarType.ApplyPartner);
  return (
    <>
      <div>
        <div className="flex flex-col max-w-[1320px] lg:h-[640px] lg:flex-row xl:ml-[calc((100%-1200px)/2)]">
          <HeroSection className="flex-1">
            <div className="flex flex-col gap-4 text-center md:gap-6 lg:text-left lg:max-w-[460px]">
              <p className={`txt-heading-medium md:txt-heading-xlarge`}>
                Partner with BestPOS
              </p>
              <p className="txt-md-bold lg:text-start md:text-xl">
                The Program is designed specifically for agents, offering you
                unparalleled flexibility and in-depth resources that can’t be
                matched by anyone in the industry.
              </p>
              <div className="flex flex-col self-center gap-4 md:gap-6 w-full md:w-fit md:flex-row lg:self-start">
                <Button
                  classname="md:h-16"
                  title="Become a Partner"
                  onClick={openPartnerForm}
                />
              </div>
            </div>
          </HeroSection>

          <div className="flex flex-1 lg:mt-10">
            <Image src={PartnerImg} alt="" className="aspect-[4/3] w-full" />
          </div>
        </div>
      </div>
      <HeroSection className="gap-12 lg:gap-20">
        <h3 className="text-center txt-heading-medium md:txt-heading-large">
          Agent Program
        </h3>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 md:gap-16 md:gap-y-12 lg:gap-y-20">
          {PartnerProgram.map((item, index) => {
            return (
              <div
                key={`${item.desc}-${index}`}
                className={` flex flex-col ${
                  index == PartnerProgram.length - 1
                    ? " md:col-span-2 mx-auto md:max-w-md"
                    : ""
                }`}
              >
                <p className="mb-4 txt-heading-xsmal md:txt-heading-small">
                  {item.title}
                </p>
                <p className="txt-md md:text-xl text-neutral-700">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </HeroSection>
      <MetricSection titleColor="text-secondary" />
      <HeroSection className="pb-0 md:pb-0 lg:pb-0">
        <h3 className="mb-12 txt-heading-medium text-center md:txt-heading-large">
          Be part of a community full of opportunity
        </h3>
        <ReviewerSection
          reviews={[
            {
              avatar: ReviewerImg,
              name: "Bryan",
              jobTitle: "Owner of Beginnings",
              comment:
                "The competitive products and services that BestPOS provides made it easy for me to secure new clients",
            },
          ]}
        />
      </HeroSection>
      <ClientSection />
      <FooterCTA
        bgColor="bg-neutral-100"
        actions={
          <Button
            classname="w-full md:w-fit md:h-16"
            title="Become a Partner"
            onClick={openPartnerForm}
          />
        }
        title={<h3>Ready to join our partner program?</h3>}
        des="Help your clients scale by transforming customersupport from a cost center to a profit generator."
      />
    </>
  );
};

export default PartnerPage;
