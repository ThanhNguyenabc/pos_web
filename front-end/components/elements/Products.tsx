import POSCard from "components/common/pos_card/POSCard";
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

const ALLTABS = [
  {
    title: "Popular",
    type: CategoryType.popular,
    link: AppRoutes.CategoryPage,
  },
  ...CategoryList,
];

const Products = ({ type }: { type?: string }) => {
  const router = useRouter();
  const { data, isLoading } = useSWR(
    type || CategoryType.popular,
    getPOSByCategory
  );

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

  return (
    <div className="flex flex-col pb-12 bg-neutral-100 flex-1">
      <div className=" flex flex-col py-12 bg-white mb-6 px-4 lg:items-center text-center md:py-14 md:px-8 md:gap-6">
        <TabList
          tabList={ALLTABS}
          initSelectIndex={selectedTabIndex >= 0 ? selectedTabIndex : 0}
          tabItemStyle={selectStyle}
          onSelectedIndex={onSelectTab}
        />
        <p
          className="txt-heading-medium mt-10 md:mt-0 md:txt-heading-large m-0 p-0
          "
        >
          <span className="text-secondary"> Best POS Systems</span> for Your
          Business
        </p>
        <p className="txt-md-bold md:text-xl text-neutral-700 mt-4 md:mt-0">
          We've put together a list of the best point-of-sale systems for your
          business. Let us help you pick the right one!
        </p>
      </div>

      <div className="flex flex-1 flex-col px-4 gap-4 md:px-8 md:gap-6 items-center">
        {isLoading ? <Loading /> : <div></div>}

        {data?.map((item, index) => {
          return (
            <POSCard
              key={`card-item-${index}`}
              data={item}
              overallRating={getOverallRating(item.expert_opinion)}
              onCardClick={() => {
                router.push(`${AppRoutes.POSDetailPage}/${item.id}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
