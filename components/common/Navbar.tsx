import IcMobileLogo from "assets/icons/ic_mobile_logo.svg";
import IcPhone from "assets/icons/ic_phone.svg";
import IcMenu from "assets/icons/ic_menu.svg";
import DesktopLogo from "assets/images/pos_logo.png";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { MainMenu } from "utils/StringUtil";
import useTrans from "hooks/useTrans";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import SideBar from "./SideBar";
import MenuDrawer from "./MenuDrawer";

const phoneNumber = "888-410-2188";

const NavItems = [
  MainMenu["freepos"],
  MainMenu["posreview"],
  MainMenu["about"],
  MainMenu["blog"],
  MainMenu["contact"],
];
const Navbar = () => {
  const router = useRouter();
  const [isOpenMenu, setOpenMenu] = useState(false);

  const { t, locale } = useTrans();

  const toggleDrawer = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <div className="flex flex-row w-full justify-between items-center px-4 py-[14px] md:px-6">
      <div className="flex justify-center items-center">
        <SideBar
          isOpen={isOpenMenu}
          closeSideBar={toggleDrawer}
          direction="left"
          className=" max-w-md"
        >
          <MenuDrawer onClose={toggleDrawer} />
        </SideBar>
        <button
          className="py-2 mr-5 lg:hidden"
          onClick={toggleDrawer}
          aria-label="menu-icon"
        >
          <IcMenu className="text-2xl" />
        </button>
        <Link href={MainMenu["home"].link} aria-label="logo">
          <IcMobileLogo className="text-[40px] xl:hidden" />

          <Image
            src={DesktopLogo}
            width={180}
            height={44}
            className="hidden xl:block max-w-[180px] lg:w[180px] h-auto"
            alt="pos-logo"
          />
        </Link>
      </div>

      <ul className="menu menu-horizontal hidden lg:flex flex-1">
        {NavItems.map((item, index) => {
          return (
            <li className="ml-3 txt-md-bold" key={`${index}-navbar-item`}>
              <Link href={item.link} className="rounded-lg">
                {item.title[locale]}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row justify-center items-center gap-4 ml-4">
        <Link href={`tel:${phoneNumber}`} aria-label="phone">
          <IcPhone className="text-lg" />
        </Link>
        <div className="ml-4">
          <p className="txt-sm text-neutral-600">{t("support")} 24/7</p>
          <p className="txt-md-bold lg:text-xl">{phoneNumber}</p>
        </div>
        <Button
          title={t("find_your_pos")}
          classname="hidden md:block md:h-12 md:text-base lg:text-base"
          onClick={() => router.push(AppRoutes.QuestionnairePage)}
        />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default React.memo(Navbar);
