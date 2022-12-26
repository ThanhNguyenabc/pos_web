import { IcMenu, Logo, IcMobileLogo, IcPhone } from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "./MenuDrawer";

const MenuItem = [
  {
    title: "Free POS",
  },
  {
    title: "POS Reviews",
  },
  {
    title: "About Us",
  },
  {
    title: "Blog",
  },
  {
    title: "Contact",
  },
];
const DesktopMenu = ["freepos", "posreview", "about", "blog", "contact"];

const Header = () => {
  return (
    <div className="container-lg-screen flex justify-between items-center px-6 py-4 ">
      <div className="flex">
        <label htmlFor="my-drawer" className="py-2 mr-5 lg:hidden">
          <Image src={IcMenu} alt="" id="my-drawer" />
        </label>

        <Link href={"/"}>
          <Image src={IcMobileLogo} alt="" className="md:hidden" />
          <Image
            src={Logo}
            width={150}
            height={32}
            alt="logo"
            className="hidden md:block"
          />
        </Link>
      </div>

      <ul className="menu menu-horizontal hidden lg:flex flex-1">
        <li className="ml-3 txt-md-bold">
          <Link href={Menu["freepos"].route}>{Menu["freepos"].title}</Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={Menu["posreview"].route}>{Menu["posreview"].title}</Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={Menu["about"].route}>{Menu["about"].title}</Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={Menu["blog"].route}>{Menu["blog"].title}</Link>
        </li>
        <li className="ml-3 txt-md-bold">
          <Link href={Menu["contact"].route}>{Menu["contact"].title}</Link>
        </li>
      </ul>
      <div className="flex">
        <Image src={IcPhone} alt="" width={18} height={18} />
        <div className="ml-4">
          <p className="txt-sm text-neutral-600">Support 24/7</p>
          <p className="txt-large-bold">1-888-410-2188</p>
        </div>
        <div className="hidden xl:inline-block ml-10">
          <button className="btn-md-primary">Find your POS</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
