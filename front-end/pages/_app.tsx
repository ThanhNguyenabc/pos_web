import "styles/index.css";
import type { AppProps } from "next/app";
import { Layout } from "components/common/Layout";
import ThankYouDialog from "components/common/ThankYouDialog";
import RequestDemoPOS from "components/elements/request_demo_pos/RequestDemoPOS";
import FindPOSModal from "components/elements/find_pos_modal/FindPOSModal";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
