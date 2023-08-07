import IcCheckbox from "assets/icons/ic_checkbox.svg";
import IcClose from "assets/icons/ic_close.svg";

import useTrans from "hooks/useTrans";
import Attribute from "models/attribute";
import React, { ReactElement } from "react";
import ColorUtils from "utils/ColorUtils";

interface ProsAndConsProps {
  pros: Attribute<Array<string>>;
  cons: Attribute<Array<string>>;
}

const CardList = ({
  color,
  title,
  icon,
  items,
}: {
  color: string;
  title: string;
  icon: ReactElement;
  items: Array<string>;
}) => {
  return (
    <div
      className="flex flex-col bg-neutral-100 rounded px-3 py-2 border-l-4"
      style={{
        borderColor: color,
      }}
    >
      <h3 className="txt-md-bold" style={{ color: color }}>
        {title}
      </h3>
      {items.map((item, index) => (
        <div
          className="flex flex-row items-center gap-3 mt-2 md:mt-4 md:gap-4"
          key={`${index}-item-pros`}
        >
          {icon}
          <p className=" flex-1">{item}</p>
        </div>
      ))}
    </div>
  );
};
const ProsAndCons = ({ pros, cons }: ProsAndConsProps) => {
  const { t, locale } = useTrans();

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
      <CardList
        items={pros[locale] || []}
        title={t("pros")}
        color={ColorUtils.success}
        icon={<IcCheckbox className="w-4 md:w-5 text-success" />}
      />
      <CardList
        items={cons[locale] || []}
        title={t("cons")}
        color={ColorUtils.error}
        icon={<IcClose className="w-4 md:w-5 text-error" />}
      />
    </div>
  );
};

export default ProsAndCons;
