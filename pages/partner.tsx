import { Button } from "components/common/Button";
import ClientSection from "components/common/ClientSection";
import { FooterCTA } from "components/common/FooterCTA";
import HeadTag from "components/common/HeadTag";
import HeroSection from "components/common/HeroSection";
import MetricSection from "components/common/MetricSection";
import ReviewerSection from "components/elements/partner/ReviewerSection";
import useTrans from "hooks/useTrans";
import { Locale, MetaTag } from "models/app_configs";
import Image from "next/image";
import React, { useRef } from "react";
import { cacheTime } from "utils/constants";
import { getSEOTags } from "./api/configs";

const PartnerTrans = {
  heading: {
    [Locale.en]: "Partner with BestPOS",
    [Locale.es]: "Asóciese con BestPOS",
  },
  desc: {
    [Locale.en]:
      "The Program is designed specifically for agents, offering you unparalleled flexibility and in-depth resources that can’t be matched by anyone in the industry.",
    [Locale.es]:
      "El Programa está diseñado específicamente para agentes, ofreciéndole una flexibilidad incomparable y recursos detallados que nadie en la industria puede igualar.",
  },
  btnBecomePartner: {
    [Locale.en]: "Become a Partner",
    [Locale.es]: "Conviértase en un agente",
  },
  programTitle: {
    [Locale.en]: "Agent Program",
    [Locale.es]: "Programa de Agentes",
  },
  testimonialTitle: {
    [Locale.en]: "Be part of a community full of opportunity",
    [Locale.es]: "Sea parte de una comunidad llena de oportunidades",
  },
  footerTitle: {
    [Locale.en]: "Ready to join our partner program?",
    [Locale.es]: "¿Listo para unirse a nuestro programa de socios?",
  },
  footerDesc: {
    [Locale.en]:
      "Help your clients scale by transforming customersupport from a cost center to a profit generator.",
    [Locale.es]:
      "Ayude a sus clientes a escalar transformando la atención al cliente de un centro de costos a un generador de ganancias.",
  },
};

const PartnerProgram = [
  {
    title: {
      [Locale.en]: "Lucrative Signing Bonus",
      [Locale.es]: "Bono de firma lucrativa",
    },
    desc: {
      [Locale.en]:
        "Receive bonuses up to $5,000 for merchants who use BestPOS.",
      [Locale.es]:
        "Reciba bonos de hasta $5,000 para comerciantes que usan BestPOS.",
    },
  },
  {
    title: {
      [Locale.en]: "Monthly Residual Income",
      [Locale.es]: "Ingresos residuales mensuales",
    },
    desc: {
      [Locale.en]:
        "Receive the most competitive monthly residual income in the market for credit card processing.",
      [Locale.es]:
        "Reciba el ingreso residual mensual más competitivo del mercado en procesamiento de tarjetas de crédito.",
    },
  },
  {
    title: {
      [Locale.en]: "Virtual Office",
      [Locale.es]: "Oficina Virtual",
    },
    desc: {
      [Locale.en]:
        "With our virtual office you'll be able to see your signed referrals, daily & monthly reporting, bonus and residual payouts.",
      [Locale.es]:
        "Con nuestra oficina virtual podrás ver tus referidos firmados, diariamente.",
    },
  },
  {
    title: {
      [Locale.en]: "Competitive Products",
      [Locale.es]: "Productos de la competencia",
    },
    desc: {
      [Locale.en]:
        "Our competitive products and services put our agents at an advantage to build their portfolio.",
      [Locale.es]:
        "Nuestros productos y servicios competitivos ponen a nuestros agentes en ventaja para construir su portafolio.",
    },
  },
  {
    title: {
      [Locale.en]: "Syndication Opportunities",
      [Locale.es]: "Oportunidades de sindicación",
    },
    desc: {
      [Locale.en]:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      [Locale.es]:
        "Ya sea que tenga un equipo de 2 o 200, nuestras bandejas de entrada de equipo compartidas mantienen a todos en la misma página y al tanto.",
    },
  },
];

const Feedbacks = [
  {
    image:
      "https://res.cloudinary.com/dgrym3yz3/image/upload/v1681793957/assets/common/reviewer_muomit.png",
    name: "Bryan",
    jobTitle: {
      [Locale.en]: "Owner of Beginnings",
      [Locale.es]: "Dueño de los comienzos",
    },
    review: {
      [Locale.en]:
        "The competitive products and services that BestPOS provides made it easy for me to secure new clients",
      [Locale.es]:
        "Nuestros productos y servicios competitivos ponen a nuestros agentes en ventaja para construir su portafolio",
    },
  },
];

export const getStaticProps = async () => {
  const seoTag = await getSEOTags("home");
  return {
    props: {
      seoTag,
    },
    revalidate: cacheTime,
  };
};

const PartnerPage = ({ seoTag }: { seoTag: MetaTag }) => {
  const { locale } = useTrans();
  const footerRef = useRef<HTMLDivElement>(null);

  const openPartnerForm = () => {
    footerRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });
  };

  return (
    <>
      <HeadTag tags={seoTag} />
      <div className="flex flex-col max-w-[1320px] lg:h-[640px] lg:flex-row xl:ml-[calc((100%-1200px)/2)]">
        <HeroSection className="flex-1 gap-4 text-center md:gap-6 lg:text-left my-auto lg:max-w-[50%] lg:py-[80px] xl:py-[120px]">
          <h1
            className={`txt-heading-medium md:txt-heading-xlarge lg:max-w-[460px]`}
          >
            {PartnerTrans.heading[locale]}
          </h1>
          <p className="txt-md-bold lg:text-start md:text-xl lg:max-w-[460px]">
            {PartnerTrans.desc[locale]}
          </p>
          <div className="flex flex-col self-center gap-4 md:gap-6 w-full md:w-fit md:flex-row lg:self-start">
            <Button
              classname="md:h-16"
              title={PartnerTrans.btnBecomePartner[locale]}
              onClick={openPartnerForm}
            />
          </div>
        </HeroSection>

        <div className="flex flex-1 self-end relative w-full aspect-[4/3] lg:aspect-square lg:max-h-[600px]">
          <Image
            alt="partner-img"
            src="https://res.cloudinary.com/dgrym3yz3/image/upload/v1681793951/assets/common/partner_csdw2c.png"
            fill
            sizes="50vw"
            priority
          />
        </div>
      </div>

      <HeroSection className="gap-12 lg:gap-20">
        <h3 className="text-center txt-heading-medium md:txt-heading-large">
          {PartnerTrans.programTitle[locale]}
        </h3>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 md:gap-16 md:gap-y-12 lg:gap-y-20">
          {PartnerProgram.map((item, index) => {
            return (
              <div
                key={`${item.desc}-${index}`}
                className={` flex flex-col ${
                  index == PartnerProgram.length - 1
                    ? " md:col-span-2 mx-auto md:max-w-md"
                    : ""
                }`}
              >
                <p className="mb-4 txt-heading-xsmal md:txt-heading-small">
                  {item.title[locale]}
                </p>
                <p className="txt-md md:text-xl text-neutral-700">
                  {item.desc[locale]}
                </p>
              </div>
            );
          })}
        </div>
      </HeroSection>
      <MetricSection titleColor="text-secondary" />
      <HeroSection className="pb-0 md:pb-0 lg:pb-0">
        <h3 className="mb-12 txt-heading-medium text-center md:txt-heading-large">
          {PartnerTrans.testimonialTitle[locale]}
        </h3>
        <ReviewerSection reviews={Feedbacks} />
      </HeroSection>
      <ClientSection />
      <FooterCTA ref={footerRef} />
    </>
  );
};

export default PartnerPage;
