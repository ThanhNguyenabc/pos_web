import HelpingSection from "components/elements/home/HelpingSection";
import { Button } from "components/common/Button";
import MetricSection from "components/common/MetricSection";
import { FooterCTA } from "components/common/FooterCTA";
import useTrans from "hooks/useTrans";
import Image from "next/image";
import Box from "components/common/Box";
import BusinessCategorySection from "components/elements/home/BusinessCategorySection";
import TestimonialSectionV2 from "components/elements/home/TestimonialSection";
import HeadTag from "components/common/HeadTag";
import { Product } from "models/product.model";
import HTMLReactParser from "html-react-parser";
import { getCurrentMonth } from "utils/date_utils";
import useSideBar from "stores/useSideBar";
import { RightSideBarType } from "components/common/RightSideBar";
import { cacheTime } from "utils/constants";
import { fetchProductList } from "./api/products";

export const getStaticProps = async () => {
  const products = await fetchProductList("all", 4);

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
    revalidate: cacheTime,
  };
};

const HomePage = ({ products }: { products: Array<Product> }) => {
  const { t, locale } = useTrans();
  const openSideBar = useSideBar((state) => state.openSideBar);

  const findPOS = () => {
    openSideBar(RightSideBarType.Questionnaire);
  };

  return (
    <>
      <HeadTag screen="home" />
      <div className="flex flex-col gap-4 items-end mx-auto max-w-[1300px] lg:gap-8 lg:flex-row">
        <Box className="flex-1 pb-4 lg:max-w-[600px] lg:pb-8">
          <span className="txt-md-bold mt-2 lg:mt-6">
            {`${t("last_updated")} ${getCurrentMonth(locale)}`}
          </span>
          <h1 className={`txt-heading-medium lg:txt-heading-large`}>
            {HTMLReactParser(t("home_page.heading"))}
          </h1>

          <div className="flex flex-col mt-2 gap-4 lg:mt-4">
            <p className="text-neutral-600">{t("home_page.desc")}</p>
            <Button
              classname="md:h-16 w-fit sm:w-[266px]"
              title={t("get_started")}
              onClick={findPOS}
            />
          </div>
        </Box>

        <div className="hidden max-w-[580px] lg:inline-block">
          <Image
            alt="hp-2-image"
            src="https://res.cloudinary.com/dgrym3yz3/image/upload/v1691658186/assets/common/pos_cover_i2ynqk.png"
            width={1170}
            height={640}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="h-auto max-w-[580px]"
          />
        </div>
      </div>

      <BusinessCategorySection products={products} />
      <HelpingSection />
      <MetricSection titleColor="text-secondary" />
      <TestimonialSectionV2 />
      <FooterCTA
        heading="BestPOS works with all POS providers."
        description="BestPOS helps businesses secure the best deals on premium POS
      systems. Get a quote today."
        formTitle="Fill in to get a quote"
        formSubTilte="You can save up to 100% of costs on a full POS package."
      />
    </>
  );
};

export default HomePage;
