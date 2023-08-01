import IcRightArrow from "assets/icons/ic_right_arrow.svg";
import HelpingSection from "components/elements/home/HelpingSection";
import { Button } from "components/common/Button";
import MetricSection from "components/common/MetricSection";
import { FooterCTA } from "components/common/FooterCTA";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import useTrans from "hooks/useTrans";
import Image from "next/image";
import Box from "components/common/Box";
import BusinessCategorySection from "components/elements/home/BusinessCategorySection";
import TestimonialSectionV2 from "components/elements/home/TestimonialSection";
import HeadTag from "components/common/HeadTag";
import { GetServerSidePropsContext } from "next";
import { getListPOS } from "api_client/axios_client";
import { Product } from "models/product.model";
import { Locale } from "models/app_configs";
import HTMLReactParser from "html-react-parser";
import dayjs from "dayjs";

require("dayjs/locale/es");

const Hp2Translation = {
  heading: {
    [Locale.en]:
      "<span className='text-secondary'>Compare</span> & <span className='text-secondary'> Save</span> on a POS Today",
    [Locale.es]:
      "<span className='text-secondary'>Compare </span> y <span className='text-secondary'> ahorre </span> en un POS hoy",
  },
  title: {
    [Locale.en]:
      "We understand the overwhelming task of sifting through numerous Point of Sale systems available today. That's why we're on a mission to simplify things for you. Our goal is to help you select the perfect POS solution that suits your business like a glove. Check out our feedback.",
    [Locale.es]:
      "Entendemos la abrumadora tarea de revisar numerosos sistemas de Punto de Venta disponibles hoy en día. Por eso, estamos en una misión para simplificar las cosas para ti. Nuestro objetivo es ayudarte a seleccionar la solución perfecta de POS que se ajuste a tu negocio como un guante. Echa un vistazo a nuestros comentarios.",
  },
  description: {
    [Locale.en]:
      "Answer a few questions to find the POS that fits best for your business.",
    [Locale.es]:
      "Responde algunas preguntas para encontrar el POS que se adapte mejor a tu negocio.",
  },
  update_date: {
    [Locale.en]: "Last updated: ",
    [Locale.es]: "última vez actualizado: ",
  },
  start_now: {
    [Locale.en]: "Start now",
    [Locale.es]: "Empezar",
  },
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const products = await getListPOS({ type: "all", limit: 4 });
  return {
    props: { products },
  };
};

const HomePage = ({ products }: { products: Array<Product> }) => {
  const router = useRouter();
  const { t, locale } = useTrans();

  const findPOS = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(AppRoutes.QuestionnairePage);
  };

  return (
    <>
      <HeadTag screen="home" />
      <div className="flex flex-col items-end mx-auto max-w-[1300px] lg:flex-row">
        <Box className="flex-1 pb-6 lg:pb-[120px]">
          <h1 className={`txt-heading-medium lg:txt-heading-large`}>
            {HTMLReactParser(Hp2Translation.heading[locale])}
          </h1>
          <span className="txt-md-bold mt-2 lg:mt-6">
            {`${Hp2Translation.update_date[locale]} ${dayjs()
              .locale(router.locale || "en")
              .format("MMMM YYYY")}`}
          </span>
          <h2 className="hidden txt-md text-neutral-700 sm:block lg:text-start">
            {Hp2Translation.title[locale]}
          </h2>

          <div className="flex flex-col-reverse mt-2 gap-1 lg:gap-4 lg:flex-col lg:mt-6">
            <p className="txt-xs text-neutral-600 lg:txt-sm-bold lg:text-neutral-700">
              {Hp2Translation.description[locale]}
            </p>
            <Button
              classname="md:h-16 w-full sm:w-[266px]"
              title={t("get_started")}
              onClick={findPOS}
            />
          </div>
        </Box>

        <div className="hidden w-[500px] lg:inline-block">
          <Image
            alt="hp-2-image"
            src="https://res.cloudinary.com/dgrym3yz3/image/upload/c_scale,h_700,w_750/v1681793953/assets/common/pos_vcifjt.png"
            width={480}
            height={100}
            priority
            className="h-auto max-w-[500px]"
          />
        </div>
      </div>

      <BusinessCategorySection products={products} />
      <HelpingSection />
      <MetricSection titleColor="text-secondary" />
      <TestimonialSectionV2 />
      <FooterCTA />
    </>
  );
};

export default HomePage;
