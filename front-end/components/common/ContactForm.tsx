import { ContactInfo } from "models/contact_info";
import React, { FormEvent, useState } from "react";
import { Button } from "./Button";
import Input from "./Input";
import PhoneNumberInput from "./PhoneNumberInput";

interface ContactFormProps {
  nameTitle?: string;
  phoneTitle?: string;
  showEmail?: boolean;
  showZipCode?: boolean;
  showMessage?: boolean;
  classname?: string;
  focusColor?: string;
  onSubmitForm: (data: ContactInfo) => void;
  submitBtnClassName?: string;
  submitBtnTitle?: string;
  submitBackground?: string;
}

const ContactForm = ({
  showMessage = false,
  showZipCode = false,
  showEmail = true,
  onSubmitForm,
  nameTitle,
  phoneTitle,
  classname,
  submitBtnClassName,
  submitBtnTitle,
  submitBackground,
  focusColor,
}: ContactFormProps) => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
    message: "",
    zipcode: "",
  });

  const submitFormEvent = (e: FormEvent<HTMLFormElement>) => {
    console.log("event ");
    e.preventDefault();
    onSubmitForm && onSubmitForm(contactInfo);
  };

  return (
    <form
      className={`flex flex-col gap-6 ${classname}`}
      onSubmit={submitFormEvent}
    >
      <Input
        focusColor={focusColor}
        label={nameTitle || "Your name"}
        inputProps={{
          required: true,
          value: contactInfo?.name,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setContactInfo((prev) => ({
              ...prev,
              name: e.target.value,
            }));
          },
        }}
      />
      {showEmail && (
        <Input
          focusColor={focusColor}
          label="Email"
          inputProps={{
            required: true,
            type: "email",
            value: contactInfo?.email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setContactInfo((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            },
          }}
        />
      )}
      <div className="flex flex-row gap-6">
        <PhoneNumberInput
          title={phoneTitle || "Your Phone number"}
          onChangeValue={(value) => {
            setContactInfo((prev) => ({
              ...prev,
              phone: value,
            }));
          }}
        />
        {showZipCode && (
          <Input
            focusColor={focusColor}
            label="Zip Code"
            inputProps={{
              value: contactInfo?.zipcode,
              maxLength: 5,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setContactInfo((prev) => ({
                  ...prev,
                  zipcode: e.target.value,
                }));
              },
            }}
          />
        )}
      </div>
      {showMessage && (
        <div className="flex flex-col gap-2">
          <label className="txt-sm-bold">
            <span className="label-text">Message</span>
          </label>
          <textarea
            value={contactInfo?.message}
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
      )}
      <Button
        title={submitBtnTitle || "Submit"}
        classname={`mt-4 ${submitBtnClassName}`}
        style={{
          background: submitBackground,
        }}
        type="submit"
      />
    </form>
  );
};

export default ContactForm;
