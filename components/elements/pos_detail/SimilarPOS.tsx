import { Product } from "models/product.model";
import React from "react";
import POSCard from "../pos_card/POSCard";
import IcRightArrow from "assets/icons/ic_chervon_right.svg";
import { useRouter } from "next/router";
import useTrans from "hooks/useTrans";
import { Button } from "components/common/Button";
import useSWRImmutable from "swr/immutable";
import { getListPOS } from "api_client/axios_client";
import Box from "components/common/Box";
import { AppRoutes } from "utils/routes";

const SimilarPOS = () => {
  const router = useRouter();
  const { t } = useTrans();

  const { data: products } = useSWRImmutable("similar-pos", () =>
    getListPOS({ type: "all", limit: 3 })
  );
  return (
    <Box className="flex flex-col py-4 items-center gap-4 bg-neutral-100 md:py-10 md:gap-6">
      <p className="txt-md-bold md:txt-heading-medium">
        Similar POS systems you may like
      </p>

      {products?.map((item, index) => {
        return <POSCard key={`card-item-${index}`} data={item} />;
      })}

      <Button
        classname="w-full md:w-fit mx-auto"
        title={t("explore_all")}
        isOutLine={true}
        rightIcon={<IcRightArrow className="ml-2.5 text-xl" />}
        onClick={() => router.push(AppRoutes.POSSystemPage)}
      />
    </Box>
  );
};

export default React.memo(SimilarPOS);
