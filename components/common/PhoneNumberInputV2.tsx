import IcAmericanFlag from "assets/icons/ic_american_flag.svg";

import React from "react";
import { formatUSAPhoneNumberV2 } from "utils/NumberUtil";
import Input from "./Input";
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
  UseFormSetError,
} from "react-hook-form";

interface PhoneNumberInputProps {
  title?: string;
  value?: string;
  errorMessage?: string;
  register: UseFormRegisterReturn;
  setError: UseFormSetError<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onChangeValue?: (value: string) => void;
}

const maxLengthPhoneNumber = 14;

const PhoneNumberInputV2 = ({
  title,
  onChangeValue,
  setError,
  setValue,
  value,
  register,
  errorMessage,
}: PhoneNumberInputProps) => {
  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    if (inputText.length < (value?.length || 0)) {
      setValue("phone", inputText);
      return;
    }

    const result = formatUSAPhoneNumberV2(inputText);

    setError("phone", {
      message: result.error == "invalid_area_code" ? "Invalid area code" : "",
    });

    setValue("phone", result.value);
  };

  const inputProps = {
    type: "tel",
    placeholder: "(555) 000-0000",
    ...register,
    onChange: onTextChange,
  };

  return (
    <Input
      label={title || "Your Phone number"}
      leftIcon={<IcAmericanFlag className="text-2xl" />}
      inputProps={inputProps}
      errorMessage={errorMessage}
    />
  );
};

export default PhoneNumberInputV2;
