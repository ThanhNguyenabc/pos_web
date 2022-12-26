import React from "react";

const FreePOSSection = () => {
  return (
    <div className="px-4 py-14 bg-white gap-12 inline-flex flex-col items-center text-left overflow-clip font-['Inter']">
      <div className="w-full leading-none relative font-bold text-neutral-900">
        <p className="text-3xl inline m-0 leading-[38px]]">
          {"Allow merchants to collect "}
        </p>
        <p className="text-3xl inline m-0 leading-[38px] text-success">
          up to 100%
        </p>
        <p className="text-3xl inline m-0 leading-[38px]">
          {" of their revenue without any fees."}
        </p>
      </div>

      <div className="w-full gap-6 flex flex-col items-start self-stretch"></div>
    </div>
  );
};

export default FreePOSSection;
