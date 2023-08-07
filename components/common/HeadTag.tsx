import useTrans from "hooks/useTrans";
import { PageMeta } from "models/app_configs";
import { MetaTag } from "models/app_configs";
import Head from "next/head";
import React from "react";
import useAppStore from "stores/app_store";

interface HeadTagProps {
  screen?: keyof PageMeta;
  customTag?: MetaTag;
}
const HeadTag = ({ screen, customTag }: HeadTagProps) => {
  const { appConfig } = useAppStore();
  const { locale, asPath } = useTrans();

  // Only add meta tags on production mode
  if (process.env.ENV !== "production") {
    return <></>;
  }

  const tag =
    (screen && appConfig?.metaTags?.pageTags?.[`${screen}`]) || customTag;

  const title = tag?.title?.[locale] || "BestPOS: Finding you the best POS";
  const description =
    tag?.description?.[locale] ||
    "At BestPOS, let us help you find the best point-of-sale system for you and your business. Speak to one of our representatives and get started today!";
  const url =
    tag?.url?.[locale] || `${process.env.NEXT_PUBLIC_API_HOST}${asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property={`og:title`} content={title} />
      <meta property={`og:description`} content={description} />
      <meta property={`og:url`} content={url} />

      <meta name="keywords" content={appConfig?.metaTags?.keywords[locale]} />
      <meta name="robots" content="INDEX,FOLLOW" />
      <meta name="msvalidate.01" content="3C6845B8D23659F8E98DDA4C3166E803" />
      <meta
        property="og:site_name"
        content={appConfig?.metaTags?.pageTags?.home?.description[locale]}
      />
    </Head>
  );
};

export default HeadTag;
