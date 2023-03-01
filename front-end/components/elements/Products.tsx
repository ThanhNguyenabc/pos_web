import POSCard, {
  Priority,
  RecommendColor,
} from "components/common/pos_card/POSCard";
import TabList from "components/common/TabList";
import { useRouter } from "next/router";
import { CategoryList } from "utils/StringUtil";
import React, { useCallback } from "react";
import Loading from "components/common/loading/Loading";
import useSWR from "swr";
import { getPOSByCategory } from "api_client/axios_client";
import { CategoryType } from "models/category_type";
import AppRoutes from "utils/routes";
import { getOverallRating } from "models/product.model";
import Box from "components/common/Box";

const ALLTABS = [
  {
    title: "Popular",
    type: CategoryType.popular,
    link: AppRoutes.CategoryPage,
  },
  ...CategoryList,
];

const Products = ({ type = CategoryType.popular }: { type?: string }) => {
  const router = useRouter();

  const { data, isLoading } = useSWR(type, getPOSByCategory);

  const selectedTabIndex = ALLTABS.findIndex((item) => item.type == type);

  const onSelectTab = useCallback((index: number) => {
    router.push(ALLTABS[index].link);
  }, []);

  const selectStyle = useCallback((isSelect: boolean) => {
    return `border-2 rounded-lg  ${
      isSelect
        ? "bg-secondary text-white border-secondary"
        : "text-neutral-900 bg-white"
    }`;
  }, []);

  const renderItems = () => {
    let items: Array<React.ReactElement> = [];
    if (data) {
      data.forEach((item, index) => {
        if (index < 3) {
          const priority =
            index == 0
              ? Priority.first
              : index == 1
              ? Priority.second
              : Priority.third;
          const priorityBorder = priority
            ? `border-2  ${
                RecommendColor[priority as keyof typeof RecommendColor].border
              }`
            : "";

          items.push(
            <POSCard
              key={`card-item-${index}`}
              data={item}
              classname={`${priorityBorder}`}
              priority={priority}
              overallRating={getOverallRating(item.expert_opinion)}
              onCardClick={() => {
                router.push(`${AppRoutes.POSDetailPage}/${item.id}`);
              }}
            />
          );
          if (index == 2 && type == CategoryType.popular) {
            items.push(
              <div
                className="relative w-full h-[32px]"
                key={`divider-${index}`}
              >
                <div className="absolute mx-auto left-0 right-0 bg-neutral-100 px-4 py-1 border-neutral-300 border-2 rounded-lg w-fit">
                  <p className="txt-sm-bold md:text-base ">
                    Other Recommended POS System
                  </p>
                </div>
                <div className="divider h-[2px]" />
              </div>
            );
          }
        } else {
          items.push(
            <POSCard
              key={`card-item-${index}`}
              data={item}
              overallRating={getOverallRating(item.expert_opinion)}
              onCardClick={() => {
                router.push(`${AppRoutes.POSDetailPage}/${item.id}`);
              }}
            />
          );
        }
      });
    }
    return items;
  };
  return (
    <div className="flex flex-col pb-12 bg-neutral-100 flex-1">
      <div className=" flex flex-col py-6 bg-white mb-6 px-4 lg:items-center text-center md:py-14 md:px-8 md:gap-6">
        <TabList
          tabList={ALLTABS}
          initSelectIndex={selectedTabIndex >= 0 ? selectedTabIndex : 0}
          tabItemStyle={selectStyle}
          onSelectedIndex={onSelectTab}
        />
        <p className="txt-heading-medium mt-10 md:mt-0 md:txt-heading-large">
          <span className="text-secondary"> Best POS Systems</span> for Your
          Business
        </p>
        <p className="txt-md-bold md:text-xl text-neutral-700 mt-4 md:mt-0">
          We&#39;ve put together a list of the best point-of-sale systems for
          your business. Let us help you pick the right one!
        </p>
      </div>

      <div className="flex flex-1 container-content flex-col px-4 gap-6 md:px-8 md:gap-6 items-center">
        {isLoading ? <Loading /> : <div></div>}
        {renderItems()}
      </div>
    </div>
  );
};

export default Products;
