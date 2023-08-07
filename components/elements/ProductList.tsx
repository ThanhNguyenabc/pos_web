import { getListPOS } from "api_client/axios_client";
import Loading from "components/common/loading/Loading";
import useTrans from "hooks/useTrans";
import { CategoryType } from "models/category_type";
import React from "react";
import useSWRImmutable from "swr";

import Box from "components/common/Box";
import { Priority, RecommendColor } from "./pos_card/POSCardTypes";
import POSCardV2 from "./pos_card/POSCard";

const ProductList = ({ type }: { type: string }) => {
  const { t } = useTrans();
  const { data, isLoading } = useSWRImmutable(
    `${type}`,
    () => getListPOS({ type: type }),
    {
      revalidateOnFocus: false,
    }
  );

  const renderItems = () => {
    let items: Array<React.ReactElement> = [];
    if (data)
      data.forEach((item, index) => {
        if (index < 3) {
          const priority =
            index == 0
              ? Priority.first
              : index == 1
              ? Priority.second
              : Priority.third;
          const priorityBorder = priority
            ? `border-2  ${
                RecommendColor[priority as keyof typeof RecommendColor].border
              }`
            : "";

          items.push(
            <POSCardV2
              key={`card-item-${index}`}
              data={item}
              classname={`${priorityBorder}`}
              priority={priority}
            />
          );
          if (index == 2 && type == CategoryType.popular) {
            items.push(
              <div
                className="relative w-full h-[32px]"
                key={`divider-${index}`}
              >
                <div className="absolute mx-auto left-0 right-0 bg-neutral-100 px-4 py-1 border-neutral-300 border-2 rounded-lg w-fit">
                  <p className="txt-sm-bold md:text-base ">
                    {t("other_recommend_pos")}
                  </p>
                </div>
                <span className="divider h-[2px]" />
              </div>
            );
          }
        } else {
          items.push(<POSCardV2 key={`card-item-${index}`} data={item} />);
        }
      });
    return items;
  };

  return (
    <Box className="flex flex-1 container-content gap-6 items-center">
      {isLoading && <Loading />}
      {data && renderItems()}
    </Box>
  );
};
export default ProductList;
