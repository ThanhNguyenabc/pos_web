import IcMobileLogo from "assets/icons/ic_mobile_logo.svg";
import IcPhone from "assets/icons/ic_phone.svg";
import IcMenu from "assets/icons/ic_menu.svg";
import DesktopLogo from "assets/images/pos_logo.png";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/router";
import useTrans from "hooks/useTrans";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import SideBar from "./SideBar";
import MobileMenu from "./MobileMenu";
import ColorUtils from "utils/ColorUtils";
import { Locale } from "models/app_configs";
import { twMerge } from "tailwind-merge";
import useSideBar from "stores/useSideBar";
import { RightSideBarType } from "./RightSideBar";
import { AppRoutes, NavBarItems } from "utils/routes";

const phoneNumber = "1-888-410-2188";

const NavMenuList = ({ locale }: { locale: Locale }) => {
  const [curIndex, setIndex] = useState<Number>(-1);
  const openSideBar = useSideBar((state) => state.openSideBar);

  const handleClick = (index: Number) => () => {
    if (index == 1) {
      openSideBar(RightSideBarType.Questionnaire);
    }
    index != curIndex && setIndex(index);
  };

  return (
    <ul className="px-4 menu-horizontal hidden lg:flex flex-1 items-center">
      {NavBarItems.map((item, index) => {
        if (index == 0) {
          return (
            <li className=" mr-4" key={`${index}-navbar-item`}>
              <Link
                href={item.link}
                aria-label="logo"
                onClick={handleClick(index)}
              >
                <IcMobileLogo className="block text-[40px] xl:hidden" />

                <Image
                  src={DesktopLogo}
                  width={271}
                  height={60}
                  className="hidden xl:block max-w-[180px] lg:w[180px] h-auto"
                  alt="pos-logo"
                />
              </Link>
            </li>
          );
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
    <div className="flex w-full items-center px-4 py-[14px] justify-between lg:justify-normal md:px-6">
      <SideBar
        isOpen={isOpenMenu}
        closeSideBar={toggleDrawer}
        direction="left"
        className=" max-w-md"
      >
        <MobileMenu onClose={toggleDrawer} />
      </SideBar>
      <div className="flex lg:hidden">
        <button
          className="py-2 mr-5 lg:hidden"
          onClick={toggleDrawer}
          aria-label="menu-icon"
        >
          <IcMenu className="text-2xl" />
        </button>
        <Link href={AppRoutes.HomePage}>
          <IcMobileLogo className="block text-[40px]" />
        </Link>
      </div>

      <NavMenuList locale={locale} />
      <div className="flex justify-end items-center gap-4 ml-4">
        <Button
          title={phoneNumber}
          isOutLine
          classname="md:px-3 lg:text-base lg:h-12 hover:bg-primary hover:text-white"
          style={{
            borderColor: ColorUtils.primary,
          }}
          onClick={() => router.push(`tel:${phoneNumber}`)}
          leftIcon={
            <IcPhone
              className="text-lg hover:text-white"
              style={{
                path: {
                  fill: ColorUtils["blue-light"],
                },
              }}
            />
          }
        />
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default React.memo(Navbar);
