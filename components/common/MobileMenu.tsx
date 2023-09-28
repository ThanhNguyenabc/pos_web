import IcChervonRight from "assets/icons/ic_chervon_right.svg";
import IcClose from "assets/icons/ic_close.svg";
import IcMobileLogo from "assets/icons/ic_mobile_logo.svg";
import useChangeLanguage from "hooks/useChangeLanguage";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import Attribute from "models/attribute";
import Link from "next/link";
import React from "react";
import { Languages } from "utils/StringUtil";
import { Button } from "./Button";
import ColorUtils from "utils/ColorUtils";
import { NavBarItems } from "utils/routes";
import useSideBar from "stores/useSideBar";
import { RightSideBarType } from "./RightSideBar";

const MenuBlock = ({
  title,
  items,
  closeModal,
}: {
  title: string;
  closeModal?: () => void;
  items: Array<{ title: Attribute; link: string }>;
}) => {
  const { locale } = useTrans();
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <p className="txt-md-bold md:text-xl">{title}</p>
      {items.map((item, index) => {
        return (
          <Link
            key={`${item.link}-${index}`}
            href={item.link}
            onClick={closeModal}
            className="link link-hover txt-md text-neutral-700 md:text-base"
          >
            {item.title[locale]}
          </Link>
        );
      })}
    </div>
  );
};

const MultipleLang = () => {
  const { isHydrated, onChangeLanguage, lang } = useChangeLanguage();
  if (!isHydrated) return <></>;
  return (
    <div className="flex w-full gap-4 md:hidden">
      {Object.keys(Languages).map((key, index) => {
        const item = Languages[key as keyof typeof Languages];
        const Icon = item.icon;
        return (
          <Button
            title={item.title}
            style={{
              color: ColorUtils["neutral-900"],
              background: key == lang ? ColorUtils["neutral-100"] : "white",
            }}
            classname="flex-1"
            key={`item-language-${index}`}
            leftIcon={<Icon className=" text-2xl" />}
            onClick={() => onChangeLanguage(key as Locale)}
          />
        );
      })}
    </div>
  );
};

const MobileMenu = ({ onClose }: { onClose?: () => void }) => {
  const { t, locale } = useTrans();
  const openSideBar = useSideBar((state) => state.openSideBar);

  const onMenuClick = (index: number) => () => {
    if (index === 1) {
      openSideBar(RightSideBarType.Questionnaire);
    }
    onClose?.();
  };

  return (
    <div className="flex-column bg-base-100 px-4">
      <div className="flex justify-between py-5">
        <IcMobileLogo className="text-[32px]" />
        <button onClick={onClose}>
          <IcClose />
        </button>
      </div>
      <MultipleLang />
      <div className="flex flex-col mt-14 gap-10">
        {NavBarItems.map((item, index) => (
          <Link
            key={`mobile-item-${item.title}-${index}`}
            href={item.link}
            onClick={onMenuClick(index)}
            className="flex justify-between txt-md-bold items-center"
          >
            {item.title[locale]}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
