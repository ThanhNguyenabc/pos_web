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
    <div id={id} className="flex w-0 flex-col gap-6">
      <p className="txt-heading-xsmal md:txt-heading-small">Specifications</p>
      <table className=" table table-row w-ful txt-md ">
        <tbody>
          {items.map((item, index) => (
            <tr key={`sp-${index}`}>
              <th className="font-semibold px-0 md:text-xl">{item.title}</th>
              <td className="md:text-xl">{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationView;
