import {
  BannerImage,
  IcApple,
  IcCheck,
  IcCheckbox,
  IcPhone,
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
import POSDetail from "pages/pos-detail/[posId]";
import ProcessingFee from "./posfee";
import BreadmeIntroduction from "components/elements/breadme/BreadmeIntroduction";
import ThanksYouForm from "components/common/thanksform";
import AppRoutes from "utils/routes";
import { getListCategory } from "api_client/axios_client";
import useCategoryStore from "stores/category_store";
import { Category } from "models/category";
import { useEffect } from "react";

const FeatureData = ["24/7 Support", "Free training", "Seamless Installments"];

const Home = ({ categories }: { categories: Array<Category> }) => {
  const router = useRouter();
  const categoryStore = useCategoryStore((state) => state.setCategoriesList);
  categoryStore(categories);

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
      <FindPOSModal />
      <div className="flex flex-col xl:flex-row bg-gradient-to-b from-[#FF5A22] to-[#FFA722]">
        <div className="flex flex-1 flex-col px-4 py-10 gap-4 md:gap-6 md:px-8 md:py-14 md:items-center xl:items-start xl:p-[120px]">
          <div className=" flex flex-col items-center text-center gap-4 md:gap-6 xl:text-left ">
            <p
              className={`txt-heading-large md:text-6xl md:leading-[68px] text-white`}
            >
              Real advice from
              <span className="text-secondary"> real people</span>
            </p>
            <p className="txt-md-bold text-white lg:text-start md:text-xl">
              Speak with a consultant today to find the best POS for your
              business
            </p>
          </div>
          <div className=" flex flex-col gap-4 md:gap-6 w-full md:w-fit md:flex-row">
            <Button
              title="Find your POS"
              style={{ background: ColorUtils.neutral_900 }}
              onClick={findPOS}
            />
            <Button
              title="Get POS for free"
              style={{ background: "white", color: "black" }}
              onClick={getPOSFree}
              rightIcon={<IcRightArrow className=" text-xl " />}
            />
          </div>
        </div>
        <div className="flex-1 block xl:mt-4">
          <Image src={BannerImage} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="grid grid-cols-3 px-4 py-3 md:py-6 md:px-8">
        {FeatureData.map((item, index) => {
          return (
            <div
              key={`${index}-feature`}
              className="flex flex-col md:flex-row items-center gap-2 md:gap-3 mx-auto"
            >
              <IcCheck className="text-xl text-secondary" />
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
        titleColor="text-secondary"
        itemSection={[
          { title: "30+", content: "Over 30 years experience" },
          { title: "1000+", content: "Over 1000 Clients" },
          { title: "50", content: "Available in all 50 states" },
        ]}
      />

      <ClientSection
        body={
          <>
            <p className="txt-md md:text-xl text-neutral-700">
              We are flexible when it comes to working with any point-of-sale
              company. Here&apos;s a list of our top providers in the industry.
            </p>
            <Button
              title="POS Review"
              isOutLine={true}
              rightIcon={<IcRightArrow className=" text-xl " />}
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

export async function getStaticProps() {
  const response = await getListCategory();
  return {
    props: {
      categories: response.data.data,
    },
  };
}
export default Home;
