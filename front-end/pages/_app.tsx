import "styles/index.css";
import type { AppProps } from "next/app";
import { Layout } from "components/common/Layout";
import ThankYouDialog from "components/common/ThankYouDialog";
import RequestDemoPOS from "components/elements/request_demo_pos/RequestDemoPOS";
import FindPOSModal from "components/elements/find_pos_modal/FindPOSModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThankYouDialog />
      <RequestDemoPOS />
      <FindPOSModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
