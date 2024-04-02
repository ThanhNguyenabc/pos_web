import React, { useCallback } from "react";
import { useRouter } from "next/router";
import English from "public/locales/en/translation.json";
import Spanish from "public/locales/es/translation.json";
import { Locale } from "models/app_configs";

const TranslationConfig = {
  [Locale.en]: English,
  [Locale.es]: Spanish,
};

const useTrans = () => {
  const { locale, asPath } = useRouter();
  const lang = (locale as Locale) || Locale.en;
  const trans = TranslationConfig[lang];
  const t = useCallback(
    (key: string,) => {
      const res = key.split(".").reduce((result: object, item) => {
        return (result && result[(item as keyof typeof result) || ""]) || "";
      }, trans);

      return `${res}`;
    },
    [locale]
  );

  return { t, locale: lang, asPath };
};

export default useTrans;
