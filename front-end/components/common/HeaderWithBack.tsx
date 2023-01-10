import React from "react";
import IconButton from "./IconButton";
import { IcClose } from "assets/AssetUtil";
interface HeaderWithBackProps {
  onClose?: () => void;
  title: string;
}
const HeaderWithBack = ({ onClose, title }: HeaderWithBackProps) => {
  return (
    <div className="flex flex-row items-center p-4 sticky top-0 bg-white z-10">
      <IconButton onClick={onClose}>
        <IcClose className=" text-base" />
      </IconButton>
      <p className="txt-large-bold flex-1 text-center mr-6">{title}</p>
    </div>
  );
};

export default HeaderWithBack;
