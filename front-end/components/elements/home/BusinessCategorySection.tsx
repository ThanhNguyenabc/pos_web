import {
  PizzeriaCategory,
  QuickServiceCategory,
  RetailCategory,
  RestaurantCategory,
  BarCategory,
  BusinessCategory,
  IcRightArrow,
} from "assets/AssetUtil";
import React from "react";
import Image from "next/image";
import { Button } from "components/common/Button";

export const Categories = [
  {
    name: "Pizza",
    link: PizzeriaCategory,
  },
  {
    name: "Quick Service Restaurants",
    link: QuickServiceCategory,
  },
  {
    name: "Retail Stores",
    link: RetailCategory,
  },
  {
    name: "Full Service Restaurants",
    link: RestaurantCategory,
  },
  {
    name: "Bar & Night Clubs",
    link: BarCategory,
  },
  {
    name: "Small Businesses",
    link: BusinessCategory,
  },
];

const BusinessCategorySection = () => {
  return (
    <div className="flex flex-col px-4 my-12 lg:mx-[120px]">
      <div className="flex justify-between ">
        <p className="txt-heading-medium flex-1 text-center md:text-left max-w-md">
          <span className="text-secondary">Point-of-sale</span> for all business
          categories
        </p>
        <div className="hidden md:flex md:items-end">
          <Button
            title="View all"
            type="OUTLINE_MEDIUM"
            rightIcon={
              <Image className="ml-2.5" src={IcRightArrow} alt="view all" />
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-y-8 md:gap-x-8 py-10 md:py-12">
        {Categories.map((item, index) => {
          return (
            <div className="card items-center py-4">
              <Image src={item.link} alt="pizza" width={120} />
              <div className="flex justify-items-center items-center h-full mt-2">
                <h2 className="txt-md-bold  text-center ">{item.name}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" md:hidden">
        <Button
          classname="w-full"
          title="View all"
          type="OUTLINE_MEDIUM"
          rightIcon={
            <Image className="ml-2.5" src={IcRightArrow} alt="view all" />
          }
        />
      </div>
    </div>
  );
};

export default BusinessCategorySection;
