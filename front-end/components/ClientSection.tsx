import React from "react";

const ClientData = [
  {
    title: "30+",
    content: "Over 30 years experience",
  },
  {
    title: "1000+",
    content: "Over 1000 Clients",
  },
  {
    title: "50",
    content: "Available in all 50 states",
  },
];

const NumberItem = ({ title, content }: { title: string; content: string }) => (
  <>
    <p className=" text-5xl font-semibold text-secondary ">{title}</p>
    <p className="mt-4 txt-md-bold text-neutral-900 ">{content}</p>
  </>
);

const ClientSection = () => {
  return (
    <div className="flex-column px-4 py-14 bg-neutral-100 ">
      <p className="txt-heading-medium text-center ">
        What sets us apart from other companies?
      </p>
      {ClientData.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className={"flex-column items-center mt-12 "}
        >
          {NumberItem(item)}
        </div>
      ))}
    </div>
  );
};

export default ClientSection;
