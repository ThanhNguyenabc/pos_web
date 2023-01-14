import AxiosInstance, { getPOSDetail } from "api_client/axios_client";
import { IcApple, RevelImg } from "assets/AssetUtil";
import { POSDetail } from "components/elements/pos_detail/PosDetail";
import { getOverallRating, Product } from "models/porduct";
import { GetServerSidePropsContext } from "next";
import React from "react";
import { getSystemIcon, ProductIcons } from "utils/StringUtil";

const POSDetailPage = ({ data }: { data: Product }) => {
  return <POSDetail data={data} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { posId } = context.query;
  const data = await getPOSDetail(posId as string);
  return {
    props: {
      data,
    },
  };
}
export default POSDetailPage;
