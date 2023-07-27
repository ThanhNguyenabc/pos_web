import { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "utils/constants";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          type="image/svg+xml"
          href="/public/favicon.svg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </body>
    </Html>
  );
}
