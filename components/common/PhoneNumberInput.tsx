import IcAmericanFlag from "assets/icons/ic_american_flag.svg";

import React, { ChangeEvent, useState, useEffect, KeyboardEvent } from "react";
import { formatUSAPhoneNumber } from "utils/NumberUtil";
import Input from "./Input";

interface PhoneNumberInputProps {
  title?: string;
  value?: string;
  onChangeValue?: (value: string) => void;
}

const maxLengthPhoneNumber = 14;

const PhoneNumberInput = ({ title, onChangeValue }: PhoneNumberInputProps) => {
  const [data, setPhoneNumber] = useState<{
    errorMessage?: string;
    phoneNumber: string;
  }>({ phoneNumber: "" });

  useEffect(() => {
    if (!data.errorMessage) {
      onChangeValue && onChangeValue(data.phoneNumber);
    }
  }, [data]);

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data.errorMessage) return;
    const res = formatUSAPhoneNumber(e.target.value);
    let message = "";
    if (res.error && res.error == "invalid_area_code") {
      message = "Invalid us area code";
    }
    setPhoneNumber((prev) => ({
      phoneNumber: res.value,
      errorMessage: message,
    }));
  };

  const onInvalid = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < maxLengthPhoneNumber) {
      e.target.setCustomValidity("Phone number must contain 10 digits");
    }
  };

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= maxLengthPhoneNumber) {
      e.target.setCustomValidity("");
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.key === "Delete" || e.key === "Backspace") &&
      data.errorMessage === "Invalid us area code"
    ) {
      setPhoneNumber((prev) => ({
        phoneNumber: "",
        errorMessage: "",
      }));
    }
  };
  return (
    <Input
      label={title || "Your Phone number"}
      leftIcon={<IcAmericanFlag className="text-2xl" />}
      inputProps={{
        type: "tel",
        placeholder: "(555) 000-0000",
        onInput: onInput,
        onKeyDown: onKeyDown,
        onInvalid: onInvalid,
        minLength: 14,
        required: true,
        value: data.phoneNumber,
        onChange: onTextChange,
      }}
      errorMessage={data.errorMessage}
    />
  );
};

export default PhoneNumberInput;
