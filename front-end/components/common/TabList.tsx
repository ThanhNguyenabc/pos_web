import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const TabItem = ({
  name,
  onClick,
  className,
}: {
  name: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      id={`tab-${name.toLowerCase()}`}
      className={`tab min-w-max max-w-5xl txt-md-bold h-12  ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

interface TabListProps {
  tabList: Array<{ title: string } & object>;
  initSelectIndex?: number;
  selectClassName?: string;
  className?: string;
  unSelectClassName?: string;
  tabItemStyle?: (isSelect: boolean) => string;
  onSelectedIndex?: (index: number) => void;
}

const TabList = ({
  tabList,
  className,
  onSelectedIndex,
  initSelectIndex,
  tabItemStyle,
}: TabListProps) => {
  const [currentIndex, setSelectIndex] = useState(initSelectIndex ?? 0);

  useEffect(() => {
    setSelectIndex(initSelectIndex ?? 0);
  }, [initSelectIndex]);

  return (
    <div
      className={twMerge(
        "flex flex-row gap-4 overflow-x-auto items-center",
        className
      )}
    >
      {tabList.map((item, index) => {
        return (
          <TabItem
            key={`tab-${index}-${item}`}
            name={item.title}
            className={tabItemStyle && tabItemStyle(currentIndex == index)}
            onClick={() => {
              setSelectIndex(index);
              onSelectedIndex && onSelectedIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default TabList;
