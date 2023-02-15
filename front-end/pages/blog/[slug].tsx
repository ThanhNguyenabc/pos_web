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
import moment from "moment";
import Writer from "components/elements/blog/Writer";
import { FooterCTA } from "components/common/FooterCTA";
import Subcriber from "components/elements/blog/Subcriber";

const BlogDetail = () => {
  const router = useRouter();
  const { slug, id } = router.query;

  const { data, isLoading } = useSwr(id, getBlogDetail);
  const author = "Admin";
  const date = moment(data?.date).format("YYYY-MM-DD");
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
  return (
    <>
      <Box className="max-w-[800px] mx-auto">
        <div className="flex flex-row items-center txt-md-bold text-neutral-600 gap-4 self-center md:text-xl">
          <p>{author}</p>•<p>{date}</p>
        </div>
        <h2 className="txt-heading-medium font-extrabold text-center my-4 md:txt-heading-xlarge md:my-8">
          {data?.title.rendered}
        </h2>
        <div className="flex flex-col text-neutral-700 txt-md text-justify md:text-xl">
          {HTMLReactParser(data?.content?.rendered || "", options)}
        </div>
      </Box>
      {data && (
        <Box className="lg:px-[120px] my-12 md:mt-20 md:mb-0 ">
          <Writer date={date} author={author} />
        </Box>
      )}
      <Subcriber />
    </>
  );
};

export default BlogDetail;
