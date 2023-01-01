import MenuDrawer from "components/common/MenuDrawer";
import React, { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex flex-col drawer-content max-h-fit">
      <Header />
      <div className="container mx-auto min-h-[95vh]">{children}</div>
      <Footer />
    </div>
  );
};
