import HeaderWithBack from "components/common/HeaderWithBack";
import SelectedList from "components/common/SelectedList";
import React, { useState } from "react";
import { Categories } from "../home/BusinessCategorySection";
import Image from "next/image";
import ContactForm from "components/common/ContactForm";
import { Button } from "components/common/Button";
import ThanksYouForm from "components/common/thanksform";

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
    <>
      <SelectedList
        data={Categories}
        classname={"mt-5 md:grid-cols-2"}
        itemclassname={"md:w-[240px]"}
        itemBuilder={(item, index: number) => {
          return (
            <div className="flex flex-row items-center p-3 gap-4 lg:p-6 md:flex-col md:justify-center lg:h-[190px]">
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
      <p className="txt-large-bold mt-10 mb-4 mx-4 ">Contact informations</p>
      <ContactForm />
      <Button
        classname="mt-12 mx-4"
        type="SOLID_MEDIUM"
        title="Send Request"
        background="bg-primary"
        onClick={submitForm}
      />
    </>
  );

  return (
    <>
      <input type="checkbox" id={RequestDemoModalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-0 pb-4 h-full">
          <div className="flex flex-col w-full">
            <HeaderWithBack title="Request a Demo" onClose={onClose} />
            {PAGE}
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDemoPOS;
