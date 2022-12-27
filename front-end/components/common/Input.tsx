import React, { ReactElement } from "react";
interface InputProps {
  label?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  leftIcon?: ReactElement;
}

const Input = ({ label, inputProps: inputprops, leftIcon }: InputProps) => {
  return (
    <div className="form-control w-full relative">
      {label && (
        <label className="py-2 txt-sm-bold">
          <span className="label-text">{label}</span>
        </label>
      )}
      {leftIcon && (
        <div className=" absolute bottom-3 left-3 w-6 h-6">{leftIcon}</div>
      )}
      <input
        {...inputprops}
        className={`input input-bordered input-secondary w-full p-3 ${
          leftIcon ? "pl-12" : ""
        }`}
      />
    </div>
  );
};

export default Input;
