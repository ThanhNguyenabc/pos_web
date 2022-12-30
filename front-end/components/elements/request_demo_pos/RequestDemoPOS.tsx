import HeaderWithBack from "components/common/HeaderWithBack";
import SelectedList from "components/common/SelectedList";
import React, { useState } from "react";
import { Categories } from "../home/BusinessCategorySection";
import Image from "next/image";
import ContactForm from "components/common/ContactForm";
import { Button } from "components/common/Button";
import ThanksYouForm from "components/common/thanksform";
import Modal from "components/common/Modal";

export const RequestDemoModalId = "requestDemoModal";

const RequestDemoPOS = () => {
  const [isSubmit, setSubmit] = useState(false);

  const onClose = () => {
    document.getElementById(RequestDemoModalId)?.click();
    setSubmit(false);
  };

  const submitForm = () => {
    setSubmit(true);
  };

  const PAGE = isSubmit ? (
    <ThanksYouForm />
  ) : (
    <div className="flex flex-col px-4 py-5">
      <SelectedList
        data={Categories}
        classname={" p-0 md:grid-cols-2"}
        itemBuilder={(item, index: number) => {
          return (
            <div className="flex w-full flex-row items-center p-3 gap-4 md:flex-col md:justify-center">
              <Image
                src={item.link}
                className="w-[84px] h-[56px] md:w-[120px] md:h-20"
                alt="image"
              />
              <p className="txt-md-bold md:text-center ">{item.name}</p>
            </div>
          );
        }}
      />
      <p className="txt-md-bold mt-10 mb-4">Contact informations</p>
      <ContactForm />
      <Button classname="mt-12" title="Send Request" onClick={submitForm} />
    </div>
  );

  return (
    <>
      <Modal modalId={RequestDemoModalId}>
        <div className="flex flex-col w-full">
          <HeaderWithBack title="Request a Demo" onClose={onClose} />
          {PAGE}
        </div>
      </Modal>
    </>
  );
};

export default RequestDemoPOS;
