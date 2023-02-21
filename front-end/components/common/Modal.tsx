import React from "react";
import { twMerge } from "tailwind-merge";
import "animate.css";

interface ModalProps {
  modalId: string;
  children: React.ReactNode;
  className?: string;
}
const Modal = ({ modalId, children, className }: ModalProps) => {
  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className={twMerge("modal-box h-full max-h-[800px]", className)}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
