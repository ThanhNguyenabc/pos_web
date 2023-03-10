import { BreadMe2Img, IcRightArrow } from "assets/AssetUtil";
import Box from "components/common/Box";
import { BreadMeBtn } from "components/common/BreadmeBtn";
import { Button } from "components/common/Button";
import PricingBtn from "components/common/PricingBtn";
import TabList from "components/common/TabList";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useSideBar from "stores/useSideBar";
import ColorUtils from "utils/ColorUtils";
import AppRoutes from "utils/routes";
import {
  getProductIcon,
  getProductImage,
  getSystemIcon,
} from "utils/StringUtil";
import ExpertOpinion from "./ExpertOpinion";
import FrequentlyQuestion from "./frequently_question";
import POSIntroduction from "./Introduction";
import Pricing from "./Pricing";
import SpecificationView from "./Specification";
import useSWR from "swr";
import { getPOSDetail } from "api_client/axios_client";
import Loading from "components/common/loading/Loading";
import { SideBarType } from "components/SideBar";

const DetailTabs = [
  {
    title: "Introduction",
    id: "introduction",
  },
  {
    title: "Expert Opinions",
    id: "export-opinion",
  },
  {
    title: "Specifications",
    id: "specifications",
  },
  {
    title: "POS Integrations",
    id: "integrations",
  },
  {
    title: "Software",
    id: "software",
  },
  {
    title: "Payment Processing",
    id: "payment",
  },
  {
    title: "Pricing",
    id: "pricing",
  },
  {
    title: "FAQ",
    id: "faq",
  },
];

const boxWidthInLg = 300;
const boxWidthInXL = 400;

export const ProductDetail = () => {
  const { openSideBar } = useSideBar();
  const router = useRouter();
  const { posId = "" } = router.query;
  const { data: productData } = useSWR(`${posId}`, getPOSDetail);

  if (!productData) {
    return (
      <div className="flex justify-center mt-8">
        <Loading />
      </div>
    );
  }
  return (
    <Box className=" flex flex-col lg:pr-0 lg:flex-row lg:gap-10">
      <div
        className={`flex flex-col py-6 h-fit gap-6  
        text-center md:gap-8 md:flex-row lg:w-[${boxWidthInLg}px] xl:w-[${boxWidthInXL}px]
        lg:flex-col lg:py-0 lg:sticky lg:top-0 lg:z-10`}
      >
        <div className="flex flex-col flex-1 gap-2 items-center md:items-start md:text-left lg:items-center ">
          <Image
            src={getProductIcon(productData.slug)}
            alt=""
            width={160}
            height={80}
            className="object-contain"
          />
          <p className="txt-md text-neutral-700 lg:text-center">
            {productData.overview}
          </p>
          <div className="flex items-center gap-3">
            {productData.os_system?.map((item, index) => {
              const Icon = getSystemIcon(item);
              return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
            })}
          </div>
        </div>

        <div className="flex  flex-1 flex-col gap-4 md:gap-6 ">
          <div className="flex flex-row gap-2 md:gap-4 ">
            <BreadMeBtn />
            <PricingBtn
              logo={getProductIcon(productData.slug)}
              title="Monthly"
              desc={`$${productData.monthly_price}/mo`}
              color={ColorUtils.secondary}
              onClick={() => openSideBar(SideBarType.RequestDemo)}
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
              {productData.pricing_desc?.[0]}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1  w-full gap-12 md:gap-8 lg:border-l lg:w-[calc(100%-340px)] xl:w-[calc(100%-440px)]">
        <div className="sticky top-0 z-30 border-b border-neutral-300 flex bg-white">
          <TabList
            tabList={DetailTabs}
            tabItemStyle={(isSelect) =>
              isSelect
                ? " border-b-4 border-secondary text-secondary"
                : "text-neutral-400"
            }
            onSelectedIndex={(index) => {
              let element = document.getElementById(DetailTabs[index].id);

              element &&
                element.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          />
        </div>

        <Box className="w-full px-0 pb-14 gap-12 md:gap-16  lg:max-w-[1100px] mx-auto">
          <POSIntroduction
            id={DetailTabs[0].id}
            pros={productData.pros}
            cons={productData.cons}
            desc={productData.intro}
          />
          <ExpertOpinion
            id={DetailTabs[1].id}
            data={productData.expert_opinion}
          />
          <SpecificationView id={DetailTabs[2].id} posId={`${posId}`} />
          <div className="relative w-full h-[250px]">
            <Image
              src={getProductImage(productData.slug)}
              alt="pos-pic"
              className="object-contain"
              fill
            />
          </div>
          <div id={DetailTabs[3].id} className="flex flex-col gap-4 md:gap-8">
            <p className="txt-heading-xsmal md:txt-heading-small">
              POS Integrations
            </p>
            <p className="txt-md text-neutral-700">
              {productData.pos_integrations}
            </p>
          </div>
          <div id={DetailTabs[4].id} className="flex flex-col gap-4 md:gap-8">
            <p className="txt-heading-xsmal md:txt-heading-small">Software</p>
            <p className="txt-md text-neutral-700">{productData.software}</p>
          </div>
          <div id={DetailTabs[5].id} className="flex flex-col gap-4 md:gap-8">
            <p className="txt-heading-xsmal md:txt-heading-small">
              Payment Processing
            </p>
            <p className="txt-md text-neutral-700">
              {productData.payment_processing}
            </p>
            <div className="flex flex-row p-4 gap-4 items-center border-success border-2 rounded-xl">
              <Image src={BreadMe2Img} alt="" className="w-[36px] h-[36px]" />
              <p className="txt-large-bold  flex-1 xl:text-start">
                Get zero processing fees with Breadme
              </p>
              <Button
                title=""
                rightIcon={<IcRightArrow />}
                style={{ color: ColorUtils.success, background: "white" }}
                onClick={() => router.push(AppRoutes.BreadmeQuestionPage)}
              />
            </div>
          </div>
          <Pricing
            id={DetailTabs[6].id}
            monthlyPrice={productData.monthly_price}
            desc={productData.pricing_desc || []}
            oneTimePurchase={productData.one_time_purchase}
          />
          <FrequentlyQuestion id={DetailTabs[7].id} />
        </Box>
      </div>
    </Box>
  );
};
