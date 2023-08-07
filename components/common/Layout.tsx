import React, { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      <div className={`flex flex-col min-h-[90vh]`}>{children}</div>
      <Footer />
    </>
  );
};
