import { IcAmericanFlag } from "assets/AssetUtil";
import React, { useEffect, useState } from "react";
import { formatUSAPhoneNumber } from "utils/NumberUtil";
import Input from "./Input";

interface PhoneNumberInputProps {
  title?: string;
  value?: string;
  errorMessage?: string;
  onChangeValue?: (value: string) => void;
}

const PhoneNumberInput = ({
  title,
  errorMessage,
  onChangeValue,
}: PhoneNumberInputProps) => {
  const [value, setPhoneNumber] = useState("");

  return (
    <Input
      label={title || "Your Phone number"}
      leftIcon={<IcAmericanFlag className="text-2xl" />}
      inputProps={{
        type: "tel",
        placeholder: "(555) 000-0000",
        value: value,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setPhoneNumber(formatUSAPhoneNumber(e.target.value));
          onChangeValue && onChangeValue(value);
        },
      }}
      errorMessage={errorMessage}
    />
  );
};

export default PhoneNumberInput;
