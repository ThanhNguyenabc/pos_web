import { PartnerImg } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ClientSection from "components/common/ClientSection";
import List from "components/common/List";
import MetricSection from "components/common/MetricSection";
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
const PartnerPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col flex-1 px-4 py-14 md:px-8 xl:p-0">
          <div className="max-w-[480px] m-auto">
            <h3 className="txt-heading-large">Partner with BestPOS</h3>
            <p className="text-neutral-700 mt-6 mb-12">
              The Program is designed specifically for agents, offering you
              unparalleled flexibility and in-depth resources that can’t be
              matched by anyone in the industry.
            </p>
            <Button title="Become a Partner" />
          </div>
        </div>
        <Image src={PartnerImg} alt="partner image" className="flex-1" />
      </div>

      <div className="flex flex-col px-4 py-14 gap-12 md:px-8">
        <h3 className="txt-heading-medium">Agent Program</h3>
        <List
          classname="gap-12"
          data={PartnerProgram}
          itemBuilder={(item, index, isSelectItem) => {
            return (
              <>
                <p className="mb-4 txt-heading-xsmal">{item.title}</p>
                <p className="txt-md">{item.desc}</p>
              </>
            );
          }}
        />
      </div>
      <MetricSection titleColor="text-secondary" />
    </div>
  );
};

export default PartnerPage;
