import IcCheck from "assets/icons/ic_check.svg";
import IcRightArrow from "assets/icons/ic_right_arrow.svg";
import HelpingSection from "components/elements/home/HelpingSection";
import ClientSection from "components/common/ClientSection";
import BusinessCategorySection from "components/elements/home/BusinessCategorySection";
import { Button } from "components/common/Button";
import MetricSection from "components/common/MetricSection";
import { FooterCTA } from "components/common/FooterCTA";
import { useRouter } from "next/router";
import ColorUtils from "utils/ColorUtils";
import AppRoutes from "utils/routes";
import HeroSection from "components/common/HeroSection";
import TestimonialSection from "components/elements/home/TestimonialSection";
import useTrans from "hooks/useTrans";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import HeadTag from "components/common/HeadTag";
import { GetServerSidePropsContext } from "next";
import { getListPOS } from "api_client/axios_client";
import { Product } from "models/product.model";

const FeatureData = ["support", "free_trainning", "installment"];

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=43200, stale-while-revalidate=60"
  );

  const products = await getListPOS({ type: "all", limit: 4 });

  return {
    props: { products },
  };
};

const HomePage = ({ products }: { products: Array<Product> }) => {
  const router = useRouter();
  const { t } = useTrans();

  const findPOS = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(AppRoutes.QuestionnairePage);
  };

  const getPOSFree = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(AppRoutes.FreePOSPage);
  };

  const FindPOSBtn = (
    <Button
      classname="md:h-16"
      title={t("find_your_pos")}
      style={{
        background: ColorUtils["neutral-900"],
      }}
      onClick={findPOS}
    />
  );

  const GetFreePOSBtn = (
    <Button
      classname="md:h-16"
      title={t("get_free_pos")}
      style={{ background: "white", color: "black" }}
      onClick={getPOSFree}
      rightIcon={<IcRightArrow className="text-lg" />}
    />
  );

  return (
    <>
      <HeadTag screen="home" />
      <div className=" bg-gradient-to-b from-[#FF5A22] to-[#FFA722]">
        <div className="flex flex-col max-w-[1320px] lg:h-[640px] lg:flex-row xl:ml-[calc((100%-1200px)/2)]">
          <HeroSection className="flex-1 gap-4 text-center md:gap-6 lg:py-[80px] xl:py-[120px] lg:text-left my-auto">
            <h1
              className={`txt-heading-medium md:txt-heading-xlarge text-white lg:max-w-[480px]`}
            >
              {t("homepage_title")}
            </h1>
            <p className="txt-md-bold text-white lg:text-start md:text-xl lg:max-w-[480px]">
              {t("homepage_subtitle")}
            </p>
            <div className="w-full flex flex-col justify-center gap-4 md:gap-6 md:flex-row lg:justify-start">
              {FindPOSBtn}
              {GetFreePOSBtn}
            </div>
          </HeroSection>

          <div className="flex-1 relative w-full aspect-[750/700] self-end lg:max-w-[750px]">
            <Image
              alt="pos-home"
              priority
              fill
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="https://res.cloudinary.com/dgrym3yz3/image/upload/c_scale,h_700,w_750/v1681793953/assets/common/pos_vcifjt.png"
            />
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-3 px-4 py-3 md:py-6 
        md:px-8 mx-auto w-fit"
      >
        {FeatureData.map((item, index) => {
          return (
            <div
              key={`${index}-feature`}
              className="flex flex-col w-fit md:flex-row items-center gap-2 md:gap-3"
            >
              <IcCheck className="text-lg text-secondary" />
              <p className="txt-sm-bold md:text-base text-neutral-700 text-center">
                {index == 0 ? `24/7 ${t(item)}` : t(item)}
              </p>
            </div>
          );
        })}
      </div>
      <BusinessCategorySection products={products} />
      <HelpingSection />
      <MetricSection titleColor="text-secondary" />
      <TestimonialSection />
      <ClientSection
        body={
          <>
            <p className="txt-md md:text-lg lg:max-w-2xl text-neutral-700">
              {HTMLReactParser(t("home_page_client_desc"))}
            </p>
            <Button
              title={t("btn_pos_review")}
              isOutLine={true}
              rightIcon={<IcRightArrow className="text-lg" />}
              onClick={() => router.push(AppRoutes.POSSystemPage)}
            />
          </>
        }
      />
      <FooterCTA
        bgColor="bg-accent"
        actions={
          <>
            {FindPOSBtn}
            {GetFreePOSBtn}
          </>
        }
        title={t("homepage_title")}
        des={t("homepage_subtitle")}
      />
    </>
  );
};

export default HomePage;
