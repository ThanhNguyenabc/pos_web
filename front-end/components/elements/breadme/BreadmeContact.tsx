import { Button } from "components/common/Button";
import ContactForm from "components/common/ContactForm";
import { BreadmeContext } from "pages/breadme";
import React, { useContext } from "react";
import ColorUtils from "utils/ColorUtils";

const BreadmeContact = () => {
  const context = useContext(BreadmeContext);

  const onSubmit = () => {
    context.setQuestionData({ ...context.questionData });
  };
  return (
    <div className="flex flex-col">
      <ContactForm
        nameTitle="Name of Business"
        phoneTitle="Phone Number"
        focusColor=" input-success "
      />
      <Button
        classname="mt-[148px]"
        title="Submit"
        style={{
          background: ColorUtils.success,
        }}
        onClick={onSubmit}
      />
    </div>
  );
};

export default BreadmeContact;
