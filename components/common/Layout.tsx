import React, { ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <main className={inter.className}>
      <Navbar />
      <div className={`flex flex-col min-h-[90vh]`}>{children}</div>
      <Footer />
    </main>
  );
};
