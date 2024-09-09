import Image from "next/image";
import React from "react";
import africa_ai_dots from "@/public/images/africa_ai_dots.png";
import book_hero_ressources from "@/public/images/book_hero_ressources.png";
import { ArrowLeft, ArrowRight, Goal, Linkedin } from "lucide-react";
import CommunityMemberCard from "@/src/components/card/communityMemberCard";
import CTA from "@/src/components/cta/cta";
import TextRessourcesCard from "@/src/components/card/textRessourcesCard";
import Link from "next/link";
import PaperRessourcesCard from "@/src/components/card/paperRessourcesCard";
import VideoRessourcesCard from "@/src/components/card/videoRessourcesCard";

const Page = () => {
  return (
    <div className=" overflow-x-hidden">
      {/* Hero */}
      <section className="relative mb-32 lg:mb-80 flex flex-col items-center justify-center">
        <Image
          className="absolute inset-x-0 top-0 lg:-top-16"
          placeholder="blur"
          quality={100}
          alt=""
          sizes="90vw"
          src={book_hero_ressources}
        />
        <Image
          className="absolute -right-28 top-0 h-[500px] w-auto opacity-30"
          placeholder="blur"
          quality={100}
          alt=""
          sizes="90vw"
          src={africa_ai_dots}
        />
        <div className="section-gutter relative pt-[110px] lg:px-24">
          <div>
            <h1 className="mb-2 text-center text-5xl font-bold leading-[1.15] lg:text-6xl">
              Your Gateway to African AI Expertise
            </h1>
            <p className="text-center lg:px-16 mb-10">
              Explore a comprehensive collection of AI knowledge tailored for
              the unique challenges and opportunities of Africa
            </p>
          </div>
          <div className="section-gutter relative flex flex-wrap items-center justify-center gap-x-5">
            <p className="font-semibold text-neutral-500">Publications</p>
            <p className="font-semibold text-neutral-500">White papers</p>
            <p className="font-semibold text-neutral-500">Videos</p>
            <p className="font-semibold text-neutral-500">Education</p>
            <p className="font-semibold text-neutral-500">Tools</p>
            <p className="font-semibold text-neutral-500">Framework</p>
          </div>
        </div>
      </section>

      {/* AI Ethics and Policy Guidelines */}
      <section className="section-gutter relative mb-32">
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-semibold">
            AI Ethics and Policy Guidelines
          </h2>
          <hr className="w-16 border-black" />
        </div>
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <TextRessourcesCard />
          <TextRessourcesCard />
          <TextRessourcesCard />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Link href={""} className="text-sm font-semibold lg:text-base">
            Explore all publications
          </Link>
          <div className="flex items-center gap-x-3">
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowLeft />
            </div>
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="section-gutter relative mb-32">
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-semibold">Guide</h2>
          <hr className="w-16 border-black" />
        </div>
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <TextRessourcesCard />
          <TextRessourcesCard />
          <TextRessourcesCard />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Link href={""} className="text-sm font-semibold lg:text-base">
            Explore all publications
          </Link>
          <div className="flex items-center gap-x-3">
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowLeft />
            </div>
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      {/* Publications and White papers */}
      <section className="section-gutter mb-32">
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-semibold">
            Publications and White papers
          </h2>
          <hr className="w-16 border-black" />
        </div>
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <PaperRessourcesCard />
          <PaperRessourcesCard />
          <PaperRessourcesCard />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Link href={""} className="text-sm font-semibold lg:text-base">
            Explore all publications
          </Link>
          <div className="flex items-center gap-x-3">
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowLeft />
            </div>
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      {/* Videos recording */}
      <section className="section-gutter mb-32">
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-semibold">Videos recording</h2>
          <hr className="w-16 border-black" />
        </div>
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <VideoRessourcesCard />
          <VideoRessourcesCard />
          <VideoRessourcesCard />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Link href={""} className="text-sm font-semibold lg:text-base">
            Explore all publications
          </Link>
          <div className="flex items-center gap-x-3">
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowLeft />
            </div>
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Materials */}
      <section className="section-gutter mb-32">
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-semibold">Educational Materials</h2>
          <hr className="w-16 border-black" />
        </div>
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <TextRessourcesCard />
          <TextRessourcesCard />
          <TextRessourcesCard />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Link href={""} className="text-sm font-semibold lg:text-base">
            Explore all publications
          </Link>
          <div className="flex items-center gap-x-3">
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowLeft />
            </div>
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools and Frameworks */}
      <section className="section-gutter mb-32">
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-semibold">
            AI Tools and Frameworks
          </h2>
          <hr className="w-16 border-black" />
        </div>
        <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <TextRessourcesCard />
          <TextRessourcesCard />
          <TextRessourcesCard />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Link href={""} className="text-sm font-semibold lg:text-base">
            Explore all publications
          </Link>
          <div className="flex items-center gap-x-3">
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowLeft />
            </div>
            <div className="rounded-md border-2 border-black px-3 py-2">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Page;
