import HeaderWithBack from "components/common/HeaderWithBack";
import SelectedList from "components/common/SelectedList";
import React, { useState } from "react";
import Image from "next/image";
import { BusinessTypes } from "utils/StringUtil";
import { submitForDemoPOS } from "api_client/axios_client";
import { ContactInfo } from "models/contact_info";
import ContactForm from "components/common/ContactForm";
import "animate.css";
import Drawer from "react-modern-drawer";
import useOpenDemoPOSDialog from "stores/useOpenDemoPOSDialog";
import ThanksYouForm from "components/common/thanksform";

export const RequestDemoModalId = "requestDemoModal";

const RequestDemoPOS = () => {
  const { isOpen, toogleOpen: toogleDialog } = useOpenDemoPOSDialog();
  const [isSubmit, setSubmit] = useState(false);
  const [businessType, setBusinessType] = useState("");

  const onClose = () => {
    setSubmit(false);
    setBusinessType("");
    toogleDialog();
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
    <div className="flex w-full flex-col px-4 py-5 md:px-10">
      <p className="txt-md-bold mb-4 md:mb-6">Type of business</p>
      <SelectedList
        data={BusinessTypes}
        selectIndex={0}
        classname={" p-0 md:grid-cols-2 lg:grid-cols-4"}
        itemBuilder={(item, index: number) => {
          return (
            <div className="flex w-full h-full flex-row items-center p-3 gap-4 md:flex-col md:justify-center">
              <Image
                src={item.img}
                className="w-[84px]  md:w-[120px]"
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
      <Drawer
        open={isOpen}
        direction="right"
        onClose={toogleDialog}
        style={{
          width: "w-full",
        }}
        className="w-full md:w-[60%] max-w-[720px] overflow-auto"
      >
        <HeaderWithBack title="Request a Demo" onClose={onClose} />
        {PAGE}
      </Drawer>
    </>
  );
};

export default RequestDemoPOS;
