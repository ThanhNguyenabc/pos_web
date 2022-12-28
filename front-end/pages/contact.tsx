import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import { StaticImageData } from "next/image";
import React from "react";

const ContactItem = ({
  title,
  desc,
  subDesc,
}: {
  icon?: StaticImageData;
  title: string;
  desc: string;
  subDesc: string;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center text-center">
      <p className="txt-md-bold">{title}</p>
      <p className="txt-md text-neutral-600">{desc}</p>
      <p className="txt-md-bold text-secondary">{subDesc}</p>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="flex flex-col py-12 px-4 gap-10 items-cente">
      <div className="flex flex-col gap-4 items-center text-center">
        <p className="txt-md-bold text-primary">Contact us</p>
        <p className="txt-heading-medium">We’d love to hear from you</p>
        <p className="txt-md text-neutral-600">
          Our friendly team is always here to chat.
        </p>
      </div>
      <ContactItem
        title="Email"
        desc="Our friendly team is here to help."
        subDesc="info@bestpos.com"
      />

      <ContactItem
        title="Office"
        desc="Come say hello at our office HQ."
        subDesc="Garden City, NY,  United States, New York"
      />
      <ContactItem
        title="Phone"
        desc="Mon-Fri from 8am to 5pm."
        subDesc="i+1 888-410-2188"
      />
      <div className="mt-2 pt-12">
        <p className="txt-heading-small text-center">Get in touch</p>
        <p className="txt-md mt-4 mb-10 text-center">
          We’d love to hear from you. Please fill out this form.
        </p>
        <ContactForm
          showMessage={true}
          showZipCode={true}
          classname=" px-0 mb-8"
        />
        <Button
          type="SOLID_MEDIUM"
          title="Send Message"
          classname="w-full"
          background="bg-primary"
        />
      </div>
    </div>
  );
};

export default Contact;
