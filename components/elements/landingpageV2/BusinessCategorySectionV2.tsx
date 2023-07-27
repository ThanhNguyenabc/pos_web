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
import POSCardV2 from "../pos_card/v2/POSCardV2";
import { Product } from "models/product.model";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

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

const BusinessCategorySectionV2 = ({
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
        <p className="mr-4 txt-sm text-center md:txt-md text-neutral-700">
          {BusinessCategorySectionTrans["desc"][locale]}
        </p>

        <div className="mt-2 w-full overflow-x-auto scroll scrollbar-hide items-end">
          <ul className="flex flex-nowrap mx-auto w-fit">
            {CategoryList.map((item, index) => {
              const mr =
                index < CategoryList.length - 1 ? "mr-2 md:mr-4" : "xl:mr-0";

              return (
                <li
                  className={twMerge(
                    `  block py-[10px] min-w-max px-4 border rounded-3xl border-neutral-300 bg-white`,
                    mr
                  )}
                  key={`category-${index}`}
                  onClick={() => router.push(item.link)}
                >
                  <Link href={item.link} className="text-xs  font-semibold">
                    {item.title[locale]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid gap-6 pr-4 mt-6 md:pr-8 sm:mt-8 xl:px-0">
          {products?.map((item, index) => {
            const priority = index == 0 ? Priority.first : undefined;
            const priorityBorder = priority ? `border-2 border-primary` : "";
            return (
              <POSCardV2
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

export default BusinessCategorySectionV2;
