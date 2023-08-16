import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
interface InputProps {
  label?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  leftIcon?: ReactElement;
  focusColor?: string;
  errorMessage?: string;
  className?: string;
}

const Input = ({
  label,
  inputProps: inputprops,
  leftIcon,
  focusColor,
  errorMessage,
  className,
}: InputProps) => {
  return (
    <div className={`form-control w-full relative ${className}`}>
      {label && (
        <label className="py-2 txt-sm-bold">
          <span className="label-text">{label}</span>
        </label>
      )}
      {leftIcon && (
        <span
          className={twMerge(
            "absolute left-3 w-6 h-6",
            errorMessage ? "bottom-9" : "bottom-3"
          )}
        >
          {leftIcon}
        </span>
      )}
      <input
        {...inputprops}
        className={twMerge(
          "input input-bordered border-2 focus:shadow-lg focus:outline-none focus:border-secondary w-full p-3",
          focusColor,
          leftIcon && "pl-12"
        )}
      />

      {errorMessage && (
        <p className="mt-1 text-sm text-error">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
