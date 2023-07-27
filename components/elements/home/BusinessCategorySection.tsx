import IcRightArrow from "assets/icons/ic_chervon_right.svg";
import React from "react";
import Image from "next/image";
import { Button } from "components/common/Button";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { CategoryList } from "utils/StringUtil";
import HeroSection from "components/common/HeroSection";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import { Priority, RecommendColor } from "../pos_card/POSCardTypes";
import POSCard from "../pos_card/POSCard";
import { Product } from "models/product.model";

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
      <HeroSection className="pr-0 md:pr-0 gap-4 md:gap-6 md:py-12 lg:py-12">
        <h2 className="txt-heading-xsmal text-center md:txt-heading-small">
          {BusinessCategorySectionTrans["heading"][locale]}
        </h2>

        <ul className="overflow-x-scroll scroll scrollbar-hide gap-2 pb-1 whitespace-nowrap">
          {CategoryList.map((item, index) => {
            const mr =
              index < CategoryList.length - 1 ? "mr-2 md:mr-4" : "xl:mr-0";
            return (
              <li
                className={`w-[115px] ${mr} h-[140px] md:h-[170px] md:w-[186px] mr-2 md:mr-4 inline-flex flex-col rounded-2xl  
                p-4 border bg-white border-neutral-300 cursor-pointer`}
                key={`category-${index}`}
                onClick={() => router.push(item.link)}
              >
                <Image
                  src={item.img}
                  alt={`${item.title.en}`}
                  width={80}
                  height={53}
                  quality={85}
                  className="w-[80px] mx-auto md:w-[120px] object-contain aspect-[3/2]"
                />

                <div className="flex h-full items-center justify-center">
                  <p className=" text-xs font-semibold whitespace-normal text-center md:text-base">
                    {item.title[locale]}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="txt-sm-bold mb-2 mr-4 text-center md:txt-md-bold lg:mb-0">
          {BusinessCategorySectionTrans["desc"][locale]}
        </p>

        <div className="grid gap-6 pr-4 md:pr-8 xl:px-0">
          {products?.map((item, index) => {
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
