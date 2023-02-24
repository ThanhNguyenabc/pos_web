import "styles/index.css";
import React from "react";
import type { AppProps } from "next/app";
import { Layout } from "components/common/Layout";
import RequestDemoPOS from "components/elements/request_demo_pos/RequestDemoPOS";
import FindPOSModal from "components/elements/find_pos_modal/FindPOSModal";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer hideProgressBar />

      <Head>
        <title>Best pos</title>
        <meta name="best pos" />
      </Head>
      <RequestDemoPOS />
      <FindPOSModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
