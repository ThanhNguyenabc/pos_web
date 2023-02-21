import "styles/index.css";
import React from "react";
import type { AppProps } from "next/app";
import { Layout } from "components/common/Layout";
import ThankYouDialog from "components/common/ThankYouDialog";
import RequestDemoPOS from "components/elements/request_demo_pos/RequestDemoPOS";
import FindPOSModal from "components/elements/find_pos_modal/FindPOSModal";
import Head from "next/head";
import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertMessage from "components/common/AlertMessage";

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "100px",
  transition: transitions.SCALE,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider {...options} template={AlertMessage}>
      <>
        <Head>
          <title>Best pos</title>
          <meta name="best pos" />
        </Head>
        <ThankYouDialog />
        <RequestDemoPOS />
        <FindPOSModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </AlertProvider>
  );
}
