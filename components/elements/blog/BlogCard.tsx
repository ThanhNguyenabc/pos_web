import HTMLReactParser, {
  DOMNode,
  HTMLReactParserOptions,
  domToReact,
  Element,
  attributesToProps,
} from "html-react-parser";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.attributes) {
      switch (domNode.name) {
        case "p":
          const props = attributesToProps(domNode.attribs);
          return (
            <p {...props} className="txt-sm">
              {domToReact(domNode.children, options)}
            </p>
          );
      }
    }
  },
};

interface BlogCardProps {
  slug: string;
  title: string;
  id: string;
  subTitle: string;
  urlImage?: string;
  author?: string;
  date: string;
  onCardClick?: () => void;
}
const BlogCard = ({
  id,
  slug,
  title,
  subTitle,
  urlImage,
  author,
  date,
  onCardClick,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}?id=${id}`}>
      <div
        className="flex flex-col gap-4 md:flex-row md:gap-6"
        onClick={onCardClick}
      >
        {urlImage && (
          <div className="flex">
            <Image
              src={urlImage}
              alt="blog-image"
              height={500}
              width={500}
              className="md:w-[300px] object-cover aspect-square"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="txt-large-bold  whitespace-pre-wrap">
            {HTMLReactParser(title)}
          </h3>
          {HTMLReactParser(subTitle)}
          <div className="flex flex-col mt-2">
            <p className="txt-md-bold">{author}</p>
            <p className="txt-sm">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
