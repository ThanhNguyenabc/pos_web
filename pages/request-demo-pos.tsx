import RequestDemoPOS from "components/elements/request_demo_pos/RequestDemoPOS";
import { useRouter } from "next/router";
import React from "react";
import { AppRoutes } from "utils/routes";

const RequestDemoPage = () => {
  const router = useRouter();

  const navigateToHomePage = () => {
    setTimeout(() => {
      router.replace(AppRoutes.HomePage);
    }, 1500);
  };

  return (
    <div className=" max-w-xl mx-auto">
      <RequestDemoPOS
        showCloseButton={false}
        afterSubmit={navigateToHomePage}
      />
    </div>
  );
};

export default RequestDemoPage;
