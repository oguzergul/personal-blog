import React from "react";
import { Hero } from "../components/Hero";
import { ArticleItem } from "../components/ArticleItem";
import { GetAllPostsMeta } from "../utils/blog";

export default function Home({ posts }) {
  return (
    <div>
      <Hero>
        <Hero.Subtitle>Blog</Hero.Subtitle>
        <Hero.Title>Personal Blog</Hero.Title>
        <Hero.Description>
          I am sharing my experinces on my blog. I hope you enjoy!
        </Hero.Description>
      </Hero>

      <h2 className="text-gray-900 text-2xl font-semibold leading-8 ">
        All Blog Posts
      </h2>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 mt-4">
        {posts?.map(
          ({ meta: { slug, title, description, cover, date, readTime } }) => (
            <ArticleItem path={slug} key={slug}>
              <ArticleItem.Image
                source={{
                  src: cover,
                  alt: title,
                }}
              />
              <ArticleItem.SubTitle>
                {date} - {readTime}
              </ArticleItem.SubTitle>
              <ArticleItem.Title>{title}</ArticleItem.Title>
              <ArticleItem.Description>{description}</ArticleItem.Description>
            </ArticleItem>
          )
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = GetAllPostsMeta();
  return {
    props: {
      posts,
    },
  };
}
