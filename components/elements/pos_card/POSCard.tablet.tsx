import React from "react";
import Image from "next/image";
import { BreadMeBtn } from "../../common/BreadmeBtn";
import PricingBtn from "../../common/PricingBtn";
import ColorUtils from "utils/ColorUtils";
import { getSystemIcon } from "utils/StringUtil";
import useSideBar from "stores/useSideBar";
import CustomCircularProgress from "../../common/CustomCircularProgress";
import RecommendTag from "../../common/RecommendTag";
import useTrans from "hooks/useTrans";
import { DefaultImg } from "assets/AssetUtil";
import { POSCardProps, RecommendColor } from "./POSCardTypes";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { RightSideBarType } from "components/common/RightSideBar";
import { twMerge } from "tailwind-merge";

const POSCardTablet = ({
  data,
  classname,
  priority,
  recommendTagProps,
}: POSCardProps) => {
  const openSideBar = useSideBar((state) => state.openSideBar);
  const overallRating = data.expert_opinion.overall;
  const { locale } = useTrans();
  const router = useRouter();

  const goToDetail = () => {
    router.push(`${AppRoutes.POSDetailPage}/${data.id}/${data.slug}`);
  };

  return (
    <div
      className={twMerge(
        `flex w-full max-h-[275px] border-2 border-b-neutral-300 hover:border-secondary bg-white card gap-4 
        flex-row rounded-2xl p-6 shadow-poscard cursor-pointer`,
        classname
      )}
      onClick={goToDetail}
    >
      {priority && (
        <span className="absolute left-3 top-[-12px]">
          <RecommendTag
            {...RecommendColor[priority as keyof typeof RecommendColor]}
            {...recommendTagProps}
          />
        </span>
      )}
      <CustomCircularProgress
        id="card-tablet-progress"
        className="w-[60px]"
        value={overallRating}
      >
        <p className="txt-large-bold">{overallRating}</p>
      </CustomCircularProgress>

      <div className="flex flex-col flex-1 items-start gap-2">
        <Image
          src={data.logo || DefaultImg}
          alt="logo-pos"
          width={120}
          height={60}
          style={{ width: "auto" }}
          className="object-contain"
        />
        <p className="text-sm text-left text-neutral-900">
          {data.overview?.[locale]}
        </p>
        <div className="flex items-center gap-4">
          {data.os_system?.map((item, index) => {
            const Icon = getSystemIcon(item);
            return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
          })}
        </div>
      </div>
      <BreadMeBtn />
      <PricingBtn
        logo={data.logo || DefaultImg}
        desc={`$${data.monthly_price}/mo`}
        color={ColorUtils.secondary}
        onClick={() => openSideBar(RightSideBarType.RequestDemo)}
      />
    </div>
  );
};

export default POSCardTablet;
