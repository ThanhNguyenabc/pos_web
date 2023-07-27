"use client";

import React, { ReactElement } from "react";
import HeroSection from "./HeroSection";
import Marquee from "react-fast-marquee";
import useTrans from "hooks/useTrans";
import Image from "next/image";
import { DefaultImg } from "assets/AssetUtil";
import useSWRImmutable from "swr/immutable";
import { fetchProductIcons } from "api_client/axios_client";

interface ClientSectionProps {
  body?: ReactElement;
}

const ClientSection = ({ body }: ClientSectionProps) => {
  const { t } = useTrans();
  const { data } = useSWRImmutable("product_icons", fetchProductIcons);

  return (
    <HeroSection className="gap-12 md:gap-12 lg:gap-16">
      <div className="flex flex-col gap-6 items-center text-center lg:w-[768px] m-auto">
        <h3 className="txt-heading-medium md:txt-heading-large">
          {t("our_top_pos_systems")}
        </h3>
        {body}
      </div>
      {data && data.length > 0 && (
        <Marquee>
          {data.map((item, index) => {
            return (
              <Image
                key={`client-section-${index}`}
                src={item.logo || DefaultImg}
                alt={`Product icon`}
                width={180}
                height={90}
                className="aspect-[2/1] mr-10 object-contain md:mr-16"
              />
            );
          })}
        </Marquee>
      )}
    </HeroSection>
  );
};

export default ClientSection;
