import { getSpecification } from "api_client/axios_client";
import React from "react";
import useSWR from "swr";

interface SpecificationProps {
  id: string;
  posId: string;
}
const SpecificationView = ({ id, posId }: SpecificationProps) => {
  const { data } = useSWR(`specification-${posId}`, () =>
    getSpecification(`${posId}`)
  );

  const items = [
    {
      title: "Business Size",
      desc: data?.businessSize,
    },
    {
      title: "POS Type",
      desc: data?.posType,
    },
    {
      title: "Software type",
      desc: data?.softwareType,
    },
    {
      title: "Free Trial",
      desc: data?.freeTrial,
    },
    {
      title: "Merchant Services",
      desc: data?.merchantService,
    },
    {
      title: "Pricing Model",
      desc: data?.pricingModel,
    },
    {
      title: "Price Range",
      desc: "$$-$$$$",
    },
  ];
  return (
    <div id={id} className="flex w-full flex-col gap-6">
      <p className="txt-heading-xsmal md:txt-heading-small">Specifications</p>
      <table className=" table table-row txt-md">
        <tbody>
          {items.map((item, index) => (
            <tr key={`sp-${index}`}>
              <th className="font-semibold px-0">{item.title}</th>
              <td className="whitespace-pre-wrap">{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationView;
