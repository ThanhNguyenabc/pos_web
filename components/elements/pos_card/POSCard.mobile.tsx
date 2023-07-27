import React from "react";
import Image from "next/image";
import { DefaultImg } from "assets/AssetUtil";
import { getSystemIcon } from "utils/StringUtil";
import useSideBar from "stores/useSideBar";
import { useRouter } from "next/router";
import AppRoutes from "utils/routes";
import CustomCircularProgress from "../../common/CustomCircularProgress";
import RecommendTag from "../../common/RecommendTag";
import useTrans from "hooks/useTrans";
import { POSCardProps, RecommendColor } from "./POSCardTypes";
import { RightSideBarType } from "components/common/RightSideBar";
import { twMerge } from "tailwind-merge";

const POSCardMobile = ({
  data,
  priority,
  classname,
  recommendTagProps,
}: POSCardProps) => {
  const openSideBar = useSideBar((state) => state.openSideBar);
  const router = useRouter();
  const overallRating = data.expert_opinion.overall;
  const { locale, t } = useTrans();

  const goToDetail = () => {
    router.push(`${AppRoutes.POSDetailPage}/${data.id}/${data.slug}`);
  };

  return (
    <div
      className={twMerge(
        "relative flex flex-col p-3 gap-4 w-full bg-white rounded-2xl shadow-poscard cursor-pointer",
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
      <div className="w-full flex flex-row h-10 items-center justify-between">
        <Image
          src={data.logo || DefaultImg}
          alt="logo-pos"
          width={80}
          height={80}
        />
        <div className="flex items-center gap-4">
          {data.os_system?.map((item, index) => {
            const Icon = getSystemIcon(item);
            return <Icon key={`item-os-${index}`} className="w-6 h-6" />;
          })}

          <CustomCircularProgress
            id="card-mobile-progress"
            className=" h-10 w-10"
            value={overallRating}
          >
            <p className="txt-sm-bold">{overallRating}</p>
          </CustomCircularProgress>
        </div>
      </div>
      <p className="w-full text-sm text-neutral-700">
        {data.overview?.[locale]}
      </p>
      <div className="flex w-full flex-row h-[48px] gap-2 justify-between">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.push(AppRoutes.BreadmeQuestionPage);
          }}
          className="flex flex-row bg-success flex-1 items-center justify-center gap-1 text-white rounded-lg"
        >
          <Image
            src={
              "https://res.cloudinary.com/dgrym3yz3/image/upload/v1682585827/assets/common/small_breadme_logo_jtzthp.png"
            }
            width={16}
            height={16}
            className="aspect-square"
            quality={95}
            alt="mobile-breadme-logo"
          />
          <p className="text-xs font-semibold">{t("get_a_free_pos")}</p>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openSideBar(RightSideBarType.RequestDemo);
          }}
          className="flex bg-secondary flex-1 items-center justify-center text-white rounded-lg"
        >
          <p className=" text-xs font-semibold ">
            ${data.monthly_price} {t("monthly")}
          </p>
        </button>
      </div>
    </div>
  );
};
export default POSCardMobile;
