import { POS2Img } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import HeroSection from "components/common/HeroSection";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";
import { Locale } from "models/app_configs";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ColorUtils from "utils/ColorUtils";
import { AppRoutes } from "utils/routes";

const ReceiptOptionSectionTranslate = {
  title: {
    [Locale.en]:
      "<span className='text-success'>Various</span> Cash Discount Receipt Options",
    [Locale.es]: "Varias opciones de recibos de descuento en efectivo",
  },
  desc: {
    [Locale.en]:
      "Let us help you choose the right receipt layout for your business. Our agents can even work with your current POS company in helping implement the cash discount program.",
    [Locale.es]:
      "Permítanos ayudarlo a elegir el diseño de recibo adecuado para su negocio. Nuestros agentes incluso pueden trabajar con su empresa de POS actual para ayudar a implementar el programa de descuento en efectivo.",
  },
};

const ReceiptOptionSection = () => {
  const { t, locale } = useTrans();
  const router = useRouter();
  return (
    <div className="flex flex-col container-content xl:gap-[120px] lg:flex-row-reverse">
      <HeroSection className="flex-1 gap-8 lg:max-w-[480px]">
        <p className="txt-heading-small md:txt-heading-large">
          {HTMLReactParser(ReceiptOptionSectionTranslate.title[locale])}
        </p>
        <p className="txt-md text-neutral-700 md:text-xl">
          {ReceiptOptionSectionTranslate.desc[locale]}
        </p>
        <Button
          title={t("get_start_now")}
          classname="w-fit"
          style={{ background: ColorUtils.success }}
          onClick={() => router.push(AppRoutes.BreadmeQuestionPage)}
        />
      </HeroSection>
      <div className=" relative flex-1 w-full aspect-square lg:max-w-[50%]">
        <Image src={POS2Img} alt="pos2-image" fill sizes="95vw" />
      </div>
    </div>
  );
};

export default ReceiptOptionSection;
