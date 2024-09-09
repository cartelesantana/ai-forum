import Image from "next/image";
import React from "react";
import africa_ai_dots from "@/public/images/africa_ai_dots.png";
import book_hero_ressources from "@/public/images/book_hero_ressources.png";
import { ArrowLeft, ArrowRight, Goal, Home, Linkedin } from "lucide-react";
import CommunityMemberCard from "@/src/components/card/communityMemberCard";
import CTA from "@/src/components/cta/cta";
import TextRessourcesCard from "@/src/components/card/textRessourcesCard";
import Link from "next/link";
import PaperRessourcesCard from "@/src/components/card/paperRessourcesCard";
import VideoRessourcesCard from "@/src/components/card/videoRessourcesCard";
import BlogCard from "@/src/components/card/blogCard";

const Page = () => {
  const blog_topics = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "Technical Developments",
    },
    {
      id: 3,
      title: "AI Applications",
    },
    {
      id: 4,
      title: "AI Ethics and Policy",
    },
    {
      id: 5,
      title: "AI Education and Skill Development",
    },
    {
      id: 6,
      title: "AI Startups and Innovation",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="section-gutter relative mb-32 lg:mb-80 flex flex-col items-center justify-center">
        <Image
          className="absolute -right-28 top-0 h-[500px] w-auto opacity-30"
          placeholder="blur"
          quality={100}
          alt=""
          sizes="90vw"
          src={africa_ai_dots}
        />
        <div className="relative pt-16 lg:pt-[110px] lg:px-24">
          <p className="text-center font-semibold text-neutral-600">#Blog</p>
          <h1 className="mb-2 text-center text-5xl lg:text-6xl font-bold leading-[1.15]">
            AI Insights: African Perspectives
          </h1>
          <p className="mb-10 lg:px-16 text-center">
            Explore groundbreaking ideas, research, and applications shaping the
            future of AI on the continent
          </p>
        </div>
      </section>

      <section className="section-gutter mb-32">
        <div className="mb-10 flex items-start gap-x-5 border-b border-black overflow-x-auto">
          {blog_topics?.map((topic, key) => (
            <button key={key}>
              {topic?.title === "home" ? (
                <div>
                  <Home className="text-primary_dl" />
                  <div className="mt-2 h-1 w-full bg-primary_dl"></div>
                </div>
              ) : (
                <div>
                  <p className="font-semibold whitespace-pre">{topic?.title}</p>
                </div>
              )}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-x-2 rounded-md border-2 border-black hover:bg-neutral-200 duration-300 px-3 py-2">
            <span>Old posts</span>
            <ArrowRight />
          </button>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Page;
