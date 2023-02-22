import {
  BannerImage,
  HomePageReviewImg,
  IcCheck,
  IcRightArrow,
} from "assets/AssetUtil";
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
import ReviewerSection from "components/elements/partner/ReviewerSection";

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
      <div className=" bg-gradient-to-b from-[#FF5A22] to-[#FFA722]">
        <HeroSection className=" lg:max-w-[1440px] p-0 md:p-0 lg:p-0 lg:h-[640px] lg:flex-row">
          <HeroSection className="flex-1">
            <div className="flex flex-col gap-4 text-center md:gap-6 lg:text-left lg:max-w-[460px] m-auto">
              <p
                className={`txt-heading-large md:text-6xl md:leading-[68px] text-white`}
              >
                Real advice from
                <span className="text-secondary"> real consultants</span>
              </p>
              <p className="txt-md-bold text-white lg:text-start md:text-xl">
                Speak with a consultant today to find the best point-of-sale
                for your business
              </p>
              <div className="flex flex-col self-center gap-4 md:gap-6 w-full md:w-fit md:flex-row lg:self-start">
                <Button
                  classname="md:h-16"
                  title="Find your POS"
                  style={{
                    background: ColorUtils["neutral-900"],
                  }}
                  onClick={findPOS}
                />
                <Button
                  classname="md:h-16"
                  title="Get POS for free"
                  style={{ background: "white", color: "black" }}
                  onClick={getPOSFree}
                  rightIcon={<IcRightArrow className=" text-lg " />}
                />
              </div>
            </div>
          </HeroSection>

          <div className="flex flex-1 lg:mt-10">
            <Image src={BannerImage} alt="" className="aspect-[4/3]" />
          </div>
        </HeroSection>
      </div>

      <div className="grid grid-cols-3 px-4 py-3 md:py-6 md:px-8 mx-auto gap-6 md:gap-[58px] lg:gap-[82px]">
        {FeatureData.map((item, index) => {
          return (
            <div
              key={`${index}-feature`}
              className="flex flex-col md:flex-row items-center gap-2 md:gap-3"
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

      <HeroSection>
        <ReviewerSection
          reviews={[
            {
              title: "Switched from Micros to Revel Systems",
              jobTitle: "Owner of Beginnings",
              name: "Ben",
              rating: 5,
              avatar: HomePageReviewImg,
              comment:
                "I was reluctant to switch from Micros to Revel but it was the best move I’ve made in the 20 years of business. I even qualified for free monthly service fees.",
            },
          ]}
        />
      </HeroSection>

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
        bgColor="bg-accent"
        actions={
          <>
            <Button
              classname="w-full md:w-fit md:h-16"
              title="Find your POS"
              onClick={findPOS}
            />
            <Button
              title="Get POS for free"
              classname="md:h-16"
              style={{ background: "white", color: "black" }}
              onClick={getPOSFree}
              rightIcon={<IcRightArrow className="text-lg" />}
            />
          </>
        }
        title={
          <h3>
            Real advice
            <span className="text-secondary "> from real consultants</span>
          </h3>
        }
        des={
          "Speak with a consultant today to find the best point-of-sale for your business"
        }
      />
    </>
  );
};

export default Home;
