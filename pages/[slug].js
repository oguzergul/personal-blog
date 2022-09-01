import React from "react";
import { Hero } from "../components/Hero";
import { AuthorCard } from "../components/AuthorCard";

const BlogDetail = () => {
  return (
    <div>
      <Hero>
        <Hero.Subtitle>Publised 12 Aug 2022</Hero.Subtitle>
        <Hero.Title>What Event Loop in JavaScript?</Hero.Title>
        <Hero.Description>
          The event loop is the secret behind JavaScript’s asynchronous
          programming.
        </Hero.Description>
      </Hero>

      <section className="grid sm:grid-cols-12 sm:gap-24 grid-cols-1 gap-24">
        <div className="sm:col-span-4 sm:order-1 order-2  ">
          <AuthorCard>
            <AuthorCard.Avatar
              source={{
                src: "https://media-exp1.licdn.com/dms/image/C4D03AQEPiYC-3MsiDA/profile-displayphoto-shrink_200_200/0/1652256102516?e=1667433600&v=beta&t=9D7VEcwYuwtFHVvhapfPdx6iI1w-97Zjzdk-c71fKYA",
                alt: "Oğuz Ergül",
              }}
            />
            <AuthorCard.Info>
              <AuthorCard.Name>Oğuz Ergül</AuthorCard.Name>
              <AuthorCard.Position>Software Developer</AuthorCard.Position>
            </AuthorCard.Info>
          </AuthorCard>
        </div>
        <div className="sm:col-span-8  sm:order-2 order-1">Blog Content</div>
      </section>
    </div>
  );
};

export default BlogDetail;
