import React from "react";

interface SpecificationProps {
  id: string;
  items: Array<{
    title: string;
    desc: string;
  }>;
}
const SpecificationView = ({ items, id }: SpecificationProps) => {
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
