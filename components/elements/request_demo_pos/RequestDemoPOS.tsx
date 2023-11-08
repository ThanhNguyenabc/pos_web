import HeaderWithBack from "components/common/HeaderWithBack";
import React, { forwardRef, useEffect } from "react";
import useSideBar from "stores/useSideBar";
import useTrans from "hooks/useTrans";
import { sendGoogleEvent } from "utils/tracking_utils";
import dynamic from "next/dynamic";
import { twMerge } from "tailwind-merge";
import RequestDemoContactForm from "./RequestDemoContactForm";
import SystemsQuestion from "./SystemsQuestion";
import BusinessTypes from "./BusinessTypes";
import useRequestDemoStore from "stores/request_demo_store";

const ThanksYouForm = dynamic(() => import("components/common/ThanksForm"));

interface RequestDemoSectionProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
}

const RequestDemoSection = forwardRef<HTMLDivElement, RequestDemoSectionProps>(
  ({ title, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(`flex flex-col gap-4`, className)}
      {...props}
    >
      <p className="txt-md-bold">{title}</p>
      {children}
    </div>
  )
);
RequestDemoSection.displayName = "RequestDemoSection";

interface RequestDemoPOS {
  showCloseButton?: boolean;
  afterSubmit?: () => void;
}
const RequestDemoPOS = ({
  showCloseButton = true,
  afterSubmit,
}: RequestDemoPOS) => {
  const isSubmittedForm = useRequestDemoStore((store) => store.isSubmittedForm);

  const { t } = useTrans();
  const closeSidebar = useSideBar((state) => state.closeSideBar);

  const clearStore = useRequestDemoStore((store) => store.clearStore);

  useEffect(() => {
    sendGoogleEvent("request_demo_fill_information");
    return () => {
      clearStore();
    };
  }, []);

  useEffect(() => {
    if (isSubmittedForm) afterSubmit && afterSubmit();
  }, [isSubmittedForm]);

  return (
    <>
      <HeaderWithBack
        title={t("request_a_demo")}
        onClose={showCloseButton ? closeSidebar : undefined}
        subTitle={
          <p className="txt-sm max-w-xl text-neutral-700 md:text-center md:ml-3">
            We&apos;ll connect you with the POS provider to setup a demo and get
            the best deal possible. Go through BestPOS to get the best deal
            possible.{" "}
            <span className="text-secondary font-semibold">
              Up to 100% off!
            </span>
          </p>
        }
      />
      {!isSubmittedForm ? (
        <div className="flex w-full flex-col gap-4 mb-4 md:gap-8 lg:gap-10 px-4 py-5 md:px-10">
          <RequestDemoSection title={t("type_of_business")}>
            <BusinessTypes />
          </RequestDemoSection>
          <RequestDemoSection title={"Which POS system are you interested in?"}>
            <SystemsQuestion />
          </RequestDemoSection>
          <RequestDemoSection title={t("contact_informations")}>
            <RequestDemoContactForm />
          </RequestDemoSection>
        </div>
      ) : (
        <ThanksYouForm
          className="mt-16 lg:mt-[100px]"
          eventName="request_demo_lead_form"
        />
      )}
    </>
  );
};

export default RequestDemoPOS;
