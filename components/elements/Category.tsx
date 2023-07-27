import TabList from "components/common/TabList";
import { useRouter } from "next/router";
import { CategoryList } from "utils/StringUtil";
import React, { useCallback } from "react";
import { CategoryType } from "models/category_type";
import AppRoutes from "utils/routes";
import ProductList from "./ProductList";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";

const ALLTABS = [
  {
    title: "popular",
    type: CategoryType.popular,
    link: AppRoutes.POSSystemPage,
  },
  ...CategoryList,
];

const Categories = () => {
  const router = useRouter();
  const type = (router.query.type as string) || CategoryType.popular;
  const { t } = useTrans();
  const selectedTabIndex = ALLTABS.findIndex((item) => item.type == type);

  const onSelectTabIndex = useCallback((index: number) => {
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
      <div className=" flex flex-col py-6 bg-white mb-6 px-4 lg:items-center text-center md:py-14 md:px-8 md:gap-6">
        <TabList
          tabList={ALLTABS}
          initSelectIndex={selectedTabIndex >= 0 ? selectedTabIndex : 0}
          tabItemStyle={selectStyle}
          onSelectedIndex={onSelectTabIndex}
          className="container-content"
        />
        <h1 className="txt-heading-medium mt-10 md:mt-0 md:txt-heading-large max-w-[680px] mx-auto">
          {HTMLReactParser(t("category_title"))}
        </h1>
        <h2 className="txt-md-bold md:text-xl text-neutral-700 mt-4 md:mt-0 max-w-[680px] mx-auto">
          {HTMLReactParser(t("category_desc"))}
        </h2>
      </div>
      <ProductList type={type} />
    </div>
  );
};

export default Categories;
