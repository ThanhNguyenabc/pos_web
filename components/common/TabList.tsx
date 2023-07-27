import useTrans from "hooks/useTrans";
import Attribute from "models/attribute";
import React, { useEffect, useRef, useState, useCallback } from "react";
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
  const { t } = useTrans();

  return (
    <button
      id={`tab-${name.toLowerCase()}`}
      className={twMerge("tab min-w-max txt-md-bold h-12", className)}
      onClick={onClick}
    >
      {t(name) || name}
    </button>
  );
};

interface TabListProps {
  tabList: Array<{ title: string | Attribute } & object>;
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
  const { locale } = useTrans();
  const [currentIndex, setSelectIndex] = useState(initSelectIndex ?? 0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<{
    isDown: boolean;
    startX: number;
    scrollLeft: number;
  }>({
    isDown: false,
    scrollLeft: 0,
    startX: 0,
  });

  useEffect(() => {
    setSelectIndex(initSelectIndex ?? 0);
  }, [initSelectIndex]);

  const mouseDown = useCallback((e: any) => {
    setData((prev) => ({
      isDown: true,
      startX: e.pageX - (tabListRef.current?.offsetLeft || 0),
      scrollLeft: tabListRef.current?.scrollLeft || 0,
    }));
  }, []);

  const mouseUp = useCallback(() => {
    setData({ isDown: false, startX: 0, scrollLeft: 0 });
  }, []);

  const mouseMove = useCallback(
    (e: any) => {
      if (!data.isDown) return;
      e.preventDefault();
      const x = e.pageX - (tabListRef.current?.offsetLeft || 0);
      const walk = (x - data.startX) * 2;
      tabListRef.current!.scrollLeft = data.scrollLeft - walk;
    },
    [data]
  );

  return (
    <div
      ref={tabListRef}
      onMouseDown={mouseDown}
      onMouseLeave={mouseUp}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
      className={twMerge(
        "flex flex-row gap-4 overflow-x-scroll scrollbar-hide items-center mx-auto self-center",
        className
      )}
    >
      {tabList.map((item, index) => {
        const name =
          typeof item.title === "object" ? item.title[locale] : item.title;
        return (
          <TabItem
            key={`tab-${index}-${item}`}
            name={name || ""}
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
