import Image from "next/image";
import React from "react";
import africa_ai_dots from "@/public/images/africa_ai_dots.png";
import bg_1 from "@/public/images/bg_1.jpg";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Goal,
  Linkedin,
  Locate,
} from "lucide-react";
import CommunityMemberCard from "@/src/components/card/communityMemberCard";
import CTA from "@/src/components/cta/cta";
import EventCard from "@/src/components/card/eventCard";
import SecionSlide from "@/src/components/animations/sectionAnimate";
import { GoLocation } from "react-icons/go";

const Page = () => {
  return (
    <div>
      {/* Hero */}
      <section className="mb-16 lg:mb-32 h-[90vh]">
        <div className="relative h-full overflow-hidden">
          <Image
            alt=""
            fill
            src={"/images/conference_1.jpg"}
            style={{ objectFit: "cover" }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-4 lg:p-10 text-white">
            <h3 className="mb-2 text-4xl lg:text-5xl font-bold">
              AI for Financial Inclusion Forum
            </h3>
            <p className="mb-5">
              Exploring how AI can drive financial inclusion and innovation in
              African financial services.
            </p>
            <div className="flex flex-col md:flex-row lg:items-center gap-5">
              <div className="flex items-center gap-x-3">
                <Calendar color="white" />
                <p className="font-semibold">February 20, 2025</p>
              </div>
              <div className="flex items-center gap-x-3">
                <GoLocation color="white" />
                <p className="font-semibold">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="section-gutter lg:section-spacing pb-32 mb-32 lg:mb-0">
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-semibold">Events and upcoming</h2>
          <hr className="w-16 border-black" />
        </div>
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          <SecionSlide type={"top"} className="relative h-[300px] overflow-hidden rounded-md lg:h-[500px]">
            <Image
              alt=""
              fill
              src={"/images/conference_1.jpg"}
              style={{ objectFit: "cover" }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-5 text-white">
              <h3 className="mb-2 text-3xl font-bold">
                AI for Financial Inclusion Forum
              </h3>
              <p className="mb-5">
                Exploring how AI can drive financial inclusion and innovation in
                African financial services.
              </p>
              <div className="flex flex-col gap-5 md:flex-row lg:items-center">
                <div className="flex items-center gap-x-3">
                  <Calendar color="white" />
                  <p className="font-semibold">February 20, 2025</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <GoLocation color="white" />
                  <p className="font-semibold">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </SecionSlide>
          <div className="grid h-[300px] gap-5 lg:h-[500px] lg:grid-rows-2">
            <SecionSlide type={"top"} delay={0.25} className="relative h-[150px] overflow-hidden rounded-md bg-slate-300 lg:h-auto">
              <Image
                alt=""
                fill
                src={"/images/conference_1.jpg"}
                style={{ objectFit: "cover" }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-5 text-white">
                <h3 className="mb-2 text-2xl font-bold">
                  AI for Financial Inclusion Forum
                </h3>
              </div>
            </SecionSlide>
            <div className="section-spacing grid grid-cols-1 items-stretch gap-5 lg:mb-0 lg:grid-cols-2">
              <div>
                <h3 className="mb-2 text-2xl font-bold">
                  Where African AI Minds Connect
                </h3>
                <hr className="mb-3 w-16 border-black" />
                <p>
                  Discover a calendar full of opportunities to learn, network,
                  and innovate in the world of AI
                </p>
              </div>
              <SecionSlide type={"top"} delay={0.5} className="relative h-[150px] overflow-hidden rounded-md lg:h-auto">
                <Image
                  alt=""
                  fill
                  src={"/images/conference_1.jpg"}
                  style={{ objectFit: "cover" }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-5 text-white">
                  <h3 className="mb-2 text-2xl font-bold">
                    AI for Financial Inclusion Forum
                  </h3>
                </div>
              </SecionSlide>
            </div>
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="section-gutter mb-32">
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-semibold">Past Events</h2>
          <hr className="w-16 border-black" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5 mb-8">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
        <div className="flex flex-col items-center">
          <button className="text-primary_dl font-semibold">Show more</button>
          <hr className="border-primary_dl w-10" />
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Page;
