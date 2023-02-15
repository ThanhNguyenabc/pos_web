import { IcRightArrow, PartnerImg, ReviewerImg } from "assets/AssetUtil";
import Box from "components/common/Box";
import { Button } from "components/common/Button";
import ClientSection from "components/common/ClientSection";
import { FooterCTA } from "components/common/FooterCTA";
import HeroSection from "components/common/HeroSection";
import List from "components/common/List";
import MetricSection from "components/common/MetricSection";
import ApplyPartnerDialog, {
  ApplyPartnerDialogId,
} from "components/elements/partner/ApplyPartnerDialog";
import ReviewerSection from "components/elements/partner/ReviewerSection";
import Image from "next/image";
import React from "react";

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

const openApplyForm = () => {
  document.getElementById(ApplyPartnerDialogId)?.click();
};

const PartnerPage = () => {
  return (
    <>
      <ApplyPartnerDialog />
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col flex-1 px-4 py-14 md:px-8 xl:p-0">
            <div className=" text-center md:text-start lg:max-w-[480px] m-auto w-full">
              <h3 className="txt-heading-large md:txt-heading-xlarge">
                Partner with BestPOS
              </h3>
              <p className="txt-md text-neutral-700 mt-6 mb-12 md:text-xl">
                The Program is designed specifically for agents, offering you
                unparalleled flexibility and in-depth resources that can’t be
                matched by anyone in the industry.
              </p>
              <Button
                classname="w-full md:w-fit md:h-16"
                title="Become an Agent"
                onClick={openApplyForm}
              />
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={PartnerImg}
              alt="partner image"
              className=" aspect-[4/3] w-full  lg:h-full lg:max-h-[608px]"
            />
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
        <Box className="py-14 lg:pt-[120px] lg:pb-0">
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
        </Box>
        <ClientSection />
        <FooterCTA
          className="bg-neutral-100"
          actions={
            <Button
              classname="w-full md:w-fit md:h-16"
              title="Become a Partner"
              onClick={openApplyForm}
            />
          }
          title={<h3>Ready to join our partner program?</h3>}
          des="Help your clients scale by transforming customersupport from a cost center to a profit generator."
        />
      </div>
    </>
  );
};

export default PartnerPage;
