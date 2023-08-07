import React from "react";
import IconButton from "./IconButton";
import IcClose from "assets/icons/ic_close.svg";

interface HeaderWithBackProps {
  onClose?: () => void;
  title: string;
  subTitle?: React.ReactElement;
}
const HeaderWithBack = ({ onClose, title, subTitle }: HeaderWithBackProps) => {
  return (
    <div className="flex flex-col md:flex-row  p-4 sticky top-0 bg-white z-10">
      <IconButton onClick={onClose} classname="md:w-10 md:h-10">
        <IcClose className="text-base" />
      </IconButton>
      <div className="flex flex-col gap-2 w-full">
        <p className="txt-large mr-3 font-bold text-center md:text-2xl">
          {title}
        </p>
        {subTitle}
      </div>
    </div>
  );
};

export default HeaderWithBack;
