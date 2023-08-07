import IcMobileLogo from "assets/icons/ic_mobile_logo.svg";
import IcPhone from "assets/icons/ic_phone.svg";
import IcMenu from "assets/icons/ic_menu.svg";
import DesktopLogo from "assets/images/pos_logo.png";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/router";
import { MainMenu } from "utils/StringUtil";
import useTrans from "hooks/useTrans";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import SideBar from "./SideBar";
import MenuDrawer from "./MenuDrawer";
import ColorUtils from "utils/ColorUtils";
import { Locale } from "models/app_configs";
import { twMerge } from "tailwind-merge";
import useSideBar from "stores/useSideBar";
import { RightSideBarType } from "./RightSideBar";

const phoneNumber = "1-888-410-2188";

const NavItems = [
  MainMenu["questionnaire"],
  MainMenu["posreview"],
  MainMenu["blog"],
  MainMenu["about"],
  MainMenu["contact"],
];

const NavPages = ({ locale }: { locale: Locale }) => {
  const [curIndex, setIndex] = useState<Number>(-1);
  const openSideBar = useSideBar((state) => state.openSideBar);

  const handleClick = (index: Number) => () => {
    if (index == 0) {
      openSideBar(RightSideBarType.Questionnaire);
    }
    index != curIndex && setIndex(index);
  };

  return (
    <ul className="px-4 menu-horizontal hidden lg:flex flex-1">
      {NavItems.map((item, index) => {
        if (index == 0) {
        }
        return (
          <li className="mr-4 p-2 txt-md-bold" key={`${index}-navbar-item`}>
            <Link
              href={item.link}
              className={twMerge(
                "rounded-lg hover:text-secondary",
                index == curIndex && " text-secondary"
              )}
              onClick={handleClick(index)}
            >
              {item.title[locale]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

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

      <NavPages locale={locale} />
      <div className="flex flex-row justify-center items-center gap-4 ml-4">
        <Button
          title={phoneNumber}
          isOutLine
          classname="md:px-3 lg:text-base lg:h-12"
          style={{
            borderColor: ColorUtils.primary,
          }}
          onClick={() => router.push(`tel:${phoneNumber}`)}
          leftIcon={<IcPhone className="text-lg text-primary" />}
        />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default React.memo(Navbar);
