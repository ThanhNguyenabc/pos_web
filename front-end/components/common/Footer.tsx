import { FooterLogo, IcFb, IcInsta, IcLinkedLn } from "assets/AssetUtil";
import Image from "next/image";
import React from "react";

const styles = {
  "footer-tile": "md:txt-lg-bold text-neutral-300",
  "footer-section": "gap-4",
};

const Footer = () => {
  return (
    <div className="bg-neutral-dark">
      <footer className="container-lg-screen flex-column text-[##98A2B3] px-4 py-12 md:px-8 lg:px-[120px] lg:pt-20 md:pt-14">
        <div className="footer">
          <Image
            src={FooterLogo}
            alt="footer logo"
            height={38}
            className="col-span-2 md:col-span-3 lg:col-span-1"
          />

          <div className={`${styles["footer-section"]} grid-cols-0`}>
            <span className={`${styles["footer-tile"]}  `}>POS Reviews</span>
            <a className="link link-hover">Pizzeria</a>
            <a className="link link-hover">Quick Service Restaurants</a>
            <a className="link link-hover">Retail Stores</a>
            <a className="link link-hover">Full Service Restaurants</a>
            <a className="link link-hover">Bar & Night Clubs</a>
            <a className="link link-hover">Small Businesses</a>
          </div>
          <div className={`${styles["footer-section"]} grid-cols-1`}>
            <span className={styles["footer-tile"]}>Resources</span>
            <a className="link link-hover">Free POS</a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Blog</a>
          </div>
        </div>
        <div className="divider bg-neutral-700 h-px my-10 md:my-16"></div>
        <div className="flex-rows text-neutral-600">
          <p className="flex-1">© 2022 BestPOS. All rights reserved.</p>
          <div className="flex ml-5 gap-6">
            <Image src={IcFb} alt="facebook" />
            <Image src={IcInsta} alt="instagram" />
            <Image src={IcLinkedLn} alt="linkedln" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default React.memo(Footer);
