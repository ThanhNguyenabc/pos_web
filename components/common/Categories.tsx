import useTrans from "hooks/useTrans";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface CategoryProps {
  items: Array<any>;
  selectedIndex?: Number;
}

const Categories = ({ items, selectedIndex }: CategoryProps) => {
  const { locale } = useTrans();
  const [current, setIndex] = useState(selectedIndex ?? -1);
  return (
    <div className="mt-2 w-full overflow-x-auto scroll scrollbar-hide items-end">
      <div className="flex flex-nowrap mx-auto w-fit">
        {items.map((item, index) => {
          const mr = index < items.length - 1 ? "mr-2 md:mr-4" : "xl:mr-0";
          const Icon = item.icon;

          return (
            <Link
              key={`category-item-${item.link}`}
              href={item.link}
              onClick={() => setIndex(index)}
              className={twMerge(
                `block text-sm font-semibold py-[10px] min-w-fit lg:min-w-[100px] px-4 border rounded-3xl border-neutral-300 bg-white
               hover:bg-neutral-900 hover:text-white`,
                mr,
                current == index && "bg-neutral-900 text-white"
              )}
            >
              <div className="flex flex-col items-center gap-1">
                <Icon className="text-xl" />
                {item.title[locale]}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
