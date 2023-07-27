import React, { ReactElement, useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SelectedList<T extends object | string> {
  data: Array<T>;
  selectIndex?: number;
  itemBuilder: (item: T, index: number) => ReactElement<"div">;
  onItemSelected?: (index: number) => void;
  classname?: string;
  itemListClassName?: string | ((index: number) => string);
  selectBorderColor?: string;
}

const SelectedList = <T extends object | string>({
  data,
  onItemSelected,
  itemBuilder,
  classname = "",
  itemListClassName,
  selectIndex = -1,
  selectBorderColor = "border-secondary",
}: SelectedList<T>) => {
  const [cindex, setIndex] = useState<number>(selectIndex);

  const onItemClick = useCallback((index: number) => {
    setIndex(index);
    onItemSelected && onItemSelected(index);
  }, []);

  const baseItemStyle =
    "w-full border-2 rounded-lg cursor-pointer hover:border-secondary border-neutral-300";

  return (
    <div className={twMerge(`grid grid-cols-1 gap-4`, classname)}>
      {data.map((item: T, index) => {
        const itemStyle =
          typeof itemListClassName == "string"
            ? itemListClassName
            : itemListClassName?.(index) || "";
        return (
          <div
            key={`item-${index}`}
            className={twMerge(
              `${baseItemStyle} ${cindex == index ? selectBorderColor : ""}`,
              itemStyle
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
