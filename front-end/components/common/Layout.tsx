import MenuDrawer from "components/common/MenuDrawer";
import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex flex-col drawer-content max-h-fit">
      <Header />

      <div className="container-screen min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
};
