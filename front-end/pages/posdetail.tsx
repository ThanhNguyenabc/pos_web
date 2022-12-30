import { IcApple, RevelImg } from "assets/AssetUtil";
import { BreadMeBtn } from "components/common/BreadmeBtn";
import PricingBtn from "components/common/PricingBtn";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ColorUtils from "utils/ColorUtils";
import ExpertOpinion from "../components/elements/pos_detail/ExpertOpinion";
import POSIntroduction from "../components/elements/pos_detail/Introduction";
import Pricing from "../components/elements/pos_detail/Pricing";
import Specification from "../components/elements/pos_detail/Specification";

interface POSDetailProps {
  info: {
    logo: StaticImageData;
    shortDesc?: string;
    system: Array<StaticImageData>;
    price: number;
    longDesc?: string;
  };
  pros: Array<string>;
  cons: Array<string>;
  overalRating: number;
  exprtOpinion?: string;
  rateItems: Array<{ name: string; rating: number }>;
}
const POSDetail = (props: POSDetailProps) => {
  return (
    <div className="flex flex-col w-full gap-12 p-4 md:p-8  lg:flex-row lg:gap-10">
      <div className="flex bg-white h-fit flex-col gap-6 text-center md:gap-8 md:flex-row lg:flex-col">
        <div className="flex flex-col gap-2 items-center md:items-start md:text-left">
          <Image src={props.info?.logo} alt="" className="w-[160px] h-[80px]" />
          <p className="txt-md text-neutral-700">
            Customizable POS system for retail, full & quick-service restaurants
          </p>
          <div className="flex items-center gap-3">
            {props.info.system.map((item, index) => (
              <Image
                key={`itemos-${index}`}
                src={item}
                alt="logo-system"
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-row gap-2 md:gap-4">
            <BreadMeBtn />
            <PricingBtn
              logo={props.info.logo}
              title="Monthly"
              desc={"$75/mo"}
              color={ColorUtils.secondary}
            />
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="flex w-10 h-10 items-center justify-center rounded-[20px] p-2 bg-[#E7DBEB]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.25 21.4C13.8667 21.7833 13.3917 21.975 12.825 21.975C12.2583 21.975 11.7833 21.7833 11.4 21.4L2.6 12.6C2.41667 12.4167 2.271 12.2 2.163 11.95C2.05433 11.7 2 11.4333 2 11.15V4C2 3.45 2.196 2.979 2.588 2.587C2.97933 2.19567 3.45 2 4 2H11.15C11.4333 2 11.7 2.054 11.95 2.162C12.2 2.27067 12.4167 2.41667 12.6 2.6L21.4 11.425C21.7833 11.8083 21.975 12.279 21.975 12.837C21.975 13.3957 21.7833 13.8667 21.4 14.25L14.25 21.4ZM12.825 20L19.975 12.85L11.15 4H4V11.15L12.825 20ZM6.5 8C6.91667 8 7.27067 7.854 7.562 7.562C7.854 7.27067 8 6.91667 8 6.5C8 6.08333 7.854 5.72933 7.562 5.438C7.27067 5.146 6.91667 5 6.5 5C6.08333 5 5.72933 5.146 5.438 5.438C5.146 5.72933 5 6.08333 5 6.5C5 6.91667 5.146 7.27067 5.438 7.562C5.72933 7.854 6.08333 8 6.5 8Z"
                  fill="#540375"
                />
              </svg>
            </div>
            <p className="text-left txt-sm-bold">
              FREE for qualifying merchants or $2,500 per station.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 flex-1 bg-white">
        <POSIntroduction
          pros={props.pros}
          cons={props.cons}
          desc={props.info?.longDesc}
        />
        <ExpertOpinion
          overal={props.overalRating}
          opinion={props.exprtOpinion}
          rateItems={props.rateItems}
        />
        <Specification
          items={[
            {
              title: "Business Size",
              desc: "Small",
            },
            {
              title: "POS Type",
              desc: "IOS",
            },
            {
              title: "Software type",
              desc: "Cloud/SaaS",
            },
            {
              title: "Free Trial",
              desc: "Demo Only",
            },
            {
              title: "Merchant Services",
              desc: "In-House, 3rd Party",
            },
            {
              title: "Pricing Model",
              desc: "Monthly Payment, Contract",
            },
            {
              title: "Price Range",
              desc: "$$-$$$$",
            },
          ]}
        />
        <Pricing />
      </div>
    </div>
  );
};

const posIndex = () => {
  return (
    <POSDetail
      info={{
        logo: RevelImg,
        shortDesc:
          "Customizable POS system for retail, full & quick-service restaurants",
        system: [IcApple],
        price: 75,
        longDesc:
          "Revel Systems is an iPad POS system that offers a wide range of features like customer management, inventory management, and social media management for restaurants, pizza shops, coffee shops, and retail stores. While the feature set is impressive, the price is high for some merchants, and there are reports of issues with customer service.",
      }}
      pros={[
        "Customizable clouded system",
        "Amazing local on-site support",
        "Great back office management",
      ]}
      cons={[
        "Doesn't work with Android",
        "Potential glitches with weak internet",
        "No modifiers to modifiers feature",
      ]}
      overalRating={8.9}
      rateItems={[
        {
          name: "Easy to use",
          rating: 8.5,
        },
        {
          name: "Value",
          rating: 9.5,
        },
        {
          name: "Support",
          rating: 9.0,
        },
        {
          name: "Functionality",
          rating: 8.5,
        },
        {
          name: "Feedback",
          rating: 9.0,
        },
      ]}
      exprtOpinion={
        "It has highly advanced inventory management and offers extensive data reporting that can suit most businesses."
      }
    />
  );
};

export default posIndex;
