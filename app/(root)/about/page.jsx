import Image from "next/image";
import React from "react";
import africa_ai_dots from "@/public/images/africa_ai_dots.png";
import bg_3 from "@/public/images/bg_3.jpg";
import { Goal, Linkedin } from "lucide-react";
import TeamCard from "@/src/components/card/teamCard";
import CTA from "@/src/components/cta/cta";

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="section-gutter relative mb-80 flex flex-col items-center justify-center lg:py-16">
        <Image
          className="absolute -right-28 top-0 h-[500px] w-auto opacity-30"
          placeholder="blur"
          quality={100}
          alt=""
          sizes="90vw"
          src={africa_ai_dots}
        />
        <div className="relative top-[110px]">
          <h1 className="mb-2 text-center text-5xl font-bold leading-[1.15] lg:text-6xl">
            Bridging the Global AI Divide
          </h1>
          <p className="mb-16 text-center">
            See how we are positioning Africa at the forefront of the AI
            revolution, one innovation at a time
          </p>
        </div>
      </section>

      {/* Missions */}
      <section className="section-gutter mb-32">
        <div className="gap-x-10 lg:flex">
          <div className="mb-10 w-full lg:mb-0 lg:w-3/5">
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              <div className="order-2 flex flex-col gap-5 pt-14 lg:order-1">
                <div className="relative hidden opacity-70 lg:block">
                  <div className="relative rounded-md bg-white px-3 pb-10 pt-5 shadow-xl">
                    <div className="pt-8 opacity-5">
                      <h3 className="text-xl font-semibold">Consulting</h3>
                      <p className="text-justify text-sm">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -right-1 -top-1 size-16 rounded-tr-md border-r-2 border-t-2 border-black bg-white"></div>
                  <div className="absolute -bottom-1 -left-1 size-16 rounded-bl-md border-b-2 border-l-2 border-black bg-white"></div>
                  <div className="relative rounded-md bg-white px-3 pb-10 pt-5 shadow-xl">
                    <div className="absolute -left-4 -top-4 flex size-12 items-center justify-center rounded-md bg-secondary_dl">
                      <span className="text-xl font-bold text-white">2</span>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-xl font-semibold">
                        Ethical AI Advocacy
                      </h3>
                      <p className="text-justify text-sm">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 flex flex-col gap-5 lg:order-2">
                <div className="relative">
                  <div className="absolute -right-1 -top-1 size-16 rounded-tr-md border-r-2 border-t-2 border-black bg-white"></div>
                  <div className="absolute -bottom-1 -left-1 size-16 rounded-bl-md border-b-2 border-l-2 border-black bg-white"></div>
                  <div className="relative rounded-md bg-white px-3 pb-10 pt-5 shadow-xl">
                    <div className="absolute -left-4 -top-4 flex size-12 items-center justify-center rounded-md bg-secondary_dl">
                      <span className="text-xl font-bold text-white">1</span>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-xl font-semibold">Consulting</h3>
                      <p className="text-justify text-sm">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative hidden opacity-70 lg:block">
                  <div className="relative rounded-md bg-white px-3 pb-10 pt-5 shadow-xl">
                    <div className="pt-8 opacity-5">
                      <h3 className="text-xl font-semibold">Consulting</h3>
                      <p className="text-justify text-sm">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-3 flex flex-col gap-5 lg:pt-32">
                <div className="relative hidden opacity-70 lg:block">
                  <div className="relative rounded-md bg-white px-3 pb-10 pt-5 shadow-xl">
                    <div className="pt-8 opacity-5">
                      <h3 className="text-xl font-semibold">Consulting</h3>
                      <p className="text-justify text-sm">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -right-1 -top-1 size-16 rounded-tr-md border-r-2 border-t-2 border-black bg-white"></div>
                  <div className="absolute -bottom-1 -left-1 size-16 rounded-bl-md border-b-2 border-l-2 border-black bg-white"></div>
                  <div className="relative rounded-md bg-white px-3 pb-10 pt-5 shadow-xl">
                    <div className="absolute -left-4 -top-4 flex size-12 items-center justify-center rounded-md bg-secondary_dl">
                      <span className="text-xl font-bold text-white">3</span>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-xl font-semibold">
                        Pan-African Collaboration
                      </h3>
                      <p className="text-justify text-sm">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-end lg:w-2/5">
            <p className="font-semibold text-primary_dl">
              The approach of our success
            </p>
            <h2 className="mb-3 text-5xl font-semibold">Our Missions</h2>
            <p className="mb-3">
              We are proud to work alongside visionary organizations committed to
              harnessing the potential of AI in Africa. Our partners represent a
              diverse ecosystem of innovators, from tech giants to local
              startups, all united in the goal of positioning Africa at the
              forefront of the global AI revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-gutter relative mb-32 overflow-hidden">
        <Image
          className="absolute -bottom-10 -left-24 w-auto opacity-30 lg:-bottom-64 lg:-left-96"
          placeholder="blur"
          quality={100}
          alt=""
          src={africa_ai_dots}
        />
        <Image
          className="absolute -bottom-10 -right-24 w-auto rotate-[20deg] opacity-30 lg:-bottom-64 lg:-right-72"
          placeholder="blur"
          quality={100}
          alt=""
          src={africa_ai_dots}
        />
        <div className="text-center">
          <h2 className="mb-3 text-5xl font-semibold">Our Story</h2>
          <p className="mb-3">
            We are proud to work alongside visionary organizations committed to
            harnessing the potential of AI in Africa. Our partners represent a
            diverse ecosystem of innovators, from tech giants to local startups,
            all united in the goal of positioning Africa at the forefront of the
            global AI revolution.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="section-gutter relative mb-32 overflow-x-hidden">
        <div className="flex flex-col items-center gap-x-5 lg:flex-row">
          <div className="mb-10 w-full lg:mb-0 lg:w-2/5">
            <div className="flex items-center gap-x-2">
              <p className="font-semibold text-primary_dl">Engagement</p>
              <hr className="w-1/5 border-t border-t-primary_dl" />
            </div>
            <h2 className="mb-3 text-5xl font-semibold">Impact Overview</h2>
            <p className="">
              We are proud to work alongside visionary organizations committed to
              harnessing the potential of AI in Africa. Our partners represent a
              diverse ecosystem of innovators, from tech giants to local
              startups, all united in the goal of positioning Africa at the
              forefront of the global AI revolution.
            </p>
          </div>
          <div className="relative w-full lg:w-3/5 lg:pl-16">
            <div className="absolute inset-y-10 -right-24 w-4/5 overflow-hidden">
              <Image alt="" src={bg_3} className="opacity-20" />
            </div>
            <div className="-mr-36 grid grid-cols-2 gap-x-10">
              <div className="flex flex-col gap-y-16">
                <div className="relative">
                  <div className="relative h-44 w-full min-w-[200px] max-w-[350px] overflow-hidden rounded-md bg-secondary_dl">
                    <Image
                      alt=""
                      fill
                      src={"/images/img_ai_3.jpg"}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative -left-3 -top-3 flex">
                    <div className="rounded-md bg-white px-3 py-1 shadow-lg">
                      <p>+30 conferences</p>
                    </div>
                  </div>
                </div>
                <div className="relative -ml-8">
                  <div className="relative h-44 w-full min-w-[200px] max-w-[300px] overflow-hidden rounded-md bg-secondary_dl">
                    <Image
                      alt=""
                      fill
                      src={"/images/img_ai_7.jpg"}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -left-8 top-10 flex">
                    <div className="rounded-md bg-white px-3 py-1 shadow-lg">
                      <p>+30 conferences</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="relative h-1/2">
                  <div className="relative h-full w-full min-w-[200px] max-w-[400px] rounded-md bg-secondary_dl overflow-hidden">
                  <Image
                      alt=""
                      fill
                      src={"/images/img_ai_2.jpg"}
                      style={{ objectFit: "cover" }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative -top-5 right-10 flex justify-end">
                    <div className="rounded-md bg-white px-3 py-1 shadow-lg">
                      <p>+30 conferences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-gutter relative mb-32">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-5xl font-semibold">Our Team</h2>
          <p>
            We are proud to work alongside visionary organizations committed to
            harnessing the potential of AI in Africa. Our partners represent a
            diverse ecosystem of innovators, from tech giants to local startups,
            all united in the goal of positioning Africa at the forefront of the
            global AI revolution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </section>

      {/* Core values */}
      <section className="section-gutter relative mb-32">
        <div className="flex flex-col items-center gap-x-5 lg:flex-row">
          <div className="mb-10 w-full lg:mb-0 lg:w-2/5">
            <div className="flex items-center gap-x-2">
              <p className="font-semibold text-primary_dl">Engagement</p>
              <hr className="w-1/5 border-t border-t-primary_dl" />
            </div>
            <h2 className="mb-3 text-5xl font-semibold">Core Values</h2>
            <p className="">
              We are proud to work alongside visionary organizations committed to
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
              We are proud to work alongside visionary organizations committed to
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
