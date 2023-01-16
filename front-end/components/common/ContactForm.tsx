import { IcAmericanFlag } from "assets/AssetUtil";
import Image from "next/image";
import { type } from "os";
import React from "react";
import { Button } from "./Button";
import Input from "./Input";

export interface ContactInfo {
  name?: string;
  email?: string;
  phoneNumber?: string;
  zipCode?: string;
  message?: string;
}

interface ContactFormProps {
  nameTitle?: string;
  phoneTitle?: string;
  showEmail?: boolean;
  showZipCode?: boolean;
  showMessage?: boolean;
  onDataChanged?: (info: ContactInfo) => {};
  classname?: string;
  focusColor?: string;
}

const ContactForm = ({
  showMessage = false,
  showZipCode = false,
  showEmail = true,
  nameTitle,
  phoneTitle,
  classname,
  onDataChanged,
  focusColor,
}: ContactFormProps) => {
  return (
    <div className={`flex flex-col gap-6 ${classname}`}>
      <Input
        focusColor={focusColor}
        label={nameTitle || "Your name"}
        inputProps={{
          onChange: (data) => {},
        }}
      />
      {showEmail && (
        <Input
          focusColor={focusColor}
          label="Email"
          inputProps={{
            type: "email",
            onChange: (data) => {},
          }}
        />
      )}
      <div className="flex flex-row gap-6">
        <Input
          focusColor={focusColor}
          label={phoneTitle || "Your Phone number"}
          leftIcon={<IcAmericanFlag className="text-2xl" />}
          inputProps={{
            type: "tel",
            onChange: (data) => {},
          }}
        />
        {showZipCode && (
          <Input
            focusColor={focusColor}
            label="Zip Code"
            inputProps={{
              maxLength: 5,
              onChange: (data) => {},
            }}
          />
        )}
      </div>
      {showMessage && (
        <div className="flex flex-col gap-2">
          <label className="txt-sm-bold">
            <span className="label-text">{"Message"}</span>
          </label>
          <textarea
            className="textarea textarea-secondary text-base p-3"
            placeholder="Leave us a message"
          ></textarea>
        </div>
      )}

    </div>
  );
};

export default ContactForm;
