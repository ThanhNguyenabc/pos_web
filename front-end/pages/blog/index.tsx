import { getBlogPosts } from "api_client/axios_client";
import Box from "components/common/Box";
import BlogCard from "components/elements/blog/BlogCard";
import React from "react";
import useSwr from "swr";
import moment from "moment";
import HeroSection from "components/common/HeroSection";
import { FooterCTA } from "components/common/FooterCTA";
import useBlogStore from "stores/blog_store";
import Loading from "components/common/loading/Loading";

const BlogPage = () => {
  const { data, isLoading } = useSwr("blog-posts", getBlogPosts);
  return (
    <>
      <Box className="items-center mx-auto max-w-[800px] pb-8">
        <div className="flex flex-col gap-4 mb-8 text-center md:gap-6 md:mb-12 lg:mb-16">
          <h2 className="txt-heading-medium font-extrabold md:txt-heading-xlarge">
            BestPOS blog
          </h2>
          <p className="txt-md-bold md:text-xl md:font-normal text-neutral-700 md:text-neutral-600">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        {isLoading && <Loading />}
        <div className="flex flex-col gap-8 md:gap-12">
          {data?.map((item) => {
            return (
              <>
                <BlogCard
                  id={item.id}
                  key={`blog-post-${item.id}`}
                  slug={item.slug}
                  title={item.title.rendered}
                  urlImage={item.jetpack_featured_media_url}
                  subTitle={item.excerpt.rendered}
                  author="Admin"
                  date={moment(item.date).format("YYYY-MM-DD")}
                />
              </>
            );
          })}
        </div>
      </Box>
    </>
  );
};

export default BlogPage;
