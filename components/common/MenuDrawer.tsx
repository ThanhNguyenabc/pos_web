import { IcChervonRight, IcClose, IcMobileLogo } from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { MainMenu, OtherItems, ResourceItems } from "utils/StringUtil";

interface MenuDrawerProps {
  onClose?: () => void;
}

const MenuBlock = ({
  title,
  items,
  closeModal,
}: {
  title: string;
  closeModal?: () => void;
  items: Array<{ title: string; link: string }>;
}) => {
  const { t } = useTranslation();
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
            {t(item.title) || title}
          </Link>
        );
      })}
    </div>
  );
};

const MenuDrawer = ({ onClose }: MenuDrawerProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex-column bg-base-100 px-4">
      <div className="flex justify-between py-5">
        <IcMobileLogo className="text-[32px]" />
        <button onClick={onClose}>
          <IcClose />
        </button>
      </div>
      <div className="flex flex-col gap-8 my-11">
        <Link
          href={MainMenu["home"].route}
          onClick={onClose}
          className=" flex justify-between txt-md-bold"
        >
          {t(MainMenu["home"].title) || MainMenu["home"].title}
          <IcChervonRight className="text-[12px]" />
        </Link>
        <Link
          href={MainMenu["posreview"].route}
          onClick={onClose}
          className=" flex justify-between txt-md-bold"
        >
          {t(MainMenu["posreview"].title) || MainMenu["posreview"].title}
          <IcChervonRight className="text-[12px]" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-10 ">
        <MenuBlock
          title="Resources"
          items={ResourceItems}
          closeModal={onClose}
        />
        <MenuBlock title="Company" items={OtherItems} closeModal={onClose} />
      </div>
    </div>
  );
};

export default MenuDrawer;
