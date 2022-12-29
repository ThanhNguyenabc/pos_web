import {
  CloverImg,
  IcApple,
  IcWindow,
  LightSpeedImg,
  OvviImg,
  RevelImg,
} from "assets/AssetUtil";
import POSCard from "components/common/pos_card/POSCard";
import TabList from "components/common/TabList";
import { Categories } from "components/elements/home/BusinessCategorySection";
import { useRouter } from "next/router";
import React from "react";
import ColorUtils from "utils/ColorUtils";
import { MockupData } from "utils/StringUtil";

const Tabs = [
  "All",
  "Pizzeria",
  "Quick Service Restaurants",
  "Retail Stores",
  "Full Service Restaurants",
  "Bar & Night Clubs",
  "Small Businesses",
];

const POSReview = () => {
  const route = useRouter();
  return (
    <div className="flex flex-col pb-12 bg-neutral-100">
      <div className=" flex flex-col py-12 bg-white mb-6 px-4 lg:items-center text-center md:py-14 md:px-8 md:gap-6">
        <TabList tabList={Tabs} />
        <p
          className="txt-heading-medium mt-10 md:mt-0 md:text-5xl md:font-extrabold m-0 p-0
        "
        >
          <span className="text-secondary"> Best POS Systems</span> for Your
          Business
        </p>
        <p className="txt-md md:text-xl text-neutral-700 mt-4 md:mt-0">
          We’ve put together a list of the best POS systems for Pizzeria &
          Restaurants to help your business. Let us help you find the right fit.
        </p>
      </div>

      <div className="flex flex-col px-4 gap-4 md:px-8 md:gap-6 items-center">
        {MockupData.map((item) => (
          <POSCard
            {...item}
            onCardClick={() => {
              route.push("/posdetail");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default POSReview;
