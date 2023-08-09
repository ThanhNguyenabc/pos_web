import { getPOSDetail } from "api_client/axios_client";
import HeadTag from "components/common/HeadTag";
import { ProductDetail } from "components/elements/pos_detail/ProductDetail";
import SimilarPOS from "components/elements/pos_detail/SimilarPOS";
import useTrans from "hooks/useTrans";
import { Product } from "models/product.model";
import { GetServerSidePropsContext } from "next";
import { getProductDetail } from "pages/api/product_detail";
import React from "react";
import useAppStore from "stores/app_store";
import AppRoutes from "utils/routes";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.query.slug;
  const productID = params?.[0];

  if (productID) {
    const data = await getProductDetail(productID);

    return {
      props: {
        product: JSON.parse(JSON.stringify(data)),
      },
    };
  }
  return {
    redirect: {
      permanent: true,
      destination: AppRoutes.HomePage,
    },
    props: {},
  };
};

const DetailPage = ({ product }: { product: Product }) => {
  const { locale } = useTrans();
  const { appConfig } = useAppStore();
  const meta = appConfig?.metaTags?.pageTags?.productDetail;

  if (meta && product) {
    meta.title[locale] =
      meta?.title?.[locale]?.replace("[name]", product.name) || product.name;
    meta.description[locale] =
      meta?.description?.[locale]?.replace("[name]", product.name) ||
      product.name;
  }

  return (
    <>
      <HeadTag customTag={meta} />
      <ProductDetail productData={product} />
      <SimilarPOS />
    </>
  );
};

export default DetailPage;
