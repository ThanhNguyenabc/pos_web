import "styles/index.css";
import React from "react";
import type { AppProps } from "next/app";
import { Layout } from "components/common/Layout";
import RequestDemoPOS from "components/elements/request_demo_pos/RequestDemoPOS";
import FindPOSModal from "components/elements/find_pos_modal/FindPOSModal";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18n, { initI18 } from "i18";
import { connectMongo } from "lib/mongodb";
import SideBar from "components/SideBar";

initI18();
connectMongo();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer hideProgressBar />

      <Head>
        <title>Best pos</title>
        <meta name="best pos" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SideBar />
    </>
  );
}
