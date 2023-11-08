import { GetServerSidePropsContext } from "next";
import { getListPOS } from "api_client/axios_client";
import { ISitemapField, getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const products = await getListPOS();
  const fields: ISitemapField[] = products.map((item) => ({
    loc: `https://bestpos.com/product/${item.id}/${item.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
  }));
  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
