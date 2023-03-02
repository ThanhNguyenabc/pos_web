import { IcRightArrow } from "assets/AssetUtil";
import React from "react";
import Image from "next/image";
import { Button } from "components/common/Button";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { CategoryList } from "utils/StringUtil";
import List from "components/common/List";
import HeroSection from "components/common/HeroSection";
import Box from "components/common/Box";
import { getPOSByCategory } from "api_client/axios_client";
import useSWR from "swr";
import POSCard, {
  Priority,
  RecommendColor,
} from "components/common/pos_card/POSCard";

const BusinessCategorySection = () => {
  const router = useRouter();

  const { data, isLoading } = useSWR(
    { type: "all", limit: 4 },
    getPOSByCategory
  );

  return (
    <div className="bg-neutral-100">
      <HeroSection className="pr-0 md:pr-0 gap-4 md:gap-6 md:py-12 lg:py-12">
        <p className="txt-heading-xsmal text-center md:txt-heading-small">
          Find the right point-of-sale for your business
        </p>

        <div className=" overflow-x-scroll gap-2 pb-1 whitespace-nowrap ">
          {CategoryList.map((item, index) => {
            const ml = index == 0 ? "" : "ml-2 md:ml-4";
            return (
              <div
                className={`w-[110px] ${ml} h-[124px] md:h-[180px] md:w-[186px] inline-flex flex-col rounded-lg  
                p-3 border bg-white  border-neutral-300 cursor-pointer`}
                key={`category-${index}`}
                onClick={() => router.push(CategoryList[index].link)}
              >
                <div className=" w-[64px] h-[64px] mx-auto md:w-[100px] md:h-[100px]">
                  <Image src={item.img} alt="pizza" />
                </div>
                <div className="flex h-full items-center justify-center ">
                  <p className=" text-xs font-semibold whitespace-normal text-center md:text-base ">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid mt-6 gap-6 pr-4 md:pr-8 xl:px-0">
          {data?.map((item, index) => {
            const priority =
              index == 0
                ? Priority.first
                : index == 1
                ? Priority.second
                : index == 2
                ? Priority.third
                : undefined;
            const priorityBorder = priority
              ? `border-2  ${
                  RecommendColor[priority as keyof typeof RecommendColor].border
                }`
              : "";
            return (
              <POSCard
                key={`card-item-${index}`}
                data={item}
                classname={`${priorityBorder}`}
                priority={priority}
                overallRating={item.expert_opinion.overall}
                onCardClick={() => {
                  router.push(`${AppRoutes.POSDetailPage}/${item.id}`);
                }}
              />
            );
          })}
          <Button
            classname="w-full md:w-fit mx-auto"
            title="Explore all POS"
            isOutLine={true}
            rightIcon={<IcRightArrow className="ml-2.5 text-xl" />}
            onClick={() => router.push(AppRoutes.CategoryPage)}
          />
        </div>
      </HeroSection>
    </div>
  );
};

export default BusinessCategorySection;
