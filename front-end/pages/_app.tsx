import "styles/index.css";
import type { AppProps } from "next/app";
import { Layout } from "components/common/Layout";
import ThankYouDialog from "components/common/ThankYouDialog";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThankYouDialog />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
