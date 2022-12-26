import React from "react";
interface TagProps {
  text: string;
}
const Tag = ({ text }: TagProps) => {
  return (
    <div
      className={`[box-shadow:0px_0px_0px_2px_rgba(3,_152,_85,_1)_inset] [box-shadow-width:2px] px-3 py-1 gap-1 inline-flex justify-center items-center text-center font-semibold rounded-[20px] font-['Inter'] text-[rgba(3,152,85,1)]`}
    >
      <p className="text-sm leading-5 m-0">Breadme partnership</p>
    </div>
  );
};

export default Tag;
