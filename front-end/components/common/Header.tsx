import { IcMenu, Logo, IcPhone, MobileLogoImg } from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import MenuDrawer, { Menu } from "./MenuDrawer";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="container-screen flex flex-row w-full justify-between items-center px-4 py-5 md:p-6">
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
        <Link href={Menu["home"].route}>
          <Image src={MobileLogoImg} alt="mobile-logo" className="w-8 h-8 md:hidden" />
          <Image
            src={Logo}
            width={150}
            height={32}
            alt="logo"
            className="hidden md:block"
          />
        </Link>
      </div>

      <ul className="menu menu-horizontal hidden lg:flex flex-1 text-neutral-900 ">
        <li className="ml-3 txt-md-bold">
          <Link href={Menu["freepos"].route}>{Menu["freepos"].title}</Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={Menu["posreview"].route}>{Menu["posreview"].title}</Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={Menu["about"].route}>{Menu["about"].title}</Link>
        </li>
        {/* <li className="ml-3 txt-md-bold">
          <Link href={Menu["blog"].route}>{Menu["blog"].title}</Link>
        </li> */}
        <li className="ml-3 txt-md-bold">
          <Link href={Menu["contact"].route}>{Menu["contact"].title}</Link>
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
          classname="hidden md:block ml-10 md:h-12 md:text-base"
          onClick={() => router.push(AppRoutes.QuestionnairePage)}
        />
      </div>
    </div>
  );
};

export default React.memo(Header);
