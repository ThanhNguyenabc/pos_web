import IcRightArrow from "assets/icons/ic_chervon_right.svg";
import React from "react";
import { Button } from "components/common/Button";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { CategoryList } from "utils/StringUtil";
import HeroSection from "components/common/HeroSection";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import { Priority } from "../pos_card/POSCardTypes";
import POSCard from "../pos_card/POSCard";
import { Product } from "models/product.model";
import Categories from "components/common/Categories";

const BusinessCategorySectionTrans = {
  heading: {
    [Locale.en]: "Find the right point-of-sale for your business",
    [Locale.es]: "Encuentrael punto de venta adecuado para tu negocio",
  },
  desc: {
    [Locale.en]: "Check out the best rated POS systems today.",
    [Locale.es]:
      "Echa un vistazo a los sistemas de punto de venta mejor valorados hoy",
  },
};

const BusinessCategorySection = ({
  products,
}: {
  products: Array<Product>;
}) => {
  const router = useRouter();
  const { t, locale } = useTrans();

  return (
    <div className="bg-neutral-100">
      <HeroSection className="py-6 pr-0 md:pr-0 md:py-12 lg:py-10 items-center">
        <h3 className="mr-4 txt-large-bold text-center md:txt-heading-xsmal">
          {BusinessCategorySectionTrans["heading"][locale]}
        </h3>
      
        <Categories items={CategoryList} />

        <div className="grid gap-6 pr-4 mt-4 md:pr-8 sm:mt-6 xl:px-0">
          {products?.map((item, index) => {
            const priority = index == 0 ? Priority.first : undefined;
            const priorityBorder = priority ? `border-2 border-primary` : "";
            return (
              <POSCard
                key={`card-item-${index}`}
                data={item}
                classname={`${priorityBorder}`}
                priority={priority}
              />
            );
          })}
          <Button
            classname="w-full md:w-fit mx-auto"
            title={t("explore_all")}
            isOutLine={true}
            rightIcon={<IcRightArrow className="ml-2.5 text-xl" />}
            onClick={() => router.push(AppRoutes.POSSystemPage)}
          />
        </div>
      </HeroSection>
    </div>
  );
};

export default BusinessCategorySection;
