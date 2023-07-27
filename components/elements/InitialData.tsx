import { getAppConfigs } from "api_client/axios_client";
import React, { useEffect } from "react";
import useAppStore from "stores/app_store";

const InitialData = () => {
  const { setAppConfig } = useAppStore((state) => state);

  useEffect(() => {
    getAppConfigs().then((res) => res && setAppConfig(res));
  }, []);

  return <></>;
};

export default React.memo(InitialData);
