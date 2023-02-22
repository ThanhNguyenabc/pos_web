import React from "react";
import { Button } from "./Button";
import Modal from "./Modal";
import ThanksYouForm from "./ThanksForm";
export const ThankyouModalId = "thankyouModal";

const ThankYouDialog = () => {
  return (
    <Modal modalId={ThankyouModalId}>
      <div className=" flex flex-col gap-6 items-center">
        <ThanksYouForm />
        <Button
          classname="w-32 h-12"
          title="Ok"
          onClick={() => {
            document.getElementById(ThankyouModalId)?.click();
          }}
        />
      </div>
    </Modal>
  );
};

export default ThankYouDialog;
