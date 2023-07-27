import { getBlogPosts } from "api_client/axios_client";
import Box from "components/common/Box";
import BlogCard from "components/elements/blog/BlogCard";
import React from "react";
import useSwr from "swr";
import dayjs from "dayjs";
import Loading from "components/common/loading/Loading";
import Subcriber from "components/elements/blog/Subcriber";
import { Locale } from "models/app_configs";
import useTrans from "hooks/useTrans";
import HeadTag from "components/common/HeadTag";

const BlogPageTrans = {
  heading: {
    [Locale.en]: "BestPOS blog",
    [Locale.es]: "Blog de BestPOS",
  },
  desc: {
    [Locale.en]:
      "Tool and strategies modern teams need to help their companies grow.",
    [Locale.es]:
      "Herramienta y estrategias que los equipos modernos necesitan para ayudar a sus empresas a crecer.",
  },
};

const BlogPage = () => {
  const { locale } = useTrans();
  const { data, isLoading } = useSwr("blog-posts", getBlogPosts);
  return (
    <>
      <HeadTag screen="blog" />
      <div className="flex flex-col container-content h-full">
        <Box className="items-center mx-auto max-w-[768px] mb-12 md:mb-0">
          <div className="flex flex-col gap-4 mb-8 text-center md:gap-6 md:mb-12 lg:mb-16">
            <h2 className="txt-heading-medium font-extrabold md:txt-heading-xlarge">
              {BlogPageTrans.heading[locale]}
            </h2>
            <p className="txt-md-bold md:text-xl md:font-normal text-neutral-700 md:text-neutral-600">
              {BlogPageTrans.desc[locale]}
            </p>
          </div>
          {isLoading && <Loading />}
          <div className="flex flex-col gap-8 md:gap-12">
            {data?.map((item) => {
              return (
                <BlogCard
                  id={item.id}
                  key={`blog-post-${item.id}`}
                  slug={item.slug}
                  title={item.title.rendered}
                  urlImage={item.jetpack_featured_media_url}
                  subTitle={item.excerpt.rendered}
                  author="Admin"
                  date={dayjs(item.date).format("YYYY-MM-DD")}
                />
              );
            })}
          </div>
        </Box>
        <Subcriber />
      </div>
    </>
  );
};

export default BlogPage;
