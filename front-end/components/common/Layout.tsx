import MenuDrawer from "components/common/MenuDrawer";
import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex-column drawer-content h-screen">
        <Header />
        <main className=" container-lg-screen flex-grow">{children}</main>
        <Footer />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <MenuDrawer />
      </div>
    </div>
  );
};