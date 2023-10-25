import RequestDemoPOS from "components/elements/request_demo_pos/RequestDemoPOS";
import { useRouter } from "next/router";
import React from "react";
import { AppRoutes } from "utils/routes";
import { getSEOTags } from "./api/configs";
import { cacheTime } from "utils/constants";
import HeadTag from "components/common/HeadTag";
import { MetaTag } from "models/app_configs";

export const getStaticProps = async () => {
  const data = await getSEOTags("requestDemoPOS");
  return {
    props: {
      seoTag: data,
    },
    revalidate: cacheTime,
  };
};

const RequestDemoPage = ({ seoTag }: { seoTag?: MetaTag }) => {
  const router = useRouter();

  const navigateToHomePage = () => {
    setTimeout(() => {
      router.replace(AppRoutes.HomePage);
    }, 1500);
  };

  return (
    <div className=" max-w-xl mx-auto">
      <HeadTag tags={seoTag} />
      <RequestDemoPOS
        showCloseButton={false}
        afterSubmit={navigateToHomePage}
      />
    </div>
  );
};

export default RequestDemoPage;
