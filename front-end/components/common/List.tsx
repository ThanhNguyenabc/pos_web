import React, { ReactElement, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ListProps<T> {
  data: Array<T>;
  selectIndex?: number;
  itemBuilder: (item: T, index: number, isSelect?: boolean) => ReactElement;
  onItemSelected?: (index: number) => void;
  classname?: string;
  itemclassname?: string;
  showDivider?: boolean;
}

const List = <T extends object | string>({
  selectIndex = -1,
  data,
  itemBuilder,
  showDivider,
  onItemSelected,
  classname,
  itemclassname,
}: ListProps<T>) => {
  const [cindex, setIndex] = useState<number>(selectIndex);

  const onItemClick = (index: number) => {
    setIndex(index);
    onItemSelected && onItemSelected(index);
  };

  return (
    <div className={twMerge(`grid grid-cols-1 gap-4 md:gap-6 ${classname} }`)}>
      {data.map((item: T, index) => {
        return (
          <div
            key={`item-list-${index}`}
            className="flex cursor-pointer flex-col"
            onClick={() => {
              onItemClick(index);
              onItemSelected && onItemSelected(index);
            }}
          >
            {itemBuilder(item, index, cindex == index)}
            {index < data.length - 1 && showDivider && (
              <div className="divider bg-neutral-100 h-[1px]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default List;
