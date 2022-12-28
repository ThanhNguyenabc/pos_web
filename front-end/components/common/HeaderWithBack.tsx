import React from "react";
import IconButton from "./IconButton";
import Image from "next/image";
import { IcBack, IcClose } from "assets/AssetUtil";
interface HeaderWithBackProps {
  onClose?: () => void;
  title: string;
}
const HeaderWithBack = ({ onClose, title }: HeaderWithBackProps) => {
  return (
    <div className="flex flex-row items-center p-4 sticky top-0 bg-white z-10">
      <IconButton onClick={onClose}>
        <Image src={IcClose} alt="back" className="w-3 h-3" />
      </IconButton>
      <p className="txt-large-bold flex-1 text-center mr-6">{title}</p>
    </div>
  );
};

export default HeaderWithBack;
