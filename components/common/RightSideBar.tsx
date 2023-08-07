import dynamic from "next/dynamic";
import React from "react";
import useSideBar from "stores/useSideBar";
import SideBar from "./SideBar";

export enum RightSideBarType {
  "RequestDemo" = "RequestDemo",
  "FindPOS" = "FindPOS",
  "Questionnaire" = "Questionnaire",
  "ApplyPartner" = "ApplyPartner",
}

const CMPContent = {
  [RightSideBarType.RequestDemo]: dynamic(
    () => import("../elements/request_demo_pos/RequestDemoPOS")
  ),
  [RightSideBarType.FindPOS]: dynamic(
    () => import("../elements/find_pos_modal/FindPOSModal")
  ),
  [RightSideBarType.ApplyPartner]: dynamic(
    () => import("../elements/partner/ApplyPartner")
  ),
  [RightSideBarType.Questionnaire]: dynamic(
    () => import("components/elements/questionnaire/QuestionnaireForm")
  ),
};

const RightSideBar = () => {
  const { isOpen, closeSideBar, type } = useSideBar((state) => state);
  const CMP = (type && CMPContent[type]) || null;
  return (
    <SideBar isOpen={isOpen} direction="right" closeSideBar={closeSideBar}>
      {CMP && <CMP />}
    </SideBar>
  );
};

export default RightSideBar;
