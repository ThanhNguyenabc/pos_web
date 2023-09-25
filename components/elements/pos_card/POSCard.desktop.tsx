import React from "react";
import Image from "next/image";
import IcLike from "assets/icons/ic_like.svg";
import IcChervonRight from "assets/icons/ic_chervon_right.svg";
import IcCheckbox from "assets/icons/ic_checkbox.svg";
import { getSystemIcon } from "utils/StringUtil";
import useSideBar from "stores/useSideBar";
import { DefaultImg } from "assets/AssetUtil";
import useTrans from "hooks/useTrans";
import { POSCardProps } from "./POSCardTypes";
import CustomCircularProgress from "components/common/CustomCircularProgress";
import Link from "next/link";
import { Button } from "components/common/Button";
import ColorUtils from "utils/ColorUtils";
import POSCardBusinessType from "./POSCardBusinessType";
import { RightSideBarType } from "components/common/RightSideBar";
import { twMerge } from "tailwind-merge";
import { AppRoutes } from "utils/routes";
import RecommendTag from "components/common/RecommendTag";

const POSCardDesktop = ({
  data,
  classname = "",
  priority,
  recommendTagProps,
  navigateTo = "",
}: POSCardProps) => {
  const openSideBar = useSideBar((state) => state.openSideBar);
  const { t, locale } = useTrans();
  const overallRating = data.expert_opinion.overall;
  const { id, slug, name } = data;

  const openDemoDialog = () => openSideBar(RightSideBarType.RequestDemo);

  return (
    <div
      className={twMerge(
        " relative w-[1000px] bg-white shadow-poscard rounded-2xl border-2 border-white  hover:border-secondary",
        classname
      )}
    >
      <div className="absolute -top-4 ">
        {priority && recommendTagProps && (
          <RecommendTag {...recommendTagProps} />
        )}
      </div>
      <div className="flex flex-row border-b border-b-neutral-300">
        <div className="flex-1 flex flex-col items-start">
          <Link className="block w-[160px]  ml-4 my-auto" href={navigateTo}>
            <Image
              src={data.logo || DefaultImg}
              alt="logo-pos"
              width={160}
              height={80}
              quality={95}
              className="aspect-[2/1] object-contain"
            />
          </Link>
        </div>

        <div className=" flex-1 flex flex-col p-4 ml-2">
          <p className="txt-md-bold line-clamp-5  w-[380px]">
            {data.overview?.[locale]}
          </p>
          <ul className="flex flex-col flex-1 text-left ">
            {data.pros?.[locale]?.map((item, index) => {
              if (index > 3) return;
              return (
                <li
                  className="flex flex-row items-center gap-2 mt-2"
                  key={`${index}-item-pros`}
                >
                  <IcCheckbox className="text-secondary text-sm" />
                  <p className="txt-sm flex-1 text-left text-neutral-700">
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          className=" flex-1 flex flex-col border-l border-neutral-300 border-r gap-1 py-8 px-4 items-center justify-center"
          href={navigateTo}
        >
          <CustomCircularProgress
            id="card-desktop-progress"
            className="w-[64px] h-fit"
            value={overallRating}
          >
            <p className="txt-large-bold">{overallRating}</p>
          </CustomCircularProgress>
          <p className="text-sm text-neutral-600">
            {(priority && t("out_standing")) || t("good")}
          </p>
          <div className="inline-flex link-hover text-secondary txt-sm-bold items-center gap-1">
            {t("read_review")}
            <IcChervonRight className=" text-[9px]" />
          </div>
        </Link>
        <div className="flex-1 flex flex-col gap-8 py-8 px-4 items-center self-center">
          <div
            onClick={openDemoDialog}
            className="text-base link-hover font-semibold text-secondary cursor-pointer px-3 text-center max-w-[230px]"
          >
            {t("free_pos").replace("#", name)}
          </div>
          <Button
            title={t("request_a_demo")}
            classname="rounded-[30px] w-[210px] md:text-base lg:text-base"
            style={{ background: ColorUtils.success }}
            onClick={openDemoDialog}
          />
        </div>
      </div>

      <div className="flex flex-row p-4">
        <div className="flex items-center gap-3 border-r border-neutral-300 pr-6">
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

export default POSCardDesktop;
