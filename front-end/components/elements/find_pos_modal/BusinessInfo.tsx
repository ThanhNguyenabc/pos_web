import { IcAmericanFlag, IcBack, IcRightArrow } from "assets/AssetUtil";
import { Button } from "components/common/Button";
import Input from "components/common/Input";
import React, { useState } from "react";
import { isValidPhoneNumber } from "utils/StringUtil";
import { FindPOSModalContext } from "./FindPOSModal";

const BusinessInfo = () => {
  const value = React.useContext(FindPOSModalContext);

  const [businessContact, setBusinessContact] = useState<{
    businessName: string;
    businessPhone: string;
    nameError: string;
    phoneError: string;
  }>({
    businessName: value.data?.businessName || "",
    businessPhone: value.data?.businessPhone || "",
    nameError: "",
    phoneError: "",
  });

  const nextClick = () => {
    const { businessName, businessPhone } = businessContact;

    if (businessName.length <= 0) {
      setBusinessContact((preData) => ({
        ...preData,
        nameError: "Your business name is not empty",
      }));
      return;
    }

    if (!isValidPhoneNumber(businessPhone)) {
      setBusinessContact((preData) => ({
        ...preData,
        phoneError: "Your phone number must be at least 10 numbers",
      }));
      return;
    }
    setBusinessContact((preData) => ({
      ...preData,
      nameError: "",
      phoneError: "",
    }));
    value.setData({
      ...value.data,
      businessPhone: businessPhone,
      businessName: businessName,
    });
    value.nextPage();
  };
  return (
    <div className="flex flex-col gap-6">
      <Input
        label={"Company name"}
        inputProps={{
          value: businessContact.businessName,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setBusinessContact((preData) => ({
              ...preData,
              businessName: e.target.value,
            }));
          },
        }}
        errorMessage={
          businessContact.nameError ? businessContact.nameError : undefined
        }
      />
      <Input
        label={"Business Phone number"}
        leftIcon={<IcAmericanFlag className=" text-2xl" />}
        inputProps={{
          value: businessContact.businessPhone,
          type: "tel",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setBusinessContact((preData) => ({
              ...preData,
              businessPhone: e.target.value,
            }));
          },
        }}
        errorMessage={
          businessContact.phoneError ? businessContact.phoneError : undefined
        }
      />
      <div className={`flex flex-row gap-4 `}>
        <Button
          title="Back"
          isOutLine={true}
          classname={`mt-16 md:text-xl`}
          leftIcon={<IcBack />}
          onClick={() => value.onBack()}
        />
        <Button
          title={"Next"}
          rightIcon={<IcRightArrow />}
          classname={`flex-1 mt-16 md:text-xl`}
          onClick={nextClick}
        />
      </div>
    </div>
  );
};

export default BusinessInfo;
