import { PizzeriaCategory } from "assets/AssetUtil";
import Image, { StaticImageData } from "next/image";
import React, { ReactElement, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SelectedList<T extends object | string> {
  data: Array<T>;
  selectIndex?: number;
  itemBuilder: (item: T, index: number) => ReactElement;
  onItemSelected?: (index: number) => void;
  classname?: string;
  itemclassname?: string;
}

const SelectedList = <T extends object | string>({
  data,
  onItemSelected,
  itemBuilder,
  classname = "",
  itemclassname = "",
  selectIndex = -1,
}: SelectedList<T>) => {
  const [cindex, setIndex] = useState<number>(selectIndex);

  const onItemClick = (index: number) => {
    setIndex(index);
    onItemSelected && onItemSelected(index);
  };

  return (
    <div
      className={twMerge(
        `grid grid-cols-1 gap-4 px-4 items-center justify-center md:gap-6 ${classname} }`
      )}
    >
      {data.map((item: T, index) => {
        return (
          <div
            className={twMerge(
              `w-full card border-2 cursor-pointer mx-auto hover:border-secondary ${
                cindex == index ? "border-secondary" : "border-neutral-100"
              } ${itemclassname}`
            )}
            onClick={() => onItemClick(index)}
          >
            {itemBuilder(item, index)}
          </div>
        );
      })}
    </div>
  );
};

export default SelectedList;
