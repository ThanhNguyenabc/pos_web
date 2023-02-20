import React from "react";
import Products from "components/elements/Products";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  let { type } = context.query;
  return {
    props: {
      type,
    },
  };
};
export default Products;
