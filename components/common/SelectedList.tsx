import React, { ReactElement, useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

interface SelectedList<T extends object | string> {
  data: Array<T>;
  selectIndex?: number;
  renderItem: (item: T, index: number, isSelect?: boolean) => ReactElement;
  onItemSelected?: (index: number) => void;
  className?: string;
  itemListClassName?: string | ((index: number) => string);
  selectBorderColor?: string;
}

const ItemList = React.memo(
  ({
    child,
    isSelect,
    selectedColor = "border-secondary",
    onClick,
  }: {
    child: ReactElement;
    isSelect: boolean;
    selectedColor: string;
    onClick: () => void;
  }) => {
    const baseItemStyle =
      "w-full border-2 rounded-lg cursor-pointer hover:border-secondary hover:bg-blue-light border-neutral-300";

    return React.cloneElement(child, {
      className: twMerge(
        `${baseItemStyle}`,
        isSelect && selectedColor && "bg-blue-light",
        child.props["className"]
      ),
      onClick: onClick,
    });
  }
);
ItemList.displayName = "ItemList";

const SelectedList = <T extends object | string>({
  data,
  onItemSelected,
  renderItem,
  className = "",
  selectIndex = -1,
  selectBorderColor = "border-secondary",
}: SelectedList<T>) => {
  const [curIndex, setIndex] = useState<number>(selectIndex);

  const onItemClick = useCallback(
    (index: number) => () => {
      setIndex(index);
      onItemSelected && onItemSelected(index);
    },
    [onItemSelected]
  );

  const Items = data.map((item: T, index) => {
    const Item = renderItem(item, index, curIndex == index);
    return (
      <ItemList
        key={`item-${index}-${item.toString()}`}
        isSelect={curIndex === index}
        selectedColor={selectBorderColor}
        child={Item}
        onClick={onItemClick(index)}
      />
    );
  });

  return (
    <div className={twMerge(`grid grid-cols-1 gap-4`, className)}>{Items}</div>
  );
};

export default SelectedList;
