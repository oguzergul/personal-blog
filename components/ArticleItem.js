import React from "react";
import Link from "next/link";

export function ArticleItem({ children, path }) {
  return (
    <Link href={path}>
      <article className="cursor-pointer">{children}</article>
    </Link>
  );
}

ArticleItem.Image = function ArticleImage({ source }) {
  return (
    <div className="w-full overflow-hidden">
      <img
        className="w-full h-full object-center object-cover "
        src={source?.src}
        alt={source?.alt}
      />
    </div>
  );
};

ArticleItem.SubTitle = function ArticleSubtitle({ children }) {
  return (
    <span className="text-violet-700 font-semibold text-sm leading-5 mt-8 block">
      {children}
    </span>
  );
};

ArticleItem.Title = function ArticleTitle({ children }) {
  return (
    <h3 className="font-semibold leading-8 text-2xl text-gray-900 mt-3">
      {children}
    </h3>
  );
};

ArticleItem.Description = function ArticleDescription({ children }) {
  return <p className="mt-3 text-gray-500 text-base leading-6">{children}</p>;
};
