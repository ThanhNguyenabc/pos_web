import SelectedList from "components/common/SelectedList";
import useTrans from "hooks/useTrans";
import React, { useCallback, useEffect } from "react";
import useRequestDemoStore from "stores/request_demo_store";
import { CategoryList } from "utils/routes";

const BusinessTypes = () => {
  const { locale } = useTrans();

  const setBusinessType = (index: number) => {
    useRequestDemoStore.setState((state) => ({
      ...state,
      businessType: CategoryList[index].title.en,
    }));
  };

  useEffect(() => {
    setBusinessType(0);
  }, []);

  const onItemSelected = useCallback((indexes: Array<number>) => {
    const index = indexes?.[0] || 0;
    setBusinessType(index);
  }, []);

  return (
    <SelectedList
      data={CategoryList}
      selectIndex={0}
      className={"md:grid-cols-2 lg:grid-cols-3"}
      renderItem={(item, index: number) => {
        const Icon = item.icon;
        return (
          <div className="flex flex-row items-center p-3 gap-3 md:gap-2 md:flex-col md:justify-center">
            <Icon className="text-4xl" />
            <p className="txt-md-bold md:text-center">{item.title[locale]}</p>
          </div>
        );
      }}
      onItemSelected={onItemSelected}
    />
  );
};

export default BusinessTypes;
