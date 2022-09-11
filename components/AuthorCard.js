import React from "react";

export function AuthorCard({ children }) {
  return (
    <figure className="flex flex-row gap-3 sticky top-8">{children}</figure>
  );
}

AuthorCard.Avatar = function AuthorAvatar({ source }) {
  return (
    <img
      src={source?.src}
      className="h-12 w-12 rounded-full object-center object-cover"
      alt={source?.alt}
    />
  );
};

AuthorCard.Info = function AuthorInfo({ children }) {
  return <div className="flex flex-col">{children}</div>;
};

AuthorCard.Name = function AuthorName({ children }) {
  return (
    <span className="text-gray-900 text-base font-medium">{children}</span>
  );
};

AuthorCard.Position = function AuthorPosition({ children }) {
  return <span className="text-gray-500 text-base leading-6">{children}</span>;
};
