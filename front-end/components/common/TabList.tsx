import React, { useEffect, useState } from "react";
import ColorUtils from "utils/ColorUtils";

const TabItem = ({
  name,
  isSelected,
  onClick,
}: {
  name: string;
  isSelected: boolean;
  onClick?: () => void;
}) => (
  <button
    className={`tab min-w-max  max-w-5xl txt-md-bold h-12 rounded-lg  border-2 border-neutral-300   ${
      isSelected
        ? " bg-secondary text-white border-secondary"
        : "text-neutral-900 bg-white"
    } `}
    onClick={onClick}
  >
    {name}
  </button>
);

interface TabListProps {
  tabList: Array<{ title: string } & object>;
  selectIndex?: number;
  onSelectedIndex?: (index: number) => void;
}

const TabList = ({ tabList, onSelectedIndex, selectIndex }: TabListProps) => {
  const [currentIndex, setSelectIndex] = useState(0);

  useEffect(() => {
    setSelectIndex(selectIndex || 0);
  }, [selectIndex]);

  return (
    <div className="flex flex-row gap-4 overflow-auto	">
      {tabList.map((item, index) => (
        <TabItem
          key={`tab-${index}`}
          name={item.title}
          isSelected={index == currentIndex}
          onClick={() => {
            setSelectIndex(index);
            onSelectedIndex && onSelectedIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default TabList;
