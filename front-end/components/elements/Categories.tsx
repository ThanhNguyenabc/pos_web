import POSCard from "components/common/pos_card/POSCard";
import TabList from "components/common/TabList";
import { useRouter } from "next/router";
import { CategoryTabs, MockupData } from "utils/StringUtil";
import React from "react";

const Category = ({ categoryType }: { categoryType?: string }) => {
  const router = useRouter();
  const { type } = router.query;

  const selectedTabIndex = CategoryTabs.findIndex(
    (item) => item.link == router.asPath
  );
  return (
    <div className="flex flex-col pb-12 bg-neutral-100">
      <div className=" flex flex-col py-12 bg-white mb-6 px-4 lg:items-center text-center md:py-14 md:px-8 md:gap-6">
        <TabList
          tabList={CategoryTabs}
          selectIndex={selectedTabIndex < 0 ? 0 : selectedTabIndex}
          onSelectedIndex={(index) => {
            router.push(CategoryTabs[index].link);
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

      <div className="flex flex-col px-4 gap-4 md:px-8 md:gap-6 items-center">
        {MockupData.map((item, index) => (
          <POSCard
            key={`card-item-${index}`}
            {...item}
            onCardClick={() => {
              router.push("/posdetail");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
