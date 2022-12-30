import React from "react";

interface ModalProps {
  modalId: string;
  children: React.ReactNode;
}
const Modal = ({ modalId, children }: ModalProps) => {
  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-0 h-full max-h-[800px]">{children}</div>
      </div>
    </>
  );
};

export default Modal;
