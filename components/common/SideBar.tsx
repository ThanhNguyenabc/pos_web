import React from "react";
import { twMerge } from "tailwind-merge";

export type Direction = "right" | "left";

interface SideBarProps {
  isOpen: boolean;
  closeSideBar?: () => void;
  direction: Direction;
  children?: React.ReactNode;
  className?: string;
}
const SideBar = ({
  isOpen = false,
  closeSideBar,
  className,
  direction = "right",
  children,
}: SideBarProps) => {
  const commonStyle =
    "w-screen max-w-[700px] bg-white absolute top-0 h-full shadow-xl overflow-y-scroll delay-400 duration-500 ease-in-out transition-all transform";

  return (
    <div
      className={twMerge(
        "fixed overflow-hidden z-20 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out transition-opacity duration-700",
        isOpen && "opacity-100 translate-x-0",
        !isOpen && " delay-500 opacity-0 translate-x-full"
      )}
    >
      <section
        className="w-screen h-full cursor-pointer"
        onClick={closeSideBar}
      ></section>

      <section
        className={twMerge(
          commonStyle,
          className,
          direction == "right" ? "right-0" : "left-0",
          isOpen && "translate-x-0",
          !isOpen &&
            (direction == "right" ? "translate-x-full" : "-translate-x-full")
        )}
      >
        {children}
      </section>
    </div>
  );
};
export default React.memo(SideBar);
