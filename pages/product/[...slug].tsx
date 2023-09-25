import HeadTag from "components/common/HeadTag";
import { ProductDetailView } from "components/elements/pos_detail/ProductDetail";
import SimilarPOS from "components/elements/pos_detail/SimilarPOS";
import { MetaTag } from "models/app_configs";
import { ProductDetail } from "models/product-detail.model";
import { GetServerSidePropsContext } from "next";
import { getSEOTagByProduct } from "pages/api/configs";
import { getProductDetail } from "pages/api/product_detail";
import React from "react";
import { AppRoutes } from "utils/routes";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.query.slug;
  const slug = params?.[0];

  if (slug) {
    const data = await Promise.all([
      getProductDetail(slug),
      getSEOTagByProduct(slug),
    ]);

    const productDetail = JSON.parse(JSON.stringify(data?.[0]));
    const meta_tag = data?.[1] || {};

    return {
      props: {
        meta_tag,
        product: productDetail,
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

const DetailPage = ({
  product,
  meta_tag,
}: {
  product?: ProductDetail;
  meta_tag?: MetaTag;
}) => {
  return (
    <>
      {meta_tag && <HeadTag tags={meta_tag} />}
      {product && <ProductDetailView productData={product} />}
      <SimilarPOS />
    </>
  );
};

export default DetailPage;
