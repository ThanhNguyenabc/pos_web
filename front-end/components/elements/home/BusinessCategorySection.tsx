import { IcRightArrow } from "assets/AssetUtil";
import React from "react";
import Image from "next/image";
import { Button } from "components/common/Button";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { CategoryList } from "utils/StringUtil";
import List from "components/common/List";

const BusinessCategorySection = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col px-4 py-12 gap-10 md:px-8 md:py-14 md:gap-8 lg:gap-16  lg:p-[100px] xl:p-[120px]">
      <div className="flex justify-between ">
        <p className="txt-heading-medium flex-1 text-center md:text-left max-w-lg md:text-5xl md:font-extrabold md:leading-[56px]">
          <span className="text-secondary">Point-of-sale</span> for all business
          categories
        </p>
        <div className="hidden md:flex md:items-end">
          <Button
            title="View all"
            isOutLine={true}
            rightIcon={<IcRightArrow className="ml-2.5 text-xl" />}
            onClick={() => router.push(AppRoutes.CategoryPage)}
          />
        </div>
      </div>
      <List
        data={CategoryList}
        classname="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        itemBuilder={(item, index) => {
          return (
            <div
              className="card items-center p-4 bg-neutral-100 h-[168px] md:h-[200px] md:p-6"
              key={`category-${index}`}
            >
              <Image src={item.img} alt="pizza" width={120} />
              <div className="flex justify-items-center items-center h-full mt-2">
                <h2 className="txt-md-bold text-center ">{item.title}</h2>
              </div>
            </div>
          );
        }}
        onItemSelected={(index) => {
          router.push(CategoryList[index].link);
        }}
      />
      <div className=" md:hidden">
        <Button
          classname="w-full"
          title="View all"
          isOutLine={true}
          rightIcon={<IcRightArrow className="ml-2.5 text-xl" />}
        />
      </div>
    </div>
  );
};

export default BusinessCategorySection;
