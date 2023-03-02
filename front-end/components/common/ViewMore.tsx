import { IcChervonRight } from "assets/AssetUtil";
import React from "react";

interface ViewMoreProps {
  className?: string;
}

const ViewMore = ({ className }: ViewMoreProps) => {
  return (
    <div
      className={`flex w-full h-16 bg-gradient-to-b items-end justify-center pb-1 from-[#ffffff94] to-white ${className}`}
    >
      <button className="flex h-10 txt-sm-bold bg-white items-center px-4 py-[10px] gap-1 rounded-3xl  shadow-poscard">
        View More
        <IcChervonRight className=" text-xs" />
      </button>
    </div>
  );
};

export default ViewMore;
