import { IcChervonRight, IcClose, IcMobileLogo } from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppRoutes from "utils/routes";

export const Menu = {
  home: {
    route: AppRoutes.HomePage,
    title: "Home",
  },
  freepos: {
    route: AppRoutes.FreePOSPage,
    title: "Free POS",
  },
  posreview: {
    route: AppRoutes.Categories,
    title: "POS Reviews",
  },
  contact: {
    route: AppRoutes.ContactPage,
    title: "Contact",
  },
  about: {
    route: AppRoutes.AboutPage,
    title: "About",
  },
  // blog: {
  //   route: Blog,
  //   title: "Blog",
  // },
};

const MainMenuItem = ({
  route,
  title,
  onClickItem,
}: {
  route: string;
  title: string;
  onClickItem?: () => void;
}) => {
  return (
    <li key={`item-${title}`}>
      <Link
        href={route}
        onClick={onClickItem}
        className=" flex justify-between txt-large-bold"
      >
        {title}
        <IcChervonRight className="text-[12px]" />
      </Link>
    </li>
  );
};

const SubMenuItem = ({
  route,
  title,
  onClickItem,
}: {
  route: string;
  title: string;
  onClickItem?: () => void;
}) => {
  return (
    <li key={`sub-item-${title}`}>
      <Link
        href={route}
        onClick={onClickItem}
        className="txt-md text-neutral-700"
      >
        {title}
      </Link>
    </li>
  );
};

interface MenuDrawerProps {
  onClose?: () => void;
}

const MenuDrawer = ({ onClose }: MenuDrawerProps) => {
  return (
    <div className="flex-column bg-base-100 ">
      <div className="flex justify-between py-5 px-4">
        <IcMobileLogo className="text-2xl" />
        <button onClick={onClose}>
          <IcClose />
        </button>
      </div>
      <ul className="menu w-full border-y-2 border-neutral-200 py-9 ">
        <MainMenuItem {...Menu["home"]} onClickItem={onClose} />
        <MainMenuItem {...Menu["freepos"]} onClickItem={onClose} />
        <MainMenuItem {...Menu["posreview"]} onClickItem={onClose} />
      </ul>
      <ul className="menu w-full py-6">
        <SubMenuItem {...Menu["about"]} onClickItem={onClose} />
        <SubMenuItem {...Menu["contact"]} onClickItem={onClose} />
        {/* <SubMenuItem {...Menu["blog"]} /> */}
      </ul>
    </div>
  );
};

export default MenuDrawer;
