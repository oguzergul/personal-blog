import React from "react";
import { Hero } from "../components/Hero";
import { AuthorCard } from "../components/AuthorCard";
import { GetNoteBySlug, GetAllSlugs } from "../utils/blog";
import { MDXRemote } from "next-mdx-remote";

const CustomButton = () => {
  return <button className="bg-violet-700 h-10 px-4 text-white">Hello</button>;
};

const MDX_COMPONENTS = {
  CustomButton,
};

export default function BlogDetail({
  source,
  meta: { title, category, readTime, date, description, cover, avatar, author },
}) {
  return (
    <div>
      <Hero>
        <Hero.Subtitle>{date}</Hero.Subtitle>
        <Hero.Title>{title}</Hero.Title>
        <Hero.Description>{description}</Hero.Description>
        <Hero.Badge data={{ category, readTime }} />
        <Hero.Cover source={{ src: cover, alt: title }} />
      </Hero>

      <section className="grid xl:grid-cols-12 sm:gap-24 grid-cols-1 gap-24">
        <div className="xl:col-span-4 sm:order-1 order-2">
          <AuthorCard>
            <AuthorCard.Avatar
              source={{
                src: avatar,
                alt: author,
              }}
            />
            <AuthorCard.Info>
              <AuthorCard.Name>Oğuz Ergül</AuthorCard.Name>
              <AuthorCard.Position>Software Developer</AuthorCard.Position>
            </AuthorCard.Info>
          </AuthorCard>
        </div>
        <article className="xl:col-span-8 sm:order-2 order-1 col-span-1 prose prose-pre:bg-gray-50 prose-blockquote:border-l-violet-700">
          <MDXRemote {...source} components={MDX_COMPONENTS} />
        </article>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const slugs = GetAllSlugs();
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { notFound: true };
  }
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const { meta, source } = await GetNoteBySlug(slug);

  return {
    props: {
      meta,
      source,
    },
  };
}
