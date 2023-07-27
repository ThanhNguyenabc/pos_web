import IcChervonRight from "assets/icons/ic_chervon_right.svg";

import useTrans from "hooks/useTrans";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ViewMoreProps {
  className?: string;
}

const ViewMore = ({ className }: ViewMoreProps) => {
  const { t } = useTrans();
  return (
    <div
      className={twMerge(
        "flex w-full h-16 bg-gradient-to-b items-end justify-center pb-1 from-[#ffffff94] to-white",
        className
      )}
    >
      <button className="flex h-10 txt-sm-bold bg-white items-center px-4 py-[10px] gap-1 rounded-3xl shadow-poscard">
        {t("view_more")}
        <IcChervonRight className="text-xs" />
      </button>
    </div>
  );
};

export default ViewMore;
