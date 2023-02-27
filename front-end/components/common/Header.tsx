import {
  IcMenu,
  Logo,
  IcPhone,
  MobileLogoImg,
  IcAmericanFlag,
} from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./Button";
import MenuDrawer from "./MenuDrawer";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { Languages, MainMenu } from "utils/StringUtil";
import { useTranslation } from "react-i18next";
import i18n from "i18";

const phoneNumber = "1-888-410-2188";

const NavItems = [
  MainMenu["freepos"],
  MainMenu["posreview"],
  MainMenu["about"],
  MainMenu["blog"],
  MainMenu["contact"],
];
const Header = () => {
  const router = useRouter();
  const [language, setLanugage] = useState<{
    id: string;
    icon: React.ElementType;
  }>(Languages[0]);

  const LanugageIcon = language.icon;

  const { t } = useTranslation();

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

      <ul className="menu menu-horizontal hidden lg:flex flex-1 text-neutral-900  ">
        {NavItems.map((item, index) => {
          return (
            <li className="ml-3 txt-md-bold" key={`${index}-navbar-item`}>
              <Link href={item.route} className="rounded-lg">
                {t(item.title)}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row justify-center items-center gap-4">
        <Link href={`tel:${phoneNumber}`}>
          <IcPhone className="text-lg" />
        </Link>
        <div className="ml-4">
          <p className="txt-sm text-neutral-600">{t("support")}</p>
          <p className="txt-md-bold lg:text-xl">{phoneNumber}</p>
        </div>
        <Button
          title="Find your POS"
          classname="hidden md:block md:h-12 md:text-base lg:text-base"
          onClick={() => router.push(AppRoutes.QuestionnairePage)}
        />

        {/* <div className="dropdown dropdown-hover dropdown-end ">
          <label
            tabIndex={0}
            className="btn btn-ghost border-neutral-300 border m-1 px-3"
          >
            {<LanugageIcon className="text-2xl" />}
          </label>

          <div
            tabIndex={0}
            className="dropdown-content flex flex-row gap-4 p-3 shadow bg-base-100 rounded-box  "
          >
            {Languages.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={`${item.id}-${index}`}
                  onClick={() => {
                    setLanugage(item);
                    i18n.changeLanguage(item.id);
                  }}
                >
                  <Icon className=" text-2xl" />
                </button>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default React.memo(Header);
