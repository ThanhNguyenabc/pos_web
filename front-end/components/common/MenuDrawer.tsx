import { IcChervonRight, IcClose, IcMobileLogo } from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { About, Blog, Contact, FreePOS, Home, POSReview } from "utils/routes";

export const Menu = {
  home: {
    route: Home,
    title: "Home",
  },
  freepos: {
    route: FreePOS,
    title: "Free POS",
  },
  posreview: {
    route: POSReview,
    title: "POS Reviews",
  },
  contact: {
    route: Contact,
    title: "Contact",
  },
  about: {
    route: About,
    title: "About",
  },
  blog: {
    route: Blog,
    title: "Blog",
  },
};

export const closeDrawer = () => {
  document.getElementById("my-drawer")?.click();
};

const MainMenuItem = ({ route, title }: { route: string; title: string }) => {
  return (
    <li>
      <Link
        href={route}
        onClick={closeDrawer}
        className=" flex justify-between txt-large-bold"
      >
        {title}
        <Image src={IcChervonRight} alt="arrow" />
      </Link>
    </li>
  );
};

const SubMenuItem = ({ route, title }: { route: string; title: string }) => {
  return (
    <li>
      <Link
        href={route}
        onClick={closeDrawer}
        className="txt-md text-neutral-700"
      >
        {title}
      </Link>
    </li>
  );
};

const MenuDrawer = () => {
  return (
    <div className="flex-column bg-base-100">
      <div className="flex justify-between py-5 px-4">
        <Image src={IcMobileLogo} alt="logo-icon" />

        <button onClick={closeDrawer}>
          <Image src={IcClose} alt="" />
        </button>
      </div>
      <ul className="menu w-full border-y-2 border-neutral-200 py-9 ">
        <MainMenuItem {...Menu["home"]} />
        <MainMenuItem {...Menu["freepos"]} />
        <MainMenuItem {...Menu["posreview"]} />
      </ul>
      <ul className="menu w-full py-6">
        <SubMenuItem {...Menu["about"]} />
        <SubMenuItem {...Menu["contact"]} />
        <SubMenuItem {...Menu["blog"]} />
      </ul>
    </div>
  );
};

export default MenuDrawer;
