import { getBlogDetail } from "api_client/axios_client";
import Box from "components/common/Box";
import { useRouter } from "next/router";
import React from "react";
import useSwr from "swr";
import HTMLReactParser, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import Writer from "components/elements/blog/Writer";
import dayjs from "dayjs";
import Subcriber from "components/elements/blog/Subcriber";
import { Locale } from "models/app_configs";
import useTrans from "hooks/useTrans";
import HeadTag from "components/common/HeadTag";

const BlogDetailTrans = {
  admin: {
    [Locale.en]: "Admin",
    [Locale.es]: "Administración",
  },
};

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.attributes) {
      if (
        domNode.name == "h5" ||
        domNode.name == "h4" ||
        domNode.name == "h3" ||
        domNode.name == "h2" ||
        domNode.name == "h1"
      )
        return (
          <h5 className="txt-heading-xsmal mt-10 mb-4 md:txt-heading-small md:mt-12 md:mb-6 lg:mt-16">
            {domToReact(domNode.children, options)}
          </h5>
        );
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
      <HeadTag screen="blog" />
      <div className="flex flex-col container-content">
        <Box className="max-w-[768px] mx-auto">
          <div className="flex flex-row items-center txt-md-bold text-neutral-600 gap-4 self-center md:text-xl">
            <p>{author}</p>•<p>{date}</p>
          </div>
          <h2 className="txt-heading-medium font-extrabold text-center my-4 md:txt-heading-xlarge md:my-6">
            {data?.title.rendered}
          </h2>
          <div className="flex flex-col text-neutral-700 txt-md text-justify md:text-xl">
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
