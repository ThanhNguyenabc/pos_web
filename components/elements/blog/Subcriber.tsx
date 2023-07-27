import { subscribeBlog } from "api_client/axios_client";
import Box from "components/common/Box";
import { Button } from "components/common/Button";
import Input from "components/common/Input";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

const SubcriberTrans = {
  subscribe: {
    [Locale.en]: "Subscribe",
    [Locale.es]: "Suscribir",
  },
  desc: {
    [Locale.en]: "Stay in the loop with everything you need to know.",
    [Locale.es]: "Manténgase informado con todo lo que necesita saber.",
  },
  policyMessage: {
    [Locale.en]: "We care about your data in our privacy policy",
    [Locale.es]:
      "Nos preocupamos por tus datos en nuestra política de privacidad.",
  },
  subscribers: {
    [Locale.en]: "subscribers",
    [Locale.es]: "suscriptores",
  },
  join: {
    [Locale.en]: "Join",
    [Locale.es]: "Únete a los",
  },
};

interface SubcriberProps {
  className?: string;
}
const Subcriber = ({ className }: SubcriberProps) => {
  const { t, locale } = useTrans();
  const [email, setEmail] = useState("");

  const subscribeMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await subscribeBlog({
      conversion_funnel: "Subscribe Blog",
      ref_url: window.location.href,
      data: email,
    });
    toast.success("Thanks for your subscription");
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Box
      className={`bg-neutral-100 gap-6 py-12 md:mx-8 md:my-14 
      md:rounded-2xl md:gap-8 md:p-16 lg:flex-row lg:my-[120px] lg:p-16 ${className}`}
    >
      <div className="flex w-full flex-col text-center gap-2 md:gap-4 lg:text-start">
        <p className="txt-heading-xsmal md:txt-heading-small">
          {`${SubcriberTrans.join[locale]} 2,000+ ${SubcriberTrans.subscribers[locale]}`}
        </p>
        <p className="txt-md md:text-xl text-neutral-700">
          {SubcriberTrans.desc[locale]}
        </p>
      </div>
      <form onSubmit={subscribeMail} className="w-full">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-center w-full">
          <div className="flex flex-col">
            <Input
              inputProps={{
                value: email,
                required: true,
                type: "email",
                placeholder: t("email_hint"),
                onChange: onChangeEmail,
              }}
            />
            <p className="txt-sm mt-[6px]">
              {SubcriberTrans.policyMessage[locale]}
            </p>
          </div>
          <Button
            title={SubcriberTrans.subscribe[locale]}
            classname="md:h-12"
            type="submit"
          />
        </div>
      </form>
    </Box>
  );
};

export default Subcriber;
