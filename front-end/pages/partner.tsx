import { PartnerImg, ReviewerImg } from "assets/AssetUtil";
import Box from "components/common/Box";
import { Button } from "components/common/Button";
import ClientSection from "components/common/ClientSection";
import { FooterCTA } from "components/common/FooterCTA";
import HeroSection from "components/common/HeroSection";
import List from "components/common/List";
import MetricSection from "components/common/MetricSection";
import ApplyPartnerDialog from "components/elements/partner/ApplyPartnerDialog";
import ReviewerSection from "components/elements/partner/ReviewerSection";
import Image from "next/image";
import React from "react";
import Drawer from "react-modern-drawer";

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
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Drawer
        open={isOpen}
        direction="right"
        onClose={toggleDrawer}
        style={{
          width: "w-full",
        }}
        className="mt-20 md:mt-0"
      >
        <ApplyPartnerDialog onClose={toggleDrawer} />
      </Drawer>
      <div>
        <div className="flex flex-col max-w-[1320px] lg:h-[640px] lg:flex-row xl:ml-[calc((100%-1200px)/2)]">
          <HeroSection className="flex-1">
            <div className="flex flex-col gap-4 text-center md:gap-6 lg:text-left lg:max-w-[460px]">
              <p className={`txt-heading-large md:text-6xl md:leading-[68px]`}>
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
                  onClick={toggleDrawer}
                />
              </div>
            </div>
          </HeroSection>

          <div className="flex flex-1 lg:mt-10">
            <Image src={PartnerImg} alt="" className="aspect-[4/3] w-full" />
          </div>
        </div>
      </div>
      <HeroSection className="gap-12">
        <h3 className="text-center txt-heading-medium md:txt-heading-large">
          Agent Program
        </h3>
        <List
          classname="gap-12 md:grid-cols-2 lg:gap-y-20 lg:gap-x-16"
          data={PartnerProgram}
          itemBuilder={(item, index, isSelectItem) => {
            return (
              <div className={` flex flex-col`}>
                <p className="mb-4 txt-heading-xsmal md:txt-heading-small">
                  {item.title}
                </p>
                <p className="txt-md md:text-xl text-neutral-700">
                  {item.desc}
                </p>
              </div>
            );
          }}
        ></List>
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
            onClick={toggleDrawer}
          />
        }
        title={<h3>Ready to join our partner program?</h3>}
        des="Help your clients scale by transforming customersupport from a cost center to a profit generator."
      />
    </>
  );
};

export default PartnerPage;
