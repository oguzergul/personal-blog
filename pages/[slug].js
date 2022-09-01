import React from "react";
import { Hero } from "../components/Hero";
import { AuthorCard } from "../components/AuthorCard";

const BlogDetail = () => {
  return (
    <div>
      <Hero>
        <Hero.Subtitle>Publised 12 Aug 2022</Hero.Subtitle>
        <Hero.Title>What is Event Loop on JavaScript </Hero.Title>
        <Hero.Description>
          I am sharing my experinces on my blog. I hope you enjoy! enalksjdlkasj
        </Hero.Description>
      </Hero>

      <section className="grid grid-cols-12 gap-24">
        <div className="col-span-3 ">
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
        <div className="col-span-8 ">asd</div>
      </section>
    </div>
  );
};

export default BlogDetail;
