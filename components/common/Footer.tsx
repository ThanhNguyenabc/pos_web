import { FooterLogo, IcFb, IcInsta, IcLinkedLn } from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { useTranslation } from "react-i18next";
import { CategoryList, OtherItems, ResourceItems } from "utils/StringUtil";
import HeroSection from "./HeroSection";

interface FooterItemProps {
  title: string;
  items: Array<{ title: string; link: string }>;
}

const FooterItems = ({ title, items }: FooterItemProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <p className="txt-sm-bold text-neutral-300 md:text-xl">{title}</p>
      {items.map((item, index) => {
        return (
          <Link
            key={`${item.link}-${index}`}
            href={item.link}
            className="link link-hover txt-sm md:text-base"
          >
            {t(item.title) || title}
          </Link>
        );
      })}
    </div>
  );
};
const Footer = () => {
  return (
    <div className="flex relative bg-neutral-900  text-neutral-400">
      <HeroSection className="py-12 gap-10 md:gap-16 md:py-14 lg:py-16 w-full ">
        <footer className="w-full grid grid-cols-2 gap-8 gap-x-12 lg:gap-16 lg:grid-cols-4">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Image
              src={FooterLogo}
              alt="footer logo"
              className="w-[170px] h-[40px]"
            />
          </div>
          <FooterItems title="POS Reviews" items={CategoryList} />
          <FooterItems title="Resources" items={ResourceItems} />
          <FooterItems title="Company" items={OtherItems} />
        </footer>
        <div className="divider bg-neutral-700 h-px"></div>
        <div className="flex flex-row text-neutral-600 ">
          <p className="flex-1">© 2022 BestPOS. All rights reserved.</p>
          <div className="flex ml-5 gap-6">
            <Link
              href={"https://www.facebook.com/officialextrabread"}
              target="_blank"
            >
              <IcFb className="text-2xl" />
            </Link>
            <Link
              href={"https://www.instagram.com/official_extrabread/"}
              target="_blank"
            >
              <IcInsta className="text-2xl" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/extrabread/"}
              target="_blank"
            >
              <IcLinkedLn className="text-2xl" />
            </Link>
          </div>
        </div>
      </HeroSection>
    </div>
  );
};

export default React.memo(Footer);
