import { IcMenu, Logo, IcPhone, MobileLogoImg } from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import MenuDrawer from "./MenuDrawer";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { MainMenu } from "utils/StringUtil";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className=" flex flex-row w-full justify-between items-center px-4 py-[14px] md:p-6">
      <div className="flex justify-center items-center">
        <Drawer
          open={isOpen}
          direction="left"
          onClose={toggleDrawer}
          style={{ width: "300px" }}
        >
          <MenuDrawer onClose={toggleDrawer} />
        </Drawer>
        <button className="py-2 mr-5 lg:hidden" onClick={toggleDrawer}>
          <IcMenu className="text-2xl" />
        </button>
        <Link href={MainMenu["home"].route}>
          <Image
            src={MobileLogoImg}
            alt="mobile-logo"
            className="w-8 h-8 xl:hidden"
          />
          <Image
            src={Logo}
            width={150}
            height={32}
            alt="logo"
            className="hidden xl:block"
          />
        </Link>
      </div>

      <ul className="menu menu-horizontal hidden lg:flex flex-1 text-neutral-900 ">
        <li className="ml-3 txt-md-bold">
          <Link href={MainMenu["freepos"].route}>
            {MainMenu["freepos"].title}
          </Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={MainMenu["posreview"].route}>
            {MainMenu["posreview"].title}
          </Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={MainMenu["about"].route}>{MainMenu["about"].title}</Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={MainMenu["blog"].route}>{MainMenu["blog"].title}</Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={MainMenu["contact"].route}>
            {MainMenu["contact"].title}
          </Link>
        </li>
      </ul>
      <div className="flex flex-row justify-center items-center">
        <IcPhone className="text-lg" />
        <div className="ml-4">
          <p className="txt-sm text-neutral-600">Support 24/7</p>
          <p className="txt-md-bold lg:text-xl">1-888-410-2188</p>
        </div>
        <Button
          title="Find your POS"
          classname="hidden md:block ml-10 md:h-12 md:text-base lg:text-base"
          onClick={() => router.push(AppRoutes.QuestionnairePage)}
        />
      </div>
    </div>
  );
};

export default React.memo(Header);
