import { getListPOS } from "api_client/axios_client";
import SelectedList from "components/common/SelectedList";
import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import useSWRImmutable from "swr/immutable";
import IcAdd from "assets/icons/ic_add.svg";
import Input from "components/common/Input";
import IcCheck from "assets/icons/ic_checkbox.svg";
import { twMerge } from "tailwind-merge";
import useRequestDemoStore from "stores/request_demo_store";
import useDebounce from "hooks/useDebounce";

const OtherItemList = ({
  onDataChange,
}: {
  onDataChange?: (text: string) => void;
}) => {
  const [showInput, setShowInput] = useState(false);
  const debouncFn = useDebounce((value) => {
    onDataChange && onDataChange(value as string);
  });

  const onChangeText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    debouncFn(event.target.value);
  }, []);

  const onShowInput = useCallback(() => setShowInput(true), []);

  if (showInput) {
    return (
      <Input
        className="h-12 max-w-xs"
        inputProps={{
          placeholder: "Add other POS system",
          onChange: onChangeText,
        }}
      />
    );
  }

  return (
    <div
      onClick={onShowInput}
      className="flex items-center w-full md:max-w-[190px] p-3 txt-md-bold h-12 border-2 rounded-lg cursor-pointer hover:border-secondary border-neutral-300"
    >
      <IcAdd className="w-6 h-6" />
      <span>Other</span>
    </div>
  );
};

const SystemsQuestion = () => {
  const { data } = useSWRImmutable("pos-list", () =>
    getListPOS({
      fields: "name",
    })
  );

  const debouncFn = useDebounce(
    (indexes: Array<number>) => {
      if (data && indexes.length > 0) {
        const posNames = indexes.map((index) => data[index].name);

        useRequestDemoStore.setState((state) => ({
          ...state,
          selectedPOS: posNames,
        }));
      }
    },
    [data]
  );

  const onItemSelected = (indexes: Array<number>) => debouncFn(indexes);

  const onDataChange = useCallback((text: string) => {
    useRequestDemoStore.setState((state) => ({
      ...state,
      otherPOS: text,
    }));
  }, []);

  if (!data || data.length == 0) return <></>;
  return (
    <>
      <SelectedList
        data={data}
        selectIndex={0}
        className={"md:grid-cols-2 lg:grid-cols-3"}
        renderItem={(item, _: number, isSelected) => {
          return (
            <div
              className={twMerge(
                `flex h-12 p-3 items-center justify-between`,
                isSelected &&
                  "bg-neutral-900 text-white hover:bg-neutral-900 border-neutral-900"
              )}
              key={`${item}`}
            >
              <p className="txt-md-bold"> {item.name}</p>
              {isSelected && <IcCheck className="w-4 h-4" />}
            </div>
          );
        }}
        isMultipleSelect
        onItemSelected={onItemSelected}
      />
      <OtherItemList key={`other-item`} onDataChange={onDataChange} />
    </>
  );
};

export default SystemsQuestion;
