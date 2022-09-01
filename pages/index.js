import React from "react";
import { Hero } from "../components/Hero";
import { ArticleItem } from "../components/ArticleItem";

const Home = () => {
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
        <ArticleItem path="/my-first-blog-post">
          <ArticleItem.Image
            source={{
              src: "https://i.ytimg.com/vi/FHiUN_Si0YE/maxresdefault.jpg",
              alt: "Event Loop Nedir ?",
            }}
          />
          <ArticleItem.SubTitle>12 Aug 2022 - 2 min read</ArticleItem.SubTitle>
          <ArticleItem.Title>What is Event Loop ?</ArticleItem.Title>
          <ArticleItem.Description>
            We will learn how to work event loop and Async funcitons on
            JavaScript.
          </ArticleItem.Description>
        </ArticleItem>
        <ArticleItem path="/">
          <ArticleItem.Image
            source={{
              src: "https://i.ytimg.com/vi/FHiUN_Si0YE/maxresdefault.jpg",
              alt: "Event Loop Nedir ?",
            }}
          />
          <ArticleItem.SubTitle>12 Aug 2022 - 2 min read</ArticleItem.SubTitle>
          <ArticleItem.Title>What is Event Loop ?</ArticleItem.Title>
          <ArticleItem.Description>
            We will learn how to work event loop and Async funcitons on
            JavaScript.
          </ArticleItem.Description>
        </ArticleItem>
      </div>
    </div>
  );
};

export default Home;
