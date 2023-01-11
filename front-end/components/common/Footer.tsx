import { FooterLogo, IcFb, IcInsta, IcLinkedLn } from "assets/AssetUtil";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppRoutes from "utils/routes";

const styles = {
  "footer-title": "font-semibold md:txt-lg-bold text-neutral-300",
  "footer-section": "md:text-base gap-4 md:gap-6",
};

const Footer = () => {
  return (
    <div className="flex relative bg-neutral-dark">
      <footer className="container-screen flex-column text-neutral-400 py-12 px-4 md:px-8 lg:py-16 lg:px-[120px] lg:pt-20 md:py-14">
        <div>
          <Image
            src={FooterLogo}
            alt="footer logo"
            height={38}
            className="w-[170px] h-[40px] col-span-2 md:col-span-3 lg:col-span-1 mb-8"
          />
          <div className="footer grid-cols-2">
            <div className={`${styles["footer-section"]} grid-cols-0 `}>
              <span className={`${styles["footer-title"]}`}>POS Reviews</span>
              <a className="link link-hover">Pizzeria</a>
              <a className="link link-hover">Quick Service Restaurants</a>
              <a className="link link-hover">Retail Stores</a>
              <a className="link link-hover">Full Service Restaurants</a>
              <a className="link link-hover">Bar & Night Clubs</a>
              <a className="link link-hover">Small Businesses</a>
            </div>
            <div className={`${styles["footer-section"]} grid-cols-1`}>
              <span className={styles["footer-title"]}>Resources</span>
              <Link href={AppRoutes.FreePOSPage} className="link link-hover">
                Free POS
              </Link>
              <Link
                href={AppRoutes.ProcessingFeePage}
                className="link link-hover"
              >
                0% Processing Fee
              </Link>
              <Link
                href={AppRoutes.QuestionnairePage}
                className="link link-hover"
              >
                Questionnaire
              </Link>
              <Link href={AppRoutes.HomePage} className="link link-hover">
                Partner
              </Link>
            </div>
            <div className={`${styles["footer-section"]} grid-cols-1`}>
              <span className={styles["footer-title"]}>Company</span>
              <Link href={AppRoutes.AboutPage} className="link link-hover">
                About us
              </Link>
              <Link href={AppRoutes.ContactPage} className="link link-hover">
                Contact
              </Link>
              <Link
                href={AppRoutes.QuestionnairePage}
                className="link link-hover"
              >
                Questionnaire
              </Link>
            </div>
          </div>
        </div>
        <div className="divider bg-neutral-700 h-px my-10 md:my-16"></div>
        <div className="flex-rows text-neutral-600">
          <p className="flex-1">© 2022 BestPOS. All rights reserved.</p>
          <div className="flex ml-5 gap-6">
            <button>
              <IcFb className="text-2xl" />
            </button>
            <button>
              <IcInsta className="text-2xl" />
            </button>
            <button>
              <IcLinkedLn className="text-2xl" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default React.memo(Footer);
