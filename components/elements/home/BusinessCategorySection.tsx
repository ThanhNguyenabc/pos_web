import { IcRightArrow } from "assets/AssetUtil";
import React from "react";
import Image from "next/image";
import { Button } from "components/common/Button";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { CategoryList } from "utils/StringUtil";
import HeroSection from "components/common/HeroSection";
import { getPOSByCategory } from "api_client/axios_client";
import useSWR from "swr";
import POSCard, {
  Priority,
  RecommendColor,
} from "components/elements/pos_card/POSCard";

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

        <div className=" overflow-x-scroll gap-2 pb-1 whitespace-nowrap">
          {CategoryList.map((item, index) => {
            const mr =
              index < CategoryList.length - 1 ? "mr-2 md:mr-4" : "xl:mr-0";
            return (
              <div
                className={`w-[115px] ${mr} h-[124px] md:h-[160px] md:w-[186px] mr-2 md:mr-4 inline-flex flex-col rounded-2xl  
                p-4 border bg-white  border-neutral-300 cursor-pointer`}
                key={`category-${index}`}
                onClick={() => router.push(CategoryList[index].link)}
              >
                <div className=" w-[80px] h-[80px] mx-auto md:w-[120px] md:h-[80px] object-contain">
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
