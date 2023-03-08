import Image from "next/image";
import React, { ReactElement } from "react";
import HeroSection from "./HeroSection";
import Marquee from "react-fast-marquee";
import { getProductIcon } from "utils/StringUtil";
import useProductStore from "stores/product_store";

interface ClientSectionProps {
  body?: ReactElement;
}

const ClientSection = ({ body }: ClientSectionProps) => {
  const { products } = useProductStore();
  console.log("client section");
  return (
    <div className="flex flex-col gap-12 py-12 md:py-14 md:gap-12 lg:gap-16 overflow-hidden">
      <HeroSection className="pb-0 md:pb-0 lg:pb-0">
        <div className="flex flex-col gap-6 items-center text-center lg:w-[768px] m-auto">
          <p className="txt-heading-medium md:txt-heading-large">
            Our Top POS Systems
          </p>
          {body}
        </div>
      </HeroSection>
      <>
        {products && (
          <Marquee>
            {products.map((item, index) => {
              return (
                <div
                  key={`${item.slug}-${index}`}
                  className=" relative w-[120px]  h-[60px] md:h-[90px] md:w-[180px]  mr-10 md:mr-16"
                >
                  <Image
                    src={getProductIcon(item.slug)}
                    alt={`client-${index}`}
                    key={`client-${index}`}
                    className="object-contain"
                    fill
                  />
                </div>
              );
            })}
          </Marquee>
        )}
      </>
    </div>
  );
};

export default ClientSection;
