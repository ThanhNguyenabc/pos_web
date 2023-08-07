import "styles/index.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { Layout } from "components/common/Layout";
import dynamic from "next/dynamic";
import InitialData from "components/elements/InitialData";
import TagManager from "react-gtm-module";
import { GTM_ID } from "utils/constants";
import RightSideBar from "components/common/RightSideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Toaster = dynamic(() =>
  import("react-hot-toast").then((res) => res.Toaster)
);

export function POSApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: GTM_ID,
    });
  }, []);

  return (
    <>
      <InitialData />
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <RightSideBar />
      </main>

      <Toaster position="top-center" />
    </>
  );
}

export default POSApp;
