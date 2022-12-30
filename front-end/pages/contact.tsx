import { IcLocation, IcMail, IcPhone } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from "react";
import ColorUtils from "utils/ColorUtils";
import { IcLocation as ReactComponent } from "assets/AssetUtil";

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
      <div className=" flex w-12 h-12 p-1 rounded-2xl bg-accent justify-center items-center">
        {icon}
      </div>
      <p className="txt-md-bold md:text-xl">{title}</p>
      <p className="txt-md text-neutral-600">{desc}</p>
      <p className="txt-md-bold text-secondary">{subDesc}</p>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="flex  flex-col py-12 gap-10 items-center  md:py-14">
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
        <div className="flex flex-col gap-10 md:flex-row md:justify-between xl:mx-[120px]">
          <ContactItem
            icon={
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 20C3.95 20 3.47933 19.8043 3.088 19.413C2.696 19.021 2.5 18.55 2.5 18V6C2.5 5.45 2.696 4.97933 3.088 4.588C3.47933 4.196 3.95 4 4.5 4H20.5C21.05 4 21.521 4.196 21.913 4.588C22.3043 4.97933 22.5 5.45 22.5 6V18C22.5 18.55 22.3043 19.021 21.913 19.413C21.521 19.8043 21.05 20 20.5 20H4.5ZM20.5 8L13.025 12.675C12.9417 12.725 12.854 12.7623 12.762 12.787C12.6707 12.8123 12.5833 12.825 12.5 12.825C12.4167 12.825 12.3293 12.8123 12.238 12.787C12.146 12.7623 12.0583 12.725 11.975 12.675L4.5 8V18H20.5V8ZM12.5 11L20.5 6H4.5L12.5 11ZM4.5 8.25V6.775V6.8V6.787V8.25Z"
                  fill={ColorUtils.primary}
                />
              </svg>
            }
            title="Email"
            desc="Our friendly team is here to help."
            subDesc="info@bestpos.com"
          />

          <ContactItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.8043 11.0207 14 10.55 14 10C14 9.45 13.8043 8.979 13.413 8.587C13.021 8.19567 12.55 8 12 8C11.45 8 10.9793 8.19567 10.588 8.587C10.196 8.979 10 9.45 10 10C10 10.55 10.196 11.0207 10.588 11.412C10.9793 11.804 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7873 16.525 14.262C17.5083 12.7373 18 11.3833 18 10.2C18 8.38333 17.4207 6.89567 16.262 5.737C15.104 4.579 13.6833 4 12 4C10.3167 4 8.89567 4.579 7.737 5.737C6.579 6.89567 6 8.38333 6 10.2C6 11.3833 6.49167 12.7373 7.475 14.262C8.45833 15.7873 9.96667 17.4833 12 19.35ZM12 21.625C11.8667 21.625 11.7333 21.6 11.6 21.55C11.4667 21.5 11.35 21.4333 11.25 21.35C8.81667 19.2 7 17.2043 5.8 15.363C4.6 13.521 4 11.8 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.021 2.74167 9.88333 2 12 2C14.1167 2 15.979 2.74167 17.587 4.225C19.1957 5.70833 20 7.7 20 10.2C20 11.8 19.4 13.521 18.2 15.363C17 17.2043 15.1833 19.2 12.75 21.35C12.65 21.4333 12.5333 21.5 12.4 21.55C12.2667 21.6 12.1333 21.625 12 21.625Z"
                  fill={ColorUtils.primary}
                />
              </svg>
            }
            title="Office"
            desc="Come say hello at our office HQ."
            subDesc="Garden City, NY,  United States, New York"
          />
          <ContactItem
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.621 15.604 6.81267 14.3373 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.479334 5.29567 0 3.2 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.72933 4.74567 6.688 4.937C6.646 5.129 6.55 5.3 6.4 5.45L4 7.9C4.7 9.1 5.575 10.225 6.625 11.275C7.675 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3873 13.038 11.312C13.2793 11.2373 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1123 17.775 12.287C17.925 12.4623 18 12.6667 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
                  fill={ColorUtils.primary}
                />
              </svg>
            }
            title="Phone"
            desc="Mon-Fri from 8am to 5pm."
            subDesc="i+1 888-410-2188"
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="px-4 md:px-8 md:mt-20">
        <p className="txt-heading-small text-center md:text-5xl md:font-extrabold">
          Get in touch
        </p>
        <p className="txt-md mt-4 mb-10 text-center md:mt-5 md:text-xl">
          We’d love to hear from you. Please fill out this form.
        </p>
        <ContactForm
          showMessage={true}
          showZipCode={true}
          classname=" px-0 mb-8"
        />
        <Button title="Send Message" classname="w-full" />
      </div>
    </div>
  );
};

export default Contact;
