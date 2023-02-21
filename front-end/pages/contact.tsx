import { IcLocation, IcMail, IcPhone } from "assets/AssetUtil";
import React, { ReactElement } from "react";
import { SuccessMessage } from "utils/StringUtil";
import { submitContact } from "api_client/axios_client";
import { ContactInfo } from "models/contact_info";
import ContactForm from "components/common/ContactForm";
import { useAlert } from "react-alert";

const ContactItem = ({
  icon,
  title,
  desc,
  subDesc,
}: {
  icon: ReactElement;
  title: string;
  desc: string;
  subDesc: string;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center text-center md:gap-5">
      <div className=" flex w-12 h-12 p-1 rounded-2xl bg-accent justify-center items-center text-primary">
        {icon}
      </div>
      <p className="txt-md-bold md:text-xl">{title}</p>
      <p className="txt-md text-neutral-600">{desc}</p>
      <p className="txt-md-bold text-secondary md:max-w-[200px]">{subDesc}</p>
    </div>
  );
};

const ContactPage = () => {
  const alert = useAlert();

  const sendContactInfo = async (data: ContactInfo) => {
    await submitContact(data);
    alert.success(SuccessMessage);
  };

  return (
    <>
      <div className="flex  flex-col py-12 items-center gap-12 md:gap-14 lg:gap-20 md:py-14">
        <div className="flex flex-col w-full px-4 md:px-8 gap-10">
          <div className="flex flex-col gap-4 items-center text-center">
            <p className="txt-md-bold text-primary">Contact us</p>
            <p className="txt-heading-medium md:font-extrabold md:text-6xl">
              We’d love to hear from you
            </p>
            <p className="txt-md text-neutral-600 md:text-xl">
              Our friendly team is always here to chat.
            </p>
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:justify-between lg:mx-[100px] xl:mx-[120px]">
            <ContactItem
              icon={<IcMail className="w-6 h-6" />}
              title="Email"
              desc="Our friendly team is here to help."
              subDesc="info@bestpos.com"
            />

            <ContactItem
              icon={<IcLocation className="w-6 h-6" />}
              title="Office"
              desc="Come say hello at our office HQ."
              subDesc="Garden City, NY,  United States, New York"
            />
            <ContactItem
              icon={<IcPhone className="w-5 h-5" />}
              title="Phone"
              desc="Mon-Fri from 8am to 5pm."
              subDesc="+1 888-410-2188"
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="px-4 md:px-8">
          <p className="txt-heading-small text-center md:text-5xl md:font-extrabold">
            Get in touch
          </p>
          <p className="txt-md mt-4 mb-10 text-center md:mt-5 md:text-xl text-neutral-600">
            We’d love to hear from you. Please fill out this form.
          </p>

          <ContactForm
            submitBtnTitle="Send Message"
            showMessage
            showZipCode
            onSubmitForm={sendContactInfo}
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
