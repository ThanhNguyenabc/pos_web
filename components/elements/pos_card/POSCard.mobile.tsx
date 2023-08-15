import React from "react";
import Image from "next/image";
import IcLike from "assets/icons/ic_like.svg";
import IcChervonRight from "assets/icons/ic_chervon_right.svg";

import { DefaultImg } from "assets/AssetUtil";
import { getSystemIcon } from "utils/StringUtil";
import useSideBar from "stores/useSideBar";
import CustomCircularProgress from "components/common/CustomCircularProgress";
import ColorUtils from "utils/ColorUtils";
import Link from "next/link";
import { Button } from "components/common/Button";
import POSCardBusinessType from "./POSCardBusinessType";
import { RightSideBarType } from "components/common/RightSideBar";
import { twMerge } from "tailwind-merge";
import useTrans from "hooks/useTrans";
import { POSCardProps } from "./POSCardTypes";
import { AppRoutes } from "utils/routes";

const POSCardMobile = ({ data, priority, classname }: POSCardProps) => {
  const openSideBar = useSideBar((state) => state.openSideBar);
  const overallRating = data.expert_opinion.overall;
  const { id, slug, name } = data;
  const { t } = useTrans();
  const detailPage = `${AppRoutes.POSDetailPage}/${id}/${slug}`;

  const openDemoDialog = () => openSideBar(RightSideBarType.RequestDemo);

  return (
    <div
      className={twMerge(
        `w-full 
      bg-white shadow-md rounded-2xl overflow-hidden`,
        classname
      )}
    >
      <div className="flex flex-row border-b border-b-neutral-300">
        <Link className="  flex flex-col justify-center pr-4" href={detailPage}>
          {priority === "first" && (
            <div
              className="flex flex-row bg-primary text-white px-1 justify-center 
        items-center gap-2 rounded-br-lg rounded-tl-lg"
            >
              <IcLike className="text-sm" />
              <p className="text-[10px] font-semibold mt-1">MOST RECOMMENDED</p>
            </div>
          )}
          <div className="block w-[140px] pt-1">
            <Image
              src={data.logo || DefaultImg}
              alt="logo-pos"
              width={140}
              height={70}
              quality={80}
              sizes="20vw"
              className="object-contain pl-3"
            />
          </div>

          <div className="flex flex-rơw gap-2 pl-3 items-center py-2">
            <CustomCircularProgress
              id="card-mobile-progress"
              className="w-[40px] h-fit"
              value={overallRating}
            >
              <p className="txt-sm-bold">{overallRating}</p>
            </CustomCircularProgress>
            <div className="flex flex-col">
              <p className="txt-sm text-neutral-600">
                {(priority && t("out_standing")) || t("good")}
              </p>
              <div className="inline-flex text-secondary text-xs items-center gap-1">
                {t("read_review")}
                <IcChervonRight className="text-[8px]" />
              </div>
            </div>
          </div>
        </Link>

        <div className="flex flex-1 flex-col gap-5 px-2 items-center justify-end py-3 border-l border-neutral-300">
          <div
            onClick={openDemoDialog}
            className="text-sm font-semibold leading-5 text-secondary cursor-pointer"
          >
            {t("free_pos").replace("#", name)}
          </div>
          <Button
            title={t("request_a_demo")}
            classname="rounded-[30px] w-[160px] text-sm"
            style={{ background: ColorUtils.success }}
            onClick={openDemoDialog}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-row p-3">
        <div className="flex items-center gap-3 border-r border-neutral-300 pr-3">
          {data.os_system?.map((item, index) => {
            const Icon = getSystemIcon(item);
            return <Icon key={`item-os-${index}`} className="w-5 h-5" />;
          })}
        </div>
        <POSCardBusinessType productId={id} />
      </div>
    </div>
  );
};
export default POSCardMobile;
