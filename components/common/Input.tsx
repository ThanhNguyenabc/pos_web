import React, { ReactElement } from "react";
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
          className={`absolute ${
            errorMessage ? "bottom-9" : "bottom-3"
          } left-3 w-6 h-6`}
        >
          {leftIcon}
        </span>
      )}
      <input
        {...inputprops}
        className={`input input-bordered border-2 focus:shadow-lg focus:outline-none focus:border-secondary input-secondary ${focusColor} w-full p-3 ${
          leftIcon ? "pl-12" : ""
        }`}
      />

      {errorMessage && (
        <p className="mt-1 text-sm text-error">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
