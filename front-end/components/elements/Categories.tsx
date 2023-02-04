import POSCard from "components/common/pos_card/POSCard";
import TabList from "components/common/TabList";
import { useRouter } from "next/router";
import { CategoryList } from "utils/StringUtil";
import React from "react";
import { AppProps } from "next/app";
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

const Category = (props: AppProps) => {
  const router = useRouter();
  const { type } = router.query;

  const { data, error, isLoading } = useSWR(
    type || CategoryType.popular,
    getPOSByCategory
  );

  const selectedTabIndex = ALLTABS.findIndex(
    (item) => item.link == router.asPath
  );

  return (
    <div className="flex flex-col pb-12 bg-neutral-100 flex-1">
      <div className=" flex flex-col py-12 bg-white mb-6 px-4 lg:items-center text-center md:py-14 md:px-8 md:gap-6">
        <TabList
          tabList={ALLTABS}
          selectIndex={selectedTabIndex < 0 ? 0 : selectedTabIndex}
          onSelectedIndex={(index) => {
            router.push(ALLTABS[index].link);
          }}
        />
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

export default Category;
