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
  itemListClassName?: string;
  selectBorderColor?: string;
}

const SelectedList = <T extends object | string>({
  data,
  onItemSelected,
  itemBuilder,
  classname = "",
  itemListClassName = "",
  selectIndex = -1,
  selectBorderColor = "border-secondary",
}: SelectedList<T>) => {
  const [cindex, setIndex] = useState<number>(selectIndex);

  const onItemClick = (index: number) => {
    setIndex(index);
    onItemSelected && onItemSelected(index);
  };

  return (
    <div
      className={twMerge(
        `grid grid-cols-1 gap-4 items-center justify-center ${classname} }`
      )}
    >
      {data.map((item: T, index) => {
        return (
          <div
            key={`item-${index}`}
            className={twMerge(
              `w-full card border-2 cursor-pointer  hover:border-secondary border-neutral-300 ${
                cindex == index ? selectBorderColor : ""
              }  ${itemListClassName}`
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
