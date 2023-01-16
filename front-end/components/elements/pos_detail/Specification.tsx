import React from "react";

interface SpecificationProps {
  items: Array<{
    title: string;
    desc: string;
  }>;
}
const SpecificationView = ({ items }: SpecificationProps) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="txt-heading-xsmal">Specifications</p>
      <table className="table w-full txt-md">
        <tbody>
          {items.map((item, index) => (
            <tr key={`sp-${index}`}>
              <th className="font-semibold px-0">{item.title}</th>
              <td>{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationView;
