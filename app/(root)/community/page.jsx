import Image from "next/image";
import React from "react";
import africa_ai_dots from "@/public/images/africa_ai_dots.png";
import bg_1 from "@/public/images/bg_1.jpg";
import { ArrowLeft, ArrowRight, Goal, Linkedin } from "lucide-react";
import CommunityMemberCard from "@/src/components/card/communityMemberCard";
import CTA from "@/src/components/cta/cta";

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="section-gutter relative mb-32 flex flex-col items-center justify-center lg:mb-64">
        <Image
          className="absolute -right-28 top-0 h-[500px] w-auto opacity-30"
          placeholder="blur"
          quality={100}
          alt=""
          sizes="90vw"
          src={africa_ai_dots}
        />
        <div className="relative top-[110px] lg:mb-32">
          <div>
            <h1 className="mb-2 text-center text-4xl font-bold leading-[1.15] lg:text-6xl">
              Join our large community
            </h1>
            <p className="mb-16 text-center">
              See how we're positioning Africa at the forefront of the AI
              revolution, one innovation at a time
            </p>
          </div>
        </div>
        <div className="relative flex w-[110vw] max-w-[1500px] flex-nowrap justify-center gap-5">
          <div className="flex w-full min-w-[250px] flex-col gap-5">
            <div className="relative h-64 w-full overflow-hidden rounded-md bg-secondary_dl">
              <Image
                alt=""
                fill
                src={"/images/events/event_2.png"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-md bg-secondary_dl">
              <Image
                alt=""
                fill
                src={"/images/img_ai_3.jpg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
          </div>
          <div className="flex w-full min-w-[250px] flex-col gap-5 pt-32">
            <div className="relative h-96 w-full overflow-hidden rounded-md bg-secondary_dl">
              <Image
                alt=""
                fill
                src={"/images/img_ai_2.jpg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
          </div>
          <div className="flex w-full min-w-[250px] flex-col gap-5 pt-16">
            <div className="relative h-64 w-full overflow-hidden rounded-md bg-secondary_dl">
              <Image
                alt=""
                fill
                src={"/images/img_ai_4.jpg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-md bg-secondary_dl">
              <Image
                alt=""
                fill
                src={"/images/img_ai_5.jpg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
          </div>
          <div className="-mt-16 flex w-full min-w-[250px] flex-col gap-5">
            <div className="relative h-64 w-full overflow-hidden rounded-md bg-secondary_dl">
              <Image
                alt=""
                fill
                src={"/images/img_ai_6.jpg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-md bg-secondary_dl">
              <Image
                alt=""
                fill
                src={"/images/img_ai_7.jpg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discussion Forum */}
      <section className="section-gutter relative mb-32">
        <div className="flex flex-col items-center gap-x-5 lg:flex-row">
          <div className="mb-10 w-full lg:mb-0 lg:w-2/5">
            <div className="flex items-center gap-x-2">
              <p className="font-semibold text-primary_dl">Engagement</p>
              <hr className="w-1/5 border-t border-t-primary_dl" />
            </div>
            <h2 className="mb-3 text-5xl font-semibold">Discussion Forum</h2>
            <p className="">
              We're proud to work alongside visionary organizations committed to
              harnessing the potential of AI in Africa. Our partners represent a
              diverse ecosystem of innovators, from tech giants to local
              startups, all united in the goal of positioning Africa at the
              forefront of the global AI revolution.
            </p>
          </div>
          <div className="relative grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:w-3/5 lg:pl-16">
            <div>
              <div className="mb-2 flex size-12 items-center justify-center rounded-md bg-primary_dl/30">
                <Goal size={30} />
              </div>
              <p className="text-lg font-semibold">AI Discussions</p>
              <p>
                A dedicated forum space to engage in conversations about
                Artificial Intelligence.
              </p>
            </div>
            <div>
              <div className="mb-2 flex size-12 items-center justify-center rounded-md bg-primary_dl/30">
                <Goal size={30} />
              </div>
              <p className="text-lg font-semibold">AI Discussions</p>
              <p>
                A dedicated forum space to engage in conversations about
                Artificial Intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Networking */}
      <section className="section-gutter relative mb-32">
        <div className="relative flex flex-col items-center gap-x-5 lg:flex-row">
          <div className="relative mb-16 flex w-full items-center justify-center py-16 pr-16 lg:mb-0 lg:w-3/5">
            <div className="absolute inset-y-10 -left-24 w-4/5 overflow-hidden">
              <Image alt="" src={bg_1} className="opacity-40" />
            </div>
            <div className="absolute left-10 top-0 size-72 overflow-hidden rounded-md border-4 border-white bg-secondary_dl shadow-2xl">
              <Image
                alt=""
                fill
                src={"/images/img_ai_7.jpg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
            <div className="absolute -top-10 right-28 size-72 rounded-md border-4 border-white bg-secondary_dl shadow-2xl">
              <Image
                alt=""
                fill
                src={"/images/events/event_2.png"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
            <div className="absolute -left-0 bottom-0 size-72 rounded-md border-4 border-white bg-secondary_dl shadow-2xl">
              <Image
                alt=""
                fill
                src={"/images/events/event_2.jpeg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
            <div className="absolute -bottom-10 right-44 size-72 rounded-md border-4 border-white bg-secondary_dl shadow-2xl">
              <Image
                alt=""
                fill
                src={"/images/img_ai_2.jpg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
            <div className="relative size-72 shrink-0 rounded-md border-4 border-white bg-secondary_dl shadow-2xl">
              <Image
                alt=""
                fill
                src={"/images/img_ai_3.jpg"}
                style={{ objectFit: "cover", backgroundPosition: "top" }}
                className="h-full w-full bg-top object-cover"
              />
            </div>
          </div>
          <div className="w-full text-end lg:w-2/5">
            <div className="flex items-center justify-end gap-x-2">
              <hr className="w-1/5 border-t border-t-primary_dl" />
              <p className="font-semibold text-primary_dl">Meetings</p>
            </div>
            <h2 className="mb-3 text-5xl font-semibold">Networking</h2>
            <p className="">
              We're proud to work alongside visionary organizations committed to
              harnessing the potential of AI in Africa. Our partners represent a
              diverse ecosystem of innovators, from tech giants to local
              startups, all united in the goal of positioning Africa at the
              forefront of the global AI revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Community Members */}
      <section className="section-gutter relative mb-32">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-5xl font-semibold">
            Featured Community Members
          </h2>
          <p>
            We're proud to work alongside visionary organizations committed to
            harnessing the potential of AI in Africa. Our partners represent a
            diverse ecosystem of innovators, from tech giants to local startups,
            all united in the goal of positioning Africa at the forefront of the
            global AI revolution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <CommunityMemberCard />
          <CommunityMemberCard />
          <CommunityMemberCard />
          <CommunityMemberCard />
        </div>
        <div className="flex items-center justify-end gap-x-3">
          <div className="rounded-md border-2 border-black p-3">
            <ArrowLeft />
          </div>
          <div className="rounded-md border-2 border-black p-3">
            <ArrowRight />
          </div>
        </div>
      </section>

      {/* Community impact */}
      <section className="section-gutter relative mb-32">
        <div className="mb-5">
          <div className="flex items-center gap-x-2">
            <p className="font-semibold text-primary_dl">Statistics</p>
            <hr className="w-1/5 border-t border-t-primary_dl" />
          </div>
          <h2 className="mb-3 text-5xl font-semibold">Community Impact</h2>
        </div>
        <div className="flex flex-col items-start gap-x-5 lg:flex-row">
          <div className="mb-10 w-full lg:mb-0 lg:w-2/5">
            <p className="">
              We're proud to work alongside visionary organizations committed to
              harnessing the potential of AI in Africa. Our partners represent a
              diverse ecosystem of innovators, from tech giants to local
              startups, all united in the goal of positioning Africa at the
              forefront of the global AI revolution.
            </p>
          </div>
          <div className="relative w-full lg:w-3/5">
            <div className="grid grid-cols-1 gap-8 rounded-l-md bg-neutral-200 px-5 py-16 lg:-mr-32 lg:grid-cols-3">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary_dl">5,000+</p>
                <p className="font-bold">Active Members</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary_dl">5,00+</p>
                <p className="font-bold">Discussion Threads</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary_dl">100+</p>
                <p className="font-bold">Mentorship Matches</p>
              </div>
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
