import IcLinkedLn from "assets/icons/ic_linkedln.svg";
import IcInsta from "assets/icons/ic_insta.svg";
import IcFb from "assets/icons/ic_fb.svg";

import IconButton from "components/common/IconButton";
import useTrans from "hooks/useTrans";
import { Locale } from "models/app_configs";
import React from "react";

const WriterTrans = {
  authorTitle: {
    [Locale.en]: "Written by",
    [Locale.es]: "Escrito por",
  },
  published: {
    [Locale.en]: "Published on",
    [Locale.es]: "Publicado en",
  },
  copy_link: {
    [Locale.en]: "Copy link",
    [Locale.es]: "Copiar link",
  },
};

interface WriterProps {
  date: string;
  author: string;
}
const Writer = ({ date, author }: WriterProps) => {
  const { locale } = useTrans();
  const copyClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };
  return (
    <div className="flex flex-col gap-10 md:flex-row w-full">
      <div className="grid grid-cols-2 text-md md:text-xl md:gap-16 ">
        <div className="flex flex-col ">
          <p className="text-secondary txt-sm-bold">
            {WriterTrans.authorTitle[locale]}
          </p>
          <p>{author}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-secondary txt-sm-bold">
            {WriterTrans.published[locale]}
          </p>
          <p>{date}</p>
        </div>
      </div>
      <div className="flex flex-1 md:justify-end flex-row gap-3">
        <IconButton classname="w-fit md:h-12 md:w-fit" onClick={copyClipboard}>
          <div className="flex flex-row gap-[10px] items-center">
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-white"
            >
              <path
                d="M5 10C3.61667 10 2.43767 9.51233 1.463 8.537C0.487667 7.56233 0 6.38333 0 5C0 3.61667 0.487667 2.43733 1.463 1.462C2.43767 0.487333 3.61667 0 5 0H8C8.28333 0 8.521 0.0956668 8.713 0.287C8.90433 0.479 9 0.716667 9 1C9 1.28333 8.90433 1.52067 8.713 1.712C8.521 1.904 8.28333 2 8 2H5C4.16667 2 3.45833 2.29167 2.875 2.875C2.29167 3.45833 2 4.16667 2 5C2 5.83333 2.29167 6.54167 2.875 7.125C3.45833 7.70833 4.16667 8 5 8H8C8.28333 8 8.521 8.09567 8.713 8.287C8.90433 8.479 9 8.71667 9 9C9 9.28333 8.90433 9.52067 8.713 9.712C8.521 9.904 8.28333 10 8 10H5ZM7 6C6.71667 6 6.47933 5.904 6.288 5.712C6.096 5.52067 6 5.28333 6 5C6 4.71667 6.096 4.479 6.288 4.287C6.47933 4.09567 6.71667 4 7 4H13C13.2833 4 13.521 4.09567 13.713 4.287C13.9043 4.479 14 4.71667 14 5C14 5.28333 13.9043 5.52067 13.713 5.712C13.521 5.904 13.2833 6 13 6H7ZM12 10C11.7167 10 11.4793 9.904 11.288 9.712C11.096 9.52067 11 9.28333 11 9C11 8.71667 11.096 8.479 11.288 8.287C11.4793 8.09567 11.7167 8 12 8H15C15.8333 8 16.5417 7.70833 17.125 7.125C17.7083 6.54167 18 5.83333 18 5C18 4.16667 17.7083 3.45833 17.125 2.875C16.5417 2.29167 15.8333 2 15 2H12C11.7167 2 11.4793 1.904 11.288 1.712C11.096 1.52067 11 1.28333 11 1C11 0.716667 11.096 0.479 11.288 0.287C11.4793 0.0956668 11.7167 0 12 0H15C16.3833 0 17.5627 0.487333 18.538 1.462C19.5127 2.43733 20 3.61667 20 5C20 6.38333 19.5127 7.56233 18.538 8.537C17.5627 9.51233 16.3833 10 15 10H12Z"
                fill="currentColor"
              />
            </svg>

            <p className="txt-md-bold capitalize">
              {WriterTrans.copy_link[locale]}
            </p>
          </div>
        </IconButton>
        <IconButton classname="md:h-12 md:w-12 hover:bg-white">
          <IcFb className="text-2xl" />
        </IconButton>
        <IconButton classname="md:h-12 md:w-12 hover:bg-white">
          <IcLinkedLn className="text-2xl" />
        </IconButton>
        <IconButton classname="md:h-12 md:w-12 hover:bg-white">
          <IcInsta className="text-2xl" />
        </IconButton>
      </div>
    </div>
  );
};

export default Writer;
