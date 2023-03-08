import React from "react";
import useSideBar from "stores/useSideBar";
import Drawer from "react-modern-drawer";
import RequestDemoPOS from "./elements/request_demo_pos/RequestDemoPOS";
import FindPOSModal from "./elements/find_pos_modal/FindPOSModal";

export enum SideBarType {
  "RequestDemo" = "RequestDemo",
  "FindPOS" = "FindPOS",
}

const SideBar = () => {
  const { isOpen, openSideBar, closeSideBar, type } = useSideBar();

  return (
    <Drawer
      open={isOpen}
      direction="right"
      onClose={closeSideBar}
      style={{
        width: "w-full",
      }}
      className="w-full md:w-[80%] max-w-[750px] overflow-auto"
    >
      {type == SideBarType.RequestDemo && <RequestDemoPOS />}
      {type == SideBarType.FindPOS && <FindPOSModal />}
    </Drawer>
  );
};
export default SideBar;
