import useChangeLanguage from "hooks/useChangeLanguage";
import { Locale } from "models/app_configs";
import React from "react";
import { Languages } from "utils/StringUtil";

const LanguageSwitcher = () => {
  const { isHydrated, lang, onChangeLanguage } = useChangeLanguage();
  const LanguageIcon = Languages[lang].icon;
  if (!isHydrated) return <></>;
  return (
    <div className="hidden dropdown dropdown-hover dropdown-end md:block">
      <label
        tabIndex={0}
        className="btn btn-ghost border-neutral-300 border m-1 px-3"
      >
        {<LanguageIcon className="text-2xl" />}
      </label>

      <div
        tabIndex={0}
        className="dropdown-content flex flex-row gap-4 p-3 shadow bg-base-100 rounded-box  "
      >
        {Object.keys(Languages).map((key, index) => {
          const Icon = Languages[key as keyof typeof Languages].icon;
          return (
            <button
              key={`item-language-${index}`}
              onClick={() => onChangeLanguage(key as Locale)}
            >
              <Icon className=" text-2xl" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(LanguageSwitcher);
