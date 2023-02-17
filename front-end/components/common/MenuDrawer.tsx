import { IcChervonRight, IcClose, MobileLogoImg } from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppRoutes from "utils/routes";
import { MainMenu } from "utils/StringUtil";



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
        <Image src={MobileLogoImg} alt="mobile-logo" className="w-6 h-6" />
        <button onClick={onClose}>
          <IcClose />
        </button>
      </div>
      <ul className="menu w-full border-y-2 border-neutral-200 py-9 ">
        <MainMenuItem {...MainMenu["home"]} onClickItem={onClose} />
        <MainMenuItem {...MainMenu["freepos"]} onClickItem={onClose} />
        <MainMenuItem {...MainMenu["posreview"]} onClickItem={onClose} />
      </ul>
      <ul className="menu w-full py-6">
        <SubMenuItem {...MainMenu["about"]} onClickItem={onClose} />
        <SubMenuItem {...MainMenu["contact"]} onClickItem={onClose} />
        <SubMenuItem {...MainMenu["blog"]} />
      </ul>
    </div>
  );
};

export default MenuDrawer;
