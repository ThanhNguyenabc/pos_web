import Box from "components/common/Box";
import POSCard from "components/elements/pos_card/POSCard";
import RecommendPOSCard from "components/elements/recommend_card/RecommendPOSCard";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import { SuggestPOSParams } from "models/suggest_pos_request_param";
import { GetServerSidePropsContext } from "next";
import React, { useEffect } from "react";
import AppRoutes from "utils/routes";
import useSWRImmutable from "swr";
import { getSuggestPOS } from "api_client/axios_client";
import { sendGoogleEvent } from "utils/tracking_utils";
import HeadTag from "components/common/HeadTag";

const SuggestPOSTrans = {
  heading: {
    [Locale.en]: "Woohoo! You did it!",
    [Locale.es]: "¡Guau! ¡Lo hiciste!",
  },
  desc: {
    [Locale.en]:
      "Based on your business requirements, we recommend the following POS system",
    [Locale.es]:
      "Según los requisitos de su negocio, recomendamos el siguiente sistema POS",
  },
  otherPOS: {
    [Locale.en]: "Other POS systems you can use based on your answers",
    [Locale.es]: "Otros sistemas POS que puede usar según sus respuestas",
  },
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const { access, business, salesystem, stations, handheld, discount } =
    context.query;
  if (access)
    return {
      props: {
        params: {
          business,
          salesystem,
          stations,
          handheld,
          discount,
        },
      },
    };
  return {
    redirect: {
      permanent: false,
      destination: AppRoutes.QuestionnairePage,
    },
    props: {},
  };
};

const SuggestPOSPage = ({ params }: { params: SuggestPOSParams }) => {
  const { locale } = useTrans();
  const { data: suggestProducts } = useSWRImmutable("suggest-pos", () =>
    getSuggestPOS(params)
  );

  useEffect(() => {
    sendGoogleEvent("find_pos_lead_form");
  }, []);

  return (
    <>
      <HeadTag screen="suggestPOS" />
      <div className={`flex flex-col bg-neutral-100`}>
        <div className=" block bg-[#D1FADF] h-[240px] md:h-[360px]" />
        <Box
          className="absolute left-0 right-0 container-content gap-2 pt-6 items-center
         text-center md:pt-14"
        >
          <h1 className="txt-heading-medium text-success md:txt-heading-large lg:txt-heading-xlarge">
            {SuggestPOSTrans.heading[locale]}
          </h1>
          <h2 className="txt-md-bold md:text-lg mt-2 md:mt-4 text-neutral-700">
            {SuggestPOSTrans.desc[locale]}
          </h2>
          {suggestProducts && (
            <RecommendPOSCard
              classname="z-1 top-7 md:top-[40px] w-full"
              data={suggestProducts?.[0]}
            />
          )}
        </Box>

        <Box className="container-content pb-10 pt-[270px] gap-4 md:pt-[160px] md:gap-6">
          <p className="txt-large-bold"> {SuggestPOSTrans.otherPOS[locale]}</p>
          {suggestProducts?.map((item, index) => {
            if (index > 0)
              return <POSCard key={`item-pos-${index}`} data={item} />;
          })}
        </Box>
      </div>
    </>
  );
};

export default SuggestPOSPage;
