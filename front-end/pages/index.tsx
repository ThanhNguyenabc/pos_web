import { BannerImage, IcCheck, IcRightArrow } from "assets/AssetUtil";
import FeatureSection from "components/elements/home/FeatureSection";
import ClientSection from "components/common/ClientSection";
import Image from "next/image";
import BusinessCategorySection from "components/elements/home/BusinessCategorySection";
import { Button } from "components/common/Button";
import MetricSection from "components/common/MetricSection";
import { FooterCTA } from "components/common/FooterCTA";
import { useRouter } from "next/router";
import ColorUtils from "utils/ColorUtils";
import AppRoutes from "utils/routes";
import HeroSection from "components/common/HeroSection";

const FeatureData = ["24/7 Support", "Free training", "Seamless Installments"];

const Home = () => {
  const router = useRouter();

  const findPOS = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(AppRoutes.QuestionnairePage);
  };

  const getPOSFree = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(AppRoutes.FreePOSPage);
  };

  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-[#FF5A22] to-[#FFA722] lg:flex-row lg:max-h-[640px]">
        <HeroSection className="gap-4 flex-1 lg:w-[55vw] text-center md:gap-6 lg:text-left">
          <p
            className={`txt-heading-large md:text-6xl md:leading-[68px] text-white`}
          >
            Real advice from
            <span className="text-secondary"> real people</span>
          </p>
          <p className="txt-md-bold text-white lg:text-start md:text-lg">
            Speak with a consultant today to find the best POS for your business
          </p>
          <div className="flex flex-col self-center gap-4 md:gap-6 w-full md:w-fit md:flex-row lg:self-start">
            <Button
              title="Find your POS"
              style={{ background: ColorUtils.neutral_900 }}
              onClick={findPOS}
            />
            <Button
              title="Get POS for free"
              style={{ background: "white", color: "black" }}
              onClick={getPOSFree}
              rightIcon={<IcRightArrow className=" text-lg " />}
            />
          </div>
        </HeroSection>
        <div className=" flex flex-1 pt-4">
          <Image src={BannerImage} alt="" className=" aspect-[1/1]" />
        </div>
      </div>

      <div className="grid grid-cols-3 px-4 py-3 md:py-6 md:px-8">
        {FeatureData.map((item, index) => {
          return (
            <div
              key={`${index}-feature`}
              className="flex flex-col md:flex-row items-center gap-2 md:gap-3 mx-auto"
            >
              <IcCheck className="text-lg text-secondary" />
              <p className="txt-sm-bold md:text-base text-neutral-700 text-center">
                {item}
              </p>
            </div>
          );
        })}
      </div>
      <div className="h-px bg-neutral-300" />
      <BusinessCategorySection />
      <FeatureSection />
      <MetricSection titleColor="text-secondary" />

      <ClientSection
        body={
          <>
            <p className="txt-md md:text-lg text-neutral-700">
              We are flexible when it comes to working with any point-of-sale
              company. Here&apos;s a list of our top providers in the industry.
            </p>
            <Button
              title="POS Review"
              isOutLine={true}
              rightIcon={<IcRightArrow className="text-lg" />}
              onClick={() => router.push(AppRoutes.CategoryPage)}
            />
          </>
        }
      />
      <FooterCTA
        background="bg-accent"
        actions={
          <>
            <Button
              classname="w-full md:w-fit"
              title="Find your POS"
              onClick={findPOS}
            />
            <Button
              title="Get POS for free"
              style={{ background: "white", color: "black" }}
              onClick={getPOSFree}
            />
          </>
        }
        title={
          <h3>
            Real advice
            <span className="text-secondary "> from real people</span>
          </h3>
        }
        des={
          "Speak with a consultant today to find he best POS for your business"
        }
      />
    </>
  );
};

export default Home;
