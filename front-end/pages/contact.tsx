import { IcAmericanFlag, IcLocation, IcMail, IcPhone } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import { ContactInfo } from "components/common/ContactForm";
import React, { ReactElement, useState } from "react";
import Input from "components/common/Input";
import { isValidEmail, isValidPhoneNumber } from "utils/StringUtil";
import { submitContact } from "api_client/axios_client";
import { ThankyouModalId } from "components/common/ThankYouDialog";
import { formatUSAPhoneNumber } from "utils/NumberUtil";
import PhoneNumberInput from "components/common/PhoneNumberInput";

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
  const [contactInfo, setContactInfo] = useState<
    ContactInfo & {
      nameError: string;
      emailError: string;
      phoneError: string;
    }
  >({
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const submit = async () => {
    const {
      name = "",
      email = "",
      phoneNumber = "",
      zipCode,
      message,
    } = contactInfo;

    if (name.length <= 0) {
      setContactInfo((prev) => ({
        ...prev,
        nameError: "Your name is not empty",
      }));
      return;
    }
    if (!isValidEmail(email)) {
      setContactInfo((prev) => ({
        ...prev,
        emailError: "Your email is not correct",
      }));
      return;
    }
    if (!isValidPhoneNumber(phoneNumber)) {
      setContactInfo((prev) => ({
        ...prev,
        phoneError: "Your phone number must be at least 10 numbers",
      }));
      return;
    }

    setContactInfo((prev) => ({
      ...prev,
      phoneError: "",
      emailError: "",
      nameError: "",
    }));

    await submitContact({
      phone: phoneNumber,
      email: email,
      name: name,
      zipcode: zipCode || "",
      message: message || "",
    });

    document.getElementById(ThankyouModalId)?.click();
  };

  return (
    <>
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
        <div className="px-4 md:px-8 md:mt-20">
          <p className="txt-heading-small text-center md:text-5xl md:font-extrabold">
            Get in touch
          </p>
          <p className="txt-md mt-4 mb-10 text-center md:mt-5 md:text-xl text-neutral-600">
            We’d love to hear from you. Please fill out this form.
          </p>

          <div className={`flex flex-col gap-6 mb-8`}>
            <Input
              label={"Your name"}
              inputProps={{
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  setContactInfo((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                },
              }}
              errorMessage={
                contactInfo.nameError ? contactInfo.nameError : undefined
              }
            />

            <Input
              label="Email"
              inputProps={{
                type: "email",
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  setContactInfo((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                },
              }}
              errorMessage={
                contactInfo.emailError ? contactInfo.emailError : undefined
              }
            />

            <div className="flex flex-row gap-6">
              <PhoneNumberInput
                title={"Your Phone number"}
                onChangeValue={(value) => {
                  setContactInfo((prev) => ({
                    ...prev,
                    phoneNumber: value,
                  }));
                }}
                errorMessage={
                  contactInfo.phoneError ? contactInfo.phoneError : undefined
                }
              />
              <Input
                label="Zip Code"
                inputProps={{
                  maxLength: 5,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    setContactInfo((prev) => ({
                      ...prev,
                      zipCode: e.target.value,
                    }));
                  },
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="txt-sm-bold">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-secondary border-neutral-300 focus:outline-none focus:shadow-lg focus:border-secondary border-2 text-base p-3 h-[134px]"
                placeholder="Leave us a message"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setContactInfo((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }));
                }}
              ></textarea>
            </div>
          </div>
          <Button title="Send Message" classname="w-full" onClick={submit} />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
