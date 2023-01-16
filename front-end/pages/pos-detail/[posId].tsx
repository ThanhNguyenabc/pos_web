import AxiosInstance, {
  getPOSDetail,
  getSpecification,
} from "api_client/axios_client";
import { IcApple, RevelImg } from "assets/AssetUtil";
import { POSDetail } from "components/elements/pos_detail/PosDetail";
import { getOverallRating, Product } from "models/porduct";
import { Specification } from "models/specification";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";

const POSDetailPage = (props: {
  product: Product;
  specification: Specification;
}) => {
  return <POSDetail {...props} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { posId = "" } = context.query;
  const data = await Promise.all([
    getPOSDetail(posId as string),
    getSpecification(posId as string),
  ]);
  return {
    props: {
      product: data[0],
      specification: data[1],
    },
  };
}
export default POSDetailPage;
