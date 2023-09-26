import useTrans from "hooks/useTrans";
import { MetaTag } from "models/app_configs";
import Head from "next/head";
import React from "react";

interface HeadTagProps {
  tags?: MetaTag;
}

const keywords = {
  en: "POS system, point of sale, Revel, Clover, Clover Flex, Clover Duo, Ovvi, Micros, Exatouch, Simphony, Aldelo, Toast, RPower, Union, POSusa, best pos, pos, small business, retail, pizzeria, bar and night club, quick service, restaurant, point of sale system, revel pos, clover pos, ovvi pos, micros pos, exatouch pos, simphony pos, aldelo pos, toast pos, square, rpower pos, union pos, top pos providers, smart pos system",
  es: "Sistema POS, punto de venta, Revel, Clover, Clover Flex, Clover Duo, Ovvi, Micros, Exatouch, Symphony, Aldelo, Toast, RPower, Union, POSusa, best pos, pos, pequeña empresa, comercio minorista, pizzería, bar y noche club, servicio rápido, restaurante, sistema de punto de venta, revel pos, clover pos, ovvi pos, micros pos, exatouch pos, symphony pos, aldelo pos, brindis pos, square, rpower pos, union pos, los mejores proveedores de pos, sistema smart pos ",
};

const defaultTitle = "BestPOS: Finding you the best POS";
const defaultDesc =
  "At BestPOS, let us help you find the best point-of-sale system for you and your business. Speak to one of our representatives and get started today!";

const HeadTag = ({ tags }: HeadTagProps) => {
  const { locale = "en", asPath } = useTrans();
  const title = tags?.title?.[locale] || defaultTitle;
  const description = tags?.description?.[locale] || defaultDesc;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta
        name="google-site-verification"
        content="9Z7pkHHa-SyW7x_jI3OaN3L3OfjbQLCJWujrmVsoK70"
      />
      <meta name="keywords" content={keywords?.[locale]} />
      <meta name="robots" content="INDEX,FOLLOW" />
      <meta name="msvalidate.01" content="3C6845B8D23659F8E98DDA4C3166E803" />

      <meta property={`og:title`} content={title} />
      <meta property={`og:description`} content={description} />
      <meta property={`og:image`} content={tags?.image || "/thumbnail.webp"} />
      <meta property="og:url" content={tags?.url?.[locale]} />
    </Head>
  );
};

export default HeadTag;
