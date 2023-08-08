import { getSpecification } from "api_client/axios_client";
import IcRetail from "assets/icons/ic_retail.svg";
import IcRestaurant from "assets/icons/ic_restaurant.svg";
import IcBarClub from "assets/icons/ic_barclub.svg";
import IcService from "assets/icons/ic_service1.svg";

import React from "react";
import useSWRImmutable from "swr/immutable";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";

const Icons = {
  Retail: IcRetail,
  "Bars and Night Clubs": IcBarClub,
  Restaurants: IcRestaurant,
};

const POSCardBusinessType = ({ productId }: { productId: string }) => {
  const { data } = useSWRImmutable(productId, getSpecification);
  const { locale = Locale.en } = useTrans();

  return (
    <div className="flex whitespace-nowrap overflow-x-scroll scroll scrollbar-hide">
      {data &&
        data.bestFor?.[locale]?.split(",").map((item, index) => {
          const Icon = Icons[item as keyof typeof Icons] || IcService;
          return (
            <div
              key={`type-${productId}-${index}`}
              className="flex ml-3 gap-1 sm:ml-6 items-center"
            >
              <Icon />
              <p className="text-xs text-neutral-700 sm:text-sm">{item}</p>
            </div>
          );
        })}
    </div>
  );
};

export default POSCardBusinessType;
