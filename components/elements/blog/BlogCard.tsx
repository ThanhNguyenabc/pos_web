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
              priority
              height={200}
              width={200}
              className="md:w-[300px] object-cover"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2">
          <p className="txt-large-bold">{title}</p>
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
