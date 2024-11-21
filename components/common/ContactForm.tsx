import useTrans from "hooks/useTrans";
import { ContactInfo } from "models/contact_info";
import React, { ReactNode, useCallback } from "react";
import { Button } from "./Button";
import Input from "./Input";
import { twMerge } from "tailwind-merge";
import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneNumberInputV2 from "./PhoneNumberInputV2";

const FormState = zod.object({
  name: zod.string().min(5, { message: "Name is must least at 5 characters" }),
  email: zod.string().email("Email is invalid"),
  phone: zod
    .string()
    .min(14, {
      message: "Phone number is invalid",
    })
    .max(14),
  message: zod.string(),
  zipcode: zod.string(),
});

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
  showSubmitButton?: boolean;
  children?: ReactNode;
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
  showSubmitButton = true,
  children,
}: ContactFormProps) => {
  const form = useForm({ resolver: zodResolver(FormState) });
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    formState: { errors = {} },
  } = form;

  const { t } = useTrans();

  const submitFormData = useCallback((data: ContactInfo) => {
    console.log(data);
    onSubmitForm && onSubmitForm(data);
  }, []);

  const getError = (field: string) => {
    if (!errors[field]) return "";
    return (errors[field]?.["message"] as string) || "";
  };

  return (
    <form
      className={`flex w-full flex-col gap-6 ${classname}`}
      onSubmit={handleSubmit(submitFormData, (error) => {
        console.log(error);
      })}
    >
      <Input
        focusColor={focusColor}
        label={nameTitle || t("your_name")}
        inputProps={register("name")}
        errorMessage={getError("name")}
      />
      {showEmail && (
        <Input
          focusColor={focusColor}
          label={t("email")}
          inputProps={register("email")}
          errorMessage={getError("email")}
        />
      )}
      <div className="flex flex-row gap-6">
        <PhoneNumberInputV2
          title={phoneTitle || t("your_phone")}
          errorMessage={getError("phone")}
          setValue={setValue}
          setError={setError}
          value={getValues("phone")}
          register={{ ...register("phone") }}
        />
        {showZipCode && (
          <Input
            focusColor={focusColor}
            label={t("zip_code")}
            inputProps={register("zipcode")}
            errorMessage={getError("zipcode")}
          />
        )}
      </div>
      {showMessage && (
        <div className="flex flex-col gap-2">
          <label className="txt-sm-bold">
            <span className="label-text">{t("message")}</span>
          </label>
          <textarea
            className="textarea textarea-secondary border-neutral-300 focus:outline-none focus:shadow-lg focus:border-secondary border-2 text-base p-3 h-[134px]"
            placeholder={t("leave_us_message")}
            {...register("message")}
          ></textarea>
        </div>
      )}
      {showSubmitButton && (
        <Button
          title={submitBtnTitle || t("submit")}
          classname={twMerge("mt-4", submitBtnClassName)}
          style={{
            background: submitBackground,
          }}
          type="submit"
        />
      )}
      {children}
    </form>
  );
};

export default ContactForm;
