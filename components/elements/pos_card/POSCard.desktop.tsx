import React from "react";
import Image from "next/image";
import { BreadMeBtn } from "../../common/BreadmeBtn";
import ColorUtils from "utils/ColorUtils";
import PricingBtn from "../../common/PricingBtn";
import { getSystemIcon } from "utils/StringUtil";
import useSideBar from "stores/useSideBar";
import ViewMore from "../../common/ViewMore";
import { DefaultImg } from "assets/AssetUtil";
import IcCheckbox from "assets/icons/ic_checkbox.svg";
import IcClose from "assets/icons/ic_close.svg";

import CustomCircularProgress from "../../common/CustomCircularProgress";
import RecommendTag from "../../common/RecommendTag";
import useTrans from "hooks/useTrans";
import { POSCardProps, RecommendColor } from "./POSCardTypes";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import { RightSideBarType } from "components/common/RightSideBar";
import { twMerge } from "tailwind-merge";

const POSCardDesktop = ({
  data,
  classname = "",
  priority,
  recommendTagProps,
}: POSCardProps) => {
  const openSideBar = useSideBar((state) => state.openSideBar);
  const { t, locale } = useTrans();
  const router = useRouter();
  const overallRating = data.expert_opinion.overall;

  const goToDetail = () => {
    router.push(`${AppRoutes.POSDetailPage}/${data.id}/${data.slug}`);
  };

  return (
    <div
      className={twMerge(
        `relative max-w-[1200px] max-h-[270px] bg-white border-2 border-b-neutral-300
        hover:border-secondary cursor-pointer gap-6 flex-row rounded-2xl p-6 
        shadow-poscard w-full lg:flex`,
        classname
      )}
      onClick={goToDetail}
    >
      {priority && (
        <div className="absolute left-3 top-[-12px]">
          <RecommendTag
            {...RecommendColor[priority as keyof typeof RecommendColor]}
            {...recommendTagProps}
          />
        </div>
      )}
      <CustomCircularProgress
        id="card-desktop-progress"
        className="w-[60px] h-fit"
        value={overallRating}
      >
        <p className="txt-large-bold">{overallRating}</p>
      </CustomCircularProgress>

      <div className="flex flex-col items-start gap-2">
        <Image
          src={data.logo || DefaultImg}
          alt="logo-pos"
          style={{ width: "auto" }}
          width={120}
          height={60}
          quality={90}
          className=" object-contain"
        />
        <p className="text-sm text-left text-neutral-900 max-w-[214px] line-clamp-5">
          {data.overview?.[locale]}
        </p>
        <div className="flex items-center gap-4">
          {data.os_system?.map((item, index) => {
            const Icon = getSystemIcon(item);
            return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
          })}
        </div>
      </div>

      <div className="flex flex-1 gap-7 relative overflow-y-hidden">
        <ul className="flex flex-col flex-1 text-left overflow-hidden">
          <p className="txt-sm-bold text-success">{t("pros")}</p>
          {data.pros?.[locale]?.map((item, index) => (
            <li
              className="flex flex-row items-center gap-2 mt-2"
              key={`${index}-item-pros`}
            >
              <IcCheckbox className=" text-success text-sm" />
              <p className="txt-sm flex-1 text-left text-neutral-700">{item}</p>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col flex-1 text-left h-full overflow-hidden">
          <p className="txt-sm-bold text-error">{t("cons")}</p>
          {data.cons?.[locale]?.map((item, index) => (
            <li
              className="flex flex-row items-center gap-2 mt-2"
              key={`${index}-item-cons `}
            >
              <IcClose className="text-error text-sm" />
              <p className="txt-sm text-neutral-700 flex-1"> {item}</p>
            </li>
          ))}
        </ul>
        <ViewMore className="absolute bottom-0" />
      </div>
      <BreadMeBtn />
      <PricingBtn
        logo={data.logo || DefaultImg}
        desc={`$${data.monthly_price}/${t("unit_month")}`}
        color={ColorUtils.secondary}
        onClick={() => openSideBar(RightSideBarType.RequestDemo)}
      />
    </div>
  );
};

export default POSCardDesktop;
