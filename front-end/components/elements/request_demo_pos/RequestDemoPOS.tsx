import HeaderWithBack from "components/common/HeaderWithBack";
import SelectedList from "components/common/SelectedList";
import React, { useState } from "react";
import Image from "next/image";
import ThanksYouForm from "components/common/thanksform";
import Modal from "components/common/Modal";
import Input from "components/common/Input";
import { BusinessTypes } from "utils/StringUtil";
import { submitForDemoPOS } from "api_client/axios_client";
import { ContactInfo } from "models/contact_info";
import ContactForm from "components/common/ContactForm";

export const RequestDemoModalId = "requestDemoModal";

const RequestDemoPOS = () => {
  const [isSubmit, setSubmit] = useState(false);

  const [businessType, setBusinessType] = useState("");

  const onClose = () => {
    setSubmit(false);
    setBusinessType("");
    document.getElementById(RequestDemoModalId)?.click();
  };

  const submitForm = async (data: ContactInfo) => {
    await submitForDemoPOS({
      typeBusiness: businessType,
      contact: data,
    });
    setSubmit(true);
  };

  const PAGE = isSubmit ? (
    <ThanksYouForm />
  ) : (
    <div className="flex flex-col px-4 py-5">
      <p className="txt-md-bold mb-4 md:mb-6">Type of business</p>
      <SelectedList
        data={BusinessTypes}
        selectIndex={0}
        classname={" p-0 md:grid-cols-2"}
        itemBuilder={(item, index: number) => {
          return (
            <div className="flex w-full md:h-[152px] flex-row items-center p-3 gap-4 md:flex-col md:justify-center">
              <Image
                src={item.img}
                className="w-[84px] h-[56px] md:w-[120px] md:h-20"
                alt="image"
              />
              <p className="txt-md-bold md:text-center ">{item.title}</p>
            </div>
          );
        }}
        onItemSelected={(index) => {
          setBusinessType(BusinessTypes[index].type);
        }}
      />
      <p className="txt-md-bold mt-10 mb-4">Contact informations</p>
      <ContactForm onSubmitForm={submitForm} />
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
