import { subscribeBlog } from "api_client/axios_client";
import Box from "components/common/Box";
import { Button } from "components/common/Button";
import Input from "components/common/Input";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface SubcriberProps {
  className?: string;
}
const Subcriber = ({ className }: SubcriberProps) => {
  const [email, setEmail] = useState("");

  const subscribeMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await subscribeBlog({
      email: email,
    });
    toast.success("Thanks for your subscription");
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Box
      className={`bg-neutral-100 gap-6 py-12 md:mx-8 md:m-14 lg:m-[120px] md:rounded-2xl lg:flex-row md:gap-8 md:p-16 lg:p-16 ${className}`}
    >
      <div className="flex w-full flex-col text-center gap-2 md:gap-4 lg:text-start">
        <p className="txt-heading-xsmal md:txt-heading-small">
          Join 2,000+ subscribers
        </p>
        <p className="txt-md md:text-xl text-neutral-700">
          Stay in the loop with everything you need to know.
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
                placeholder: "Enter your email",
                onChange: onChangeEmail,
              }}
            />
            <p className="txt-sm mt-[6px]">
              We care about your data in our{" "}
              <Link href={""} className="link">
                privacy policy
              </Link>
            </p>
          </div>
          <Button title="Subscribe" classname="md:h-12" type="submit" />
        </div>
      </form>
    </Box>
  );
};

export default Subcriber;
