import Box from "components/common/Box";
import POSCard from "components/elements/pos_card/POSCard";
import RecommendPOSCard from "components/elements/recommend_card/RecommendPOSCard";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useProductStore from "stores/product_store";
import AppRoutes from "utils/routes";

const SuggestPOSPage = () => {
  const router = useRouter();
  const products = useProductStore((state) => state.suggestPosList);

  const firstProductItem = products[0];
  useEffect(() => {
    if (products.length == 0) router.push(AppRoutes.QuestionnairePage);
  }, []);

  if (products.length > 0)
    return (
      <div className={`flex flex-col bg-neutral-100`}>
        <div className=" block bg-[#D1FADF] h-[240px] md:h-[360px]" />
        <Box
          className="absolute left-0 right-0 container-content gap-2 pt-6 items-center
         text-center md:pt-14"
        >
          <p className="txt-heading-medium text-success md:txt-heading-large lg:txt-heading-xlarge">
            Woohoo! You did it!
          </p>
          <p className="txt-md-bold md:text-lg mt-2 md:mt-4 text-neutral-700">
            Based on your business requirements, we recommend the following POS
            system
          </p>
          <RecommendPOSCard
            classname="z-1 top-7 md:top-[40px] w-full"
            data={firstProductItem}
            onCardClick={() => {
              router.push(`${AppRoutes.POSDetailPage}/${firstProductItem.id}`);
            }}
          />
        </Box>

        <Box className="container-content pb-10 pt-[270px] gap-4 md:pt-[160px] md:gap-6">
          <p className="txt-large-bold">
            Other POS systems you can use based on your answers
          </p>

          {products.map((item, index) => {
            if (index > 0)
              return (
                <POSCard
                  key={`item-pos-${index}-${item.id}`}
                  data={item}
                  onCardClick={() => {
                    router.push(`${AppRoutes.POSDetailPage}/${item.id}`);
                  }}
                />
              );
          })}
        </Box>
      </div>
    );

  return <></>;
};

export default SuggestPOSPage;
