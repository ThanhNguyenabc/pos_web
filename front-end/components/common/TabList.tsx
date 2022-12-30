import React, { useState } from "react";
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
  tabList: Array<string>;
  onSelectedIndex?: (index: number) => void;
}

const TabList = ({ tabList, onSelectedIndex }: TabListProps) => {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <div className="flex flex-row gap-4 overflow-auto	">
      {tabList.map((item, index) => (
        <TabItem
          name={item}
          isSelected={index == selectIndex}
          onClick={() => setSelectIndex(index)}
        />
      ))}
    </div>
  );
};

export default TabList;
