import { useRouter } from "next/router";
import React from "react";
import { CategoryType } from "models/category_type";
import ProductList from "./ProductList";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";
import IcStar from "assets/icons/ic_star.svg";
import Categories from "components/common/Categories";
import { Locale } from "models/app_configs";
import { getCurrentMonth } from "utils/date_utils";
import { AppRoutes, CategoryList } from "utils/routes";

const ALLTABS = [
  {
    title: {
      [Locale.en]: "Popular",
      [Locale.es]: "Popular",
    },
    type: CategoryType.popular,
    link: AppRoutes.POSSystemPage,
    icon: IcStar,
  },
  ...CategoryList,
];

const POSSystems = () => {
  const router = useRouter();
  const type = (router.query.type as string) || CategoryType.popular;
  const { t, locale } = useTrans();

  const selectedTabIndex = ALLTABS.findIndex((item) => item.type == type);

  return (
    <div className="flex flex-col pb-12 bg-neutral-100 flex-1">
      <div className="flex flex-col gap-4 py-6 bg-white mb-6 px-4 lg:items-center text-center md:py-10 md:px-12">
        <p className="txt-sm-bold">
          {`${t("last_updated")} ${getCurrentMonth(locale)}`}
        </p>

        <h1 className="txt-heading-medium mx-auto md:txt-heading-xlarge">
          {HTMLReactParser(t("category_title"))}
        </h1>
        <h2 className="txt-md md:text-xl text-neutral-700 mt-4 md:mt-0 mx-auto">
          {HTMLReactParser(t("category_desc"))}
        </h2>

        <Categories items={ALLTABS} selectedIndex={selectedTabIndex} />
      </div>

      <ProductList type={type} />
    </div>
  );
};

export default POSSystems;
