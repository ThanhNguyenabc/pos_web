import { Locale } from "models/app_configs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useAppStore from "stores/app_store";

const useChangeLanguage = () => {
  const router = useRouter();
  const { lang, changeLanguage } = useAppStore((state) => state);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (!isHydrated) setIsHydrated(true);
    if (router.locale !== lang.toString()) {
      changeLocaleRouter(lang.toString());
    }
  }, [lang, isHydrated]);

  const onChangeLanguage = (newLang: Locale) => {
    if (newLang != lang) {
      changeLanguage(newLang);
    }
  };

  const changeLocaleRouter = (locale: string) =>
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale }
    );

  return {
    lang,
    isHydrated,
    onChangeLanguage,
  };
};

export default useChangeLanguage;
