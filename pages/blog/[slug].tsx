import { getBlogDetail } from "api_client/axios_client";
import Box from "components/common/Box";
import { useRouter } from "next/router";
import React from "react";
import useSwr from "swr/immutable";
import HTMLReactParser, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
  attributesToProps,
} from "html-react-parser";
import Writer from "components/elements/blog/Writer";
import dayjs from "dayjs";
import Subcriber from "components/elements/blog/Subcriber";
import { Locale } from "models/app_configs";
import useTrans from "hooks/useTrans";

const BlogDetailTrans = {
  admin: {
    [Locale.en]: "Admin",
    [Locale.es]: "Administración",
  },
};

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.attributes) {
      switch (domNode.name) {
        case "h5":
        case "h4":
        case "h3":
        case "h2":
        case "h1":
          return (
            <h5 className="txt-heading-xsmal mt-10 mb-4 md:txt-heading-small md:mt-12 md:mb-6 lg:mt-16">
              {domToReact(domNode.children, options)}
            </h5>
          );
        case "ol":
          return (
            <ul className="flex  flex-col list-decimal ml-10 gap-2">
              {domToReact(domNode.children, options)}
            </ul>
          );
        case "ul":
          return (
            <ul className="flex flex-col list-disc ml-10 gap-2">
              {domToReact(domNode.children, options)}
            </ul>
          );

        case "a":
          const props = attributesToProps(domNode.attribs);
          return (
            <a {...props} className=" underline">
              {domToReact(domNode.children, options)}
            </a>
          );
        default:
          break;
      }
    }
  },
};

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSwr(id, getBlogDetail);
  const { locale } = useTrans();
  const author = BlogDetailTrans.admin[locale];
  const date = dayjs(data?.date).format("YYYY-MM-DD");

  return (
    <>
      <div className="flex flex-col container-content">
        <Box className="max-w-[768px] mx-auto">
          <div className="flex flex-row items-center txt-md-bold text-neutral-600 gap-4 self-center md:text-xl">
            <span>{author}</span>•<span>{date}</span>
          </div>
          <h2 className="txt-heading-medium font-extrabold text-center my-4 md:txt-heading-xlarge md:my-6">
            {data?.title.rendered}
          </h2>
          <div className="flex flex-col txt-md gap-5">
            {HTMLReactParser(data?.content?.rendered || "", options)}
          </div>
        </Box>
        <>
          {data && (
            <Box className="my-12 md:mt-20 md:mb-0">
              <Writer date={date} author={author} />
            </Box>
          )}
        </>
        <Subcriber />
      </div>
    </>
  );
};

export default BlogDetail;
