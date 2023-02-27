import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./English.json";
import Spanish from "./Spanish.json";

export const initI18 = () => {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: English,
        },
        spa: {
          translation: Spanish,
        },
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return i18n;
};

export default i18n;
