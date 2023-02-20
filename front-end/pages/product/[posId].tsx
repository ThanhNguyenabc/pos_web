import AxiosInstance, {
  getPOSDetail,
  getSpecification,
} from "api_client/axios_client";
import { ProductDetail } from "components/elements/pos_detail/ProductDetail";
import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Loading from "components/common/loading/Loading";

const DetailPage = () => {
  const router = useRouter();
  const { posId = "" } = router.query;
  const { data: productData } = useSWR(`${posId}`, getPOSDetail);
  const { data: specificationData } = useSWR(`/api/specification`, () =>
    getSpecification(posId as string)
  );

  if (productData?.data && specificationData?.data)
    return (
      <ProductDetail
        product={productData.data}
        specification={specificationData.data}
      />
    );
  return (
    <div className="flex justify-center mt-8">
      <Loading />
    </div>
  );
};

export default DetailPage;
