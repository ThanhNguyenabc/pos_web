import { GetStaticProps } from "next";
import React from "react";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
};

export default function () {
  return <></>;
}
