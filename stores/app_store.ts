import { RemoteAppConfig } from "./../models/app_configs";
import { Locale } from "models/app_configs";
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

const AppConfigsKey = "app_configs";

interface AppState {
  changeLanguage: (lang: Locale) => void;
  lang: Locale;
  appConfig?: RemoteAppConfig;
  setAppConfig: (config: RemoteAppConfig) => void;
}

type MyPersist = (
  config: StateCreator<AppState>,
  options: PersistOptions<AppState>
) => StateCreator<AppState>;

const useAppStore = create<AppState>(
  (persist as MyPersist)(
    (set) => ({
      lang: Locale.en,
      setAppConfig: (config?: RemoteAppConfig) =>
        set((prev) => ({ ...prev, appConfig: config })),
      changeLanguage: (locale: Locale) =>
        set((prev) => ({ ...prev, lang: locale })),
    }),
    {
      name: AppConfigsKey,
    }
  )
);

export default useAppStore;
