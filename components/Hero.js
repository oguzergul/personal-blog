import React from "react";

export function Hero({ children }) {
  return (
    <section className="flex flex-col items-center justify-center">
      {children}
    </section>
  );
}

Hero.Subtitle = function HeroSubtitle({ children }) {
  return (
    <h3 className="text-violet-600 font-semibold text-base leading-6">
      {children}
    </h3>
  );
};

Hero.Title = function HeroTitle({ children }) {
  return (
    <h1 className="font-semibold text-center text-5xl text-gray-900 tracking-tight mt-3">
      {children}
    </h1>
  );
};

Hero.Description = function HeroDescription({ children }) {
  return (
    <p className="text-gray-500 text-xl leading-8 mt-6 text-center ">
      {children}
    </p>
  );
};

Hero.Badge = function HeroDescription({ data }) {
  return (
    <div className="flex flex-row items-center p-1 bg-violet-50 rounded-2xl gap-1 mt-6 ">
      <div className="rounded-2xl py-0.5 px-2 bg-white flex items-center ">
        <span className="text-violet-700 text-xs font-medium">
          {data?.category}
        </span>
      </div>
      <span className="text-violet-700 text-xs px-2 font-medium">
        {data?.readTime}
      </span>
    </div>
  );
};

Hero.Cover = function HeroDescription({ source }) {
  return (
    <img
      src={source?.src}
      alt={source?.alt}
      className="w-full object-cover object-center mt-12 max-w-4xl"
    />
  );
};
