"use client";

import Button from "@/src/components/core/button/button";
import Modal from "@/src/components/core/modal/modal";
import { AppProps } from "next/app";
import Image from "next/image";
import africa_ai_dots from "@/public/images/africa_ai_dots.png";
import bg_1 from "@/public/images/bg_1.jpg";
import ai_dots from "@/public/images/ai_dots.png";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightCircle,
  Calendar,
} from "lucide-react";
import KeyTopicsCard from "@/src/components/card/keyTopicsCard";
import CTA from "@/src/components/cta/cta";
import BlogCard from "@/src/components/card/blogCard";
import SecionSlide from "@/src/components/animations/sectionAnimate";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import Link from "next/link";
import BatchCard from "@/src/components/card/batchCard";
import { KEY_TOPICS } from "@/src/data/topic";
import { BATCH_LIST } from "@/src/data/batch";
import useInfiniteSlideAnimate from "@/app/(root)/_hooks/useInfiniteSlideAnimate";
import UpcomingEventsList from "@/src/components/event/upcomingEventsList";
import { Topic } from "@/src/types/topic.schema";

export default function Home() {
  const { partnersRef, xTranslation } = useInfiniteSlideAnimate();
  const [isModal, setIsModal] = useState(false);

  return (
    <main className="">
      {/* Hero */}
      <div className="section-gutter section-spacing grid w-full grid-cols-1 lg:grid-cols-2">
        <section className="pt-[32px] lg:mb-32 lg:pt-[32px]">
          <h1 className="mb-2 text-5xl font-bold leading-[1.15] lg:text-6xl">
            Shaping <span className="text-primary_dl">AI</span>'s Future in{" "}
            <span className="text-secondary_dl">Africa</span>
          </h1>
          <p className="mb-8 lg:mb-16">
            Discover how artificial intelligence is driving sustainable
            development and economic growth across the African continent.
          </p>
          <div className="flex w-full flex-col justify-between gap-y-3 rounded-md bg-neutral-100 p-2 lg:w-2/3 lg:flex-row lg:items-center lg:gap-y-0">
            <p>Explore AI Topics with us</p>
            <Button onClick={() => setIsModal(true)}>Start Now</Button>
          </div>
        </section>
        <section className="relative hidden lg:block">
          <Image
            className="absolute -right-28 h-[90vh] w-auto"
            placeholder="blur"
            quality={100}
            alt=""
            sizes="90vw"
            src={africa_ai_dots}
          />
          <div className="absolute right-0"></div>
          <SecionSlide className="absolute left-8 h-[160px] w-[30vw] max-w-[300px] overflow-hidden rounded-md bg-primary_dl">
            <Image
              alt=""
              fill
              src={"/images/img_ai_1.jpg"}
              style={{ objectFit: "cover" }}
              className="h-full w-full object-cover"
            />
          </SecionSlide>
          <SecionSlide
            delay={0.5}
            className="absolute -right-28 top-28 h-[300px] w-[30vw] max-w-[300px] overflow-hidden rounded-md bg-primary_dl"
          >
            <Image
              alt=""
              fill
              src={"/images/img_ai_2.jpg"}
              style={{ objectFit: "cover", backgroundPosition: "top" }}
              className="h-full w-full bg-top object-cover"
            />
          </SecionSlide>
          <SecionSlide
            delay={1}
            className="absolute bottom-0 left-8 h-[200px] w-[30vw] max-w-[300px] overflow-hidden rounded-md bg-primary_dl"
          >
            <Image
              alt=""
              fill
              src={"/images/img_ai_3.jpg"}
              style={{ objectFit: "cover" }}
              className="h-full w-full object-cover"
            />
          </SecionSlide>
        </section>
      </div>

      {/* Events */}
      <section className="section-gutter lg:section-spacing pb-32">
        <div className="mb-5">
          <h2 className="mb-3 text-3xl font-semibold">Events and upcoming</h2>
          <hr className="w-16 border-black" />
        </div>
        <UpcomingEventsList />
      </section>

      {/* Batch */}
      <section className="section-gutter section-spacing lg:pb-16">
        <div className="mb-5 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BATCH_LIST?.map((batch, key) => (
            <BatchCard
              key={key}
              src={batch?.src}
              mediaType={batch?.type}
              title={batch?.title}
            />
          ))}
        </div>
        <div className="flex items-center justify-end gap-x-2">
          <div className="flex items-center gap-x-3">
            <div className="rounded-md border border-black px-3 py-2">
              <ArrowLeft />
            </div>
            <div className="rounded-md border border-black px-3 py-2">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="section-gutter section-spacing relative mt-32 lg:mt-0 lg:pb-32">
        <div className="absolute inset-y-10 right-10 w-1/2 overflow-hidden lg:right-64">
          <Image alt="" src={ai_dots} />
        </div>
        <div className="absolute inset-y-10 right-0 overflow-hidden lg:-right-24 lg:w-1/2">
          <Image alt="" src={bg_1} className="opacity-20" />
        </div>
        <div className="relative mb-5 grid grid-cols-1 lg:grid-cols-2">
          <div className="mb-5 lg:mb-0">
            <h1 className="text-3xl font-semibold lg:text-5xl">
              Cultivating Africa's AI Ecosystem
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            <SecionSlide className="bg-white p-5 shadow-lg">
              <div className="-ml-10 mb-4 bg-secondary_dl p-4 text-white">
                <h4 className="text-xl font-semibold">
                  Cultural and Economical Context
                </h4>
              </div>
              <p>
                Provide AI models adapted to the cultural and economical context
                of Africa.
              </p>
            </SecionSlide>
            <SecionSlide delay={0.25} className="bg-white p-5 shadow-lg">
              <div className="-ml-10 mb-4 bg-secondary_dl p-4 text-white">
                <h4 className="text-xl font-semibold">Ethical AI Advocacy</h4>
              </div>
              <p>
                Develop and Promote the use of AI in Africa in an ethical way.
              </p>
            </SecionSlide>
          </div>
        </div>
        {/* <div className="relative justify-end lg:flex">
          <div className="grid shrink-0 grid-cols-1 items-stretch gap-x-10 md:grid-cols-2 lg:flex lg:w-1/2">
            <SecionSlide delay={0.5} className="bg-white p-5 shadow-lg">
              <div className="-ml-10 mb-4 bg-secondary_dl p-4 text-white">
                <h4 className="text-xl font-semibold">Ethical AI Advocacy</h4>
              </div>
              <p>
                To promote the responsible and ethical development of AI in
                Africa, ensuring that technological advancements align with
                African values and contribute to a more equitable and inclusive
                society.
              </p>
            </SecionSlide>
            <SecionSlide delay={0.75} className="bg-white p-5 shadow-lg">
              <div className="-ml-10 mb-4 bg-secondary_dl p-4 text-white">
                <h4 className="text-xl font-semibold">Social Impact Focus</h4>
              </div>
              <p>
                Our goal is to leverage AI for social good, developing and
                implementing solutions that address Africa's most pressing
                challenges in healthcare, education, agriculture, and
                environmental conservation.
              </p>
            </SecionSlide>
          </div>
          <div className="w-24 shrink"></div>
        </div> */}
      </section>

      {/* Topics */}
      <section className="section-spacing w-full overflow-x-hidden lg:pb-32">
        <div className="section-gutter mb-5">
          <h2 className="mb-3 text-3xl font-semibold">Our key topics</h2>
          <hr className="w-16 border-black" />
        </div>
        <motion.div
          ref={partnersRef}
          style={{ x: xTranslation }}
          className="-mx-32 mb-5 flex flex-nowrap items-center gap-x-5"
        >
          {[...KEY_TOPICS, ...KEY_TOPICS].map((topic, key) => (
            <KeyTopicsCard key={key} topic={topic} />
          ))}
        </motion.div>
      </section>

      {/* Latest news */}
      <section className="section-gutter section-spacing lg:pb-32">
        <div className="mb-5">
          <h2 className="mb-3 text-center text-3xl font-semibold lg:text-5xl">
            Latest News
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard img="/images/img_ai_4.jpg" />
          <BlogCard img="/images/img_ai_5.jpg" />
          <BlogCard img="/images/img_ai_6.jpg" />
        </div>
      </section>

      {/* Partners */}
      <section className="section-spacing lg:pb-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="lg:order1 order-2 flex flex-col overflow-x-hidden lg:overflow-visible">
            <div className="-ml-8 w-full overflow-hidden rounded-r-md bg-neutral-200 pb-16 pt-5 lg:-ml-32">
              <motion.div
                ref={partnersRef}
                style={{ x: xTranslation }}
                className="-ml-8 mb-3 flex flex-nowrap items-center gap-x-5 lg:-ml-16"
              >
                {[...Array.from({ length: 16 })].map((item, key) => (
                  <div
                    key={key}
                    className="h-16 w-[100px] shrink-0 rounded-md bg-neutral-500"
                  ></div>
                ))}
              </motion.div>
              <motion.div
                ref={partnersRef}
                style={{ x: xTranslation }}
                className="-ml-8 mb-3 flex flex-nowrap items-center gap-x-5 lg:-ml-16"
              >
                {[...Array.from({ length: 16 })].map((item, key) => (
                  <div
                    key={key}
                    className="h-16 w-[100px] shrink-0 rounded-md bg-neutral-500"
                  ></div>
                ))}
              </motion.div>
              <motion.div
                ref={partnersRef}
                style={{ x: xTranslation }}
                className="-ml-8 mb-3 flex flex-nowrap items-center gap-x-5 lg:-ml-16"
              >
                {[...Array.from({ length: 16 })].map((item, key) => (
                  <div
                    key={key}
                    className="h-16 w-[100px] shrink-0 rounded-md bg-neutral-500"
                  ></div>
                ))}
              </motion.div>
            </div>
            <div className="-ml-16 -mt-10 flex items-center gap-x-5 lg:-ml-16">
              {[...Array.from({ length: 3 })].map((i, key) => (
                <SecionSlide
                  key={key}
                  type="right"
                  delay={0.2 * key}
                  className="w-[300px] shrink-0 rounded-md bg-white p-3 shadow-lg"
                >
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="size-10 rounded-full bg-slate-600"></div>
                    <div>
                      <h5 className="font-semibold">Roger Gabimer</h5>
                      <p className="text-neutral-500">CEO of company</p>
                    </div>
                  </div>
                  <p>
                    We are committed to nurturing Africa's AI talent pool,
                    providing world-class education
                  </p>
                </SecionSlide>
              ))}
            </div>
          </div>
          <div className="section-gutter order-1 text-end lg:order-2">
            <h2 className="mb-3 text-3xl font-semibold lg:text-5xl">
              Our Alliance for AI Excellence
            </h2>
            <p className="mb-3">
              We're proud to work alongside visionary organizations committed to
              harnessing the potential of AI in Africa. Our partners represent a
              diverse ecosystem of innovators, from tech giants to local
              startups, all united in the goal of positioning Africa at the
              forefront of the global AI revolution.
            </p>
            <Button>Become a partner</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Modal */}
      <Modal
        open={isModal}
        close={() => setIsModal(false)}
        size="lg"
        title="Join us"
      >
        <p className="mb-3">
          Enter your mail and and a link should be sent to you for introducs the
          community
        </p>
        <div className="flex items-stretch gap-2">
          <input
            type="email"
            placeholder="email@gmail.com"
            className="grow rounded-md bg-neutral-100 px-3 py-2"
          />
          <Button type="submit" onClick={() => setIsModal(false)}>
            Submit
          </Button>
        </div>
      </Modal>
    </main>
  );
}
