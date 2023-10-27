import React from "react";
import { CategoryType } from "models/category_type";
import ProductList from "./ProductList";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";
import IcStar from "assets/icons/ic_star.svg";
import Categories from "components/common/Categories";
import { Locale, MetaTag } from "models/app_configs";
import { getCurrentMonth } from "utils/date_utils";
import { AppRoutes, CategoryList } from "utils/routes";
import { FooterCTA } from "components/common/FooterCTA";
import HeadTag from "components/common/HeadTag";
import { Product } from "models/product.model";
import { useRouter } from "next/router";

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

interface POSSystemsProps {
  seoTag?: MetaTag;
  type?: string;
  data: Array<Product>;
}

const POSSystems = ({ seoTag, data }: POSSystemsProps) => {
  const { t, locale } = useTrans();
  const router = useRouter();
  const { slug: type = CategoryType.popular } = router.query;
  const selectedTabIndex = ALLTABS.findIndex((item) => item.type == type);

  return (
    <>
      <HeadTag tags={seoTag} />
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

        <ProductList type={type as string} data={data} />
        <FooterCTA />
      </div>
    </>
  );
};

export default POSSystems;
