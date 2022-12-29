import {
  BannerImage,
  IcApple,
  IcCheck,
  IcCheckbox,
  IcRightArrow,
  RevelImg,
} from "assets/AssetUtil";
import FeatureSection from "components/elements/home/FeatureSection";
import ClientSection from "components/common/ClientSection";
import Image from "next/image";
import BusinessCategorySection from "components/elements/home/BusinessCategorySection";
import { Button } from "components/common/Button";
import MetricSection from "components/common/MetricSection";
import { FooterCTA } from "components/common/FooterCTA";
import { useRouter } from "next/router";
import RecommendPOSCard from "components/common/recommend_card/RecommendPOSCard";
import ColorUtils from "utils/ColorUtils";
import QuestionnaireSuccess from "components/elements/questionnaire/QuestionnaireSuccess";
import RequestDemoPOS from "components/elements/request_demo_pos/RequestDemoPOS";
import FindPOSModal from "components/elements/find_pos_modal/FindPOSModal";
import POSDetail from "pages/posdetail";

const FeatureData = ["24/7 Support", "Free training", "Seamless Installments"];

const Home = () => {
  const router = useRouter();

  const findPOS = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push("/questionnaire");
  };

  const getPOSFree = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push("/freepos");
  };
  return (
    <>
      <FindPOSModal />
     
      <div className="flex flex-col lg:flex-row bg-gradient-to-b from-[#FF5A22] to-[#FFA722] lg:pt-4">
        <div className="flex flex-1 flex-col justify-center items-center text-white px-4 pt-10 ">
          <div className="lg:max-w-lg">
            <p
              className={`txt-heading-large md:text-6xl md:leading-[68px] text-center lg:text-start text-white`}
            >
              Real advice from
              <span className="text-secondary"> real people</span>
            </p>
            <p className="txt-md-bold text-center pt-4 lg:text-start mb-6 md:text-xl  md:mt-6 md:mb-12">
              Speak with a consultant today to find the best POS for your
              business
            </p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mb-10">
              <Button
                classname="w-full md:w-fit"
                title="Find your POS"
                type="SOLID_MEDIUM"
                background={`bg-neutral-900`}
                onClick={findPOS}
              />
              <Button
                classname="w-full md:w-fit"
                title="Get POS for free"
                type="SOLID_MEDIUM"
                onClick={getPOSFree}
                rightIcon={<Image height={13} src={IcRightArrow} alt="" />}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src={BannerImage} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="grid grid-cols-3 px-4 py-3 md:py-6">
        {FeatureData.map((item, index) => {
          return (
            <div
              key={`${index}-feature`}
              className="flex flex-col justify-center  md:flex-row items-center gap-2 md:gap-3"
            >
              <Image src={IcCheck} alt="" />
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
      <MetricSection
        heading="What sets us apart from other companies?"
        titleColor=" text-secondary"
        itemSection={[
          { title: "20+", content: "Over 20 years experience" },
          { title: "50", content: "Available in all 50 states" },
          { title: "1000", content: "Over 1000 Clients" },
        ]}
      />

      <ClientSection
        body={
          <>
            <p className="txt-md md:text-xl text-neutral-700">
              We are flexible when it comes to working with any point-of-sale
              company. Here's a list of our top providers in the industry.
            </p>
            <Button
              title="POS Review"
              type="OUTLINE_MEDIUM"
              rightIcon={<Image height={13} src={IcRightArrow} alt="" />}
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
              type="SOLID_MEDIUM"
              background={`bg-primary`}
              onClick={findPOS}
            />
            <Button
              title="Get POS for free"
              type="SOLID_MEDIUM"
              onClick={getPOSFree}
            />
          </>
        }
        title={
          <>
            <h3>
              Real advice
              <span className="text-secondary "> from real people</span>
            </h3>
          </>
        }
        des={
          "Speak with a consultant today to find he best POS for your business"
        }
      />
    </>
  );
};

export default Home;
