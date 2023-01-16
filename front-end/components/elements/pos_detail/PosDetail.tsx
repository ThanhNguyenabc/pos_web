import { BreadMeImg, IcRightArrow } from "assets/AssetUtil";
import { BreadMeBtn } from "components/common/BreadmeBtn";
import { Button } from "components/common/Button";
import PricingBtn from "components/common/PricingBtn";
import { getOverallRating, Product, SystemOs } from "models/porduct";
import { Specification } from "models/specification";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ColorUtils from "utils/ColorUtils";
import AppRoutes from "utils/routes";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";
import ExpertOpinion from "./ExpertOpinion";
import POSIntroduction from "./Introduction";
import Pricing from "./Pricing";
import SpecificationView from "./Specification";

interface POSDetailProps {
  product: Product;
  specification: Specification;
}

export const POSDetail = ({ product, specification }: POSDetailProps) => {
  const overallRate = getOverallRating(product.expert_opinion);
  const router = useRouter();
  const rateItems = [
    {
      name: "Easy to use",
      rating: product.expert_opinion.easy,
    },
    {
      name: "Value",
      rating: product.expert_opinion.value,
    },
    {
      name: "Support",
      rating: product.expert_opinion.support,
    },
    {
      name: "Functionality",
      rating: product.expert_opinion.functionality,
    },
    {
      name: "Feedback",
      rating: product.expert_opinion.feedback,
    },
  ];
  return (
    <div className="flex flex-col w-full gap-12 p-4 md:p-8 xl:flex-row xl:gap-6 xl:p-6">
      <div className="flex bg-white h-fit max-w-[350px] flex-col gap-6 text-center md:gap-8 md:flex-row xl:flex-col">
        <div className="flex flex-col gap-2 items-center md:items-start md:text-left">
          <Image
            src={ProductIcons[product.name]}
            alt=""
            className="w-[160px] h-[80px]"
          />
          <p className="txt-md text-neutral-700">
            Customizable POS system for retail, full & quick-service restaurants
          </p>
          <div className="flex items-center gap-3">
            {product.os_system?.map((item, index) => {
              const Icon = getSystemIcon(item);
              return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-row gap-2 md:gap-4">
            <BreadMeBtn />
            <PricingBtn
              logo={ProductIcons[product.name]}
              title="Monthly"
              desc={`$${product.monthly_price}/month`}
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
            <p className="text-left txt-sm-bold">{product.pricing_desc?.[0]}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-12 flex-1 bg-white md:gap-16">
        <POSIntroduction
          pros={product.pros}
          cons={product.cons}
          desc={product.intro}
        />
        <ExpertOpinion
          overal={overallRate}
          comment={product.expert_opinion.comment}
          rateItems={rateItems}
        />
        <SpecificationView
          items={[
            {
              title: "Business Size",
              desc: specification.businessSize,
            },
            {
              title: "POS Type",
              desc: specification.posType,
            },
            {
              title: "Software type",
              desc: specification.softwareType,
            },
            {
              title: "Free Trial",
              desc: specification.freeTrial,
            },
            {
              title: "Merchant Services",
              desc: specification.merchantService,
            },
            {
              title: "Pricing Model",
              desc: specification.pricingModel,
            },
            {
              title: "Price Range",
              desc: "$$-$$$$",
            },
          ]}
        />
        <div className="flex flex-col gap-4 md:gap-8">
          <p className="txt-heading-xsmal">POS Integrations</p>
          <p className="txt-md text-neutral-700">{product.pos_integrations}</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          <p className="txt-heading-xsmal">Software</p>
          <p className="txt-md text-neutral-700">{product.software}</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          <p className="txt-heading-xsmal">Payment Processing</p>
          <p className="txt-md text-neutral-700">
            {product.payment_processing}
          </p>
          <div className="flex flex-col p-4 gap-3 items-center border-success border-2 rounded-xl md:flex-row">
            <Image src={BreadMeImg} alt="" className="w-20" />
            <p className="txt-large-bold text-center flex-1 xl:text-start">
              Get zero processing fees with Breadme
            </p>
            <Button
              title="Learn more"
              rightIcon={<IcRightArrow />}
              style={{ color: ColorUtils.success, background: "white" }}
              onClick={() => router.push(AppRoutes.BreadmePage)}
            />
          </div>
        </div>
        <Pricing
          monthlyPrice={product.monthly_price}
          desc={product.pricing_desc || []}
          oneTimePurchase={product.one_time_purchase}
        />
      </div>
    </div>
  );
};
