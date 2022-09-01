import React from "react";

export function Hero({ children }) {
  return <section className="text-center">{children}</section>;
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
    <h1 className="font-semibold text-5xl text-gray-900 tracking-tight mt-3">
      {children}
    </h1>
  );
};
Hero.Description = function HeroDescription({ children }) {
  return <p className="text-gray-500 text-xl leading-8 mt-6">{children}</p>;
};
