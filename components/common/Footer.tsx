import IcInsta from "assets/icons/ic_insta.svg";
import IcFb from "assets/icons/ic_fb.svg";
import IcLinkedLn from "assets/icons/ic_linkedln.svg";

import useTrans from "hooks/useTrans";
import Attribute from "models/attribute";
import Link from "next/link";
import React from "react";
import HeroSection from "./HeroSection";
import Image from "next/image";
import { CategoryList, ResourceItems, OtherItems } from "utils/routes";

interface FooterItemProps {
  title: string;
  items: Array<{ title: Attribute; link: string; isOpenTab?: boolean }>;
}

const FooterItems = ({ title, items }: FooterItemProps) => {
  const { locale } = useTrans();

  return (
    <ul className="flex flex-col gap-4 md:gap-6">
      <li>
        <p className="txt-sm-bold text-neutral-300 md:text-xl">{title}</p>
      </li>

      {items.map((item, index) => {
        return (
          <li key={`-${index}`}>
            <Link
              href={item.link}
              rel="noopener noreferrer"
              target={item.isOpenTab ? "_blank" : "_parent"}
              className="link link-hover txt-sm md:text-base"
            >
              <h2>{item.title[locale]}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
const Footer = () => {
  const { t } = useTrans();
  return (
    <div className="flex relative bg-neutral-900  text-neutral-400">
      <HeroSection className="py-12 gap-10 md:gap-16 md:py-14 lg:py-16 w-full ">
        <footer className="w-full grid grid-cols-2 gap-8 gap-x-12 lg:gap-16 lg:grid-cols-4">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Image
              src={
                "https://res.cloudinary.com/dgrym3yz3/image/upload/v1686197195/assets/common/footer_cgdmie.png"
              }
              width={180}
              height={180}
              quality={90}
              alt="footer-logo"
            />
          </div>
          <FooterItems title={t("pos_reviews")} items={CategoryList} />
          <FooterItems title={t("resources")} items={ResourceItems} />
          <FooterItems title={t("company")} items={OtherItems} />
        </footer>
        <div className="flex flex-row text-neutral-600 border-t border-t-neutral-700 pt-10 mdpt-16">
          <p className="flex-1">© 2022 BestPOS. {t("all_rights_reserved")}</p>
          <div className="flex ml-5 gap-6">
            <Link
              href={"https://www.facebook.com/bestposconsulting/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="facebook"
            >
              <IcFb className="text-2xl" />
            </Link>
            <Link
              href={"https://www.instagram.com/bestposconsulting/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="instagram"
            >
              <IcInsta className="text-2xl" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/company/best-pos-consulting/?viewAsMember=true"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="linkedin"
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
