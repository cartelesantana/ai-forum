import SecionSlide from "@/src/components/animations/sectionAnimate";
import { EVENTS } from "@/src/data/event";
import { formatDate } from "@/src/utils/formatDate";
import { ArrowRightCircle, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoLocation } from "react-icons/go";

const UpcomingEventsList = () => {
  if (EVENTS.length === 0) {
    return (
      <div className="bg-secondary_dl/20 p-5">
        <p className="text-center">No events yet</p>
      </div>
    );
  } else {
    if (EVENTS.length >= 3) {
      return (
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
          <SecionSlide
            type={"top"}
            className="relative h-[300px] overflow-hidden rounded-md lg:h-[500px]"
          >
            <Image
              alt=""
              fill
              src={"/images/conference_1.jpg"}
              style={{ objectFit: "cover" }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-5 text-white">
              <h3 className="mb-2 text-3xl font-bold">
                {EVENTS.at(-1)?.title}
              </h3>
              <p className="truncate-2-dl mb-5">{EVENTS.at(-1)?.description}</p>
              <div className="flex flex-col gap-5 md:flex-row lg:items-center">
                <div className="flex items-center gap-x-3">
                  <Calendar color="white" />
                  <p className="font-semibold">{formatDate(EVENTS.at(-1)?.date as Date)}</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <GoLocation color="white" />
                  <p className="font-semibold">{EVENTS.at(-1)?.location || EVENTS.at(-1)?.type }</p>
                </div>
              </div>
            </div>
          </SecionSlide>
          <div className="grid h-[300px] gap-5 lg:h-[500px] lg:grid-rows-2">
            <SecionSlide
              type={"top"}
              delay={0.25}
              className="relative h-[150px] overflow-hidden rounded-md bg-slate-300 lg:h-auto"
            >
              <Image
                alt=""
                fill
                src={"/images/events/event_1.jpg"}
                style={{ objectFit: "cover" }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-5 text-white">
                <h3 className="mb-2 text-2xl font-bold">
                  {EVENTS.at(-2)?.title}
                </h3>
                <div className="flex justify-end">
                  <Link
                    href={`/events/${EVENTS.at(-2)?.id}`}
                    className="flex items-center gap-x-2 font-semibold"
                  >
                    More details
                    <ArrowRightCircle color="white" />
                  </Link>
                </div>
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
              <SecionSlide
                type={"top"}
                delay={0.5}
                className="relative h-[150px] overflow-hidden rounded-md lg:h-auto"
              >
                <Image
                  alt=""
                  fill
                  src={"/images/conference_1.jpg"}
                  style={{ objectFit: "cover" }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-5 text-white">
                  <h3 className="mb-2 text-2xl font-bold">
                    {EVENTS.at(-3)?.title}
                  </h3>
                  <div className="flex justify-end">
                    <Link
                      href={`/events/${EVENTS.at(-3)?.id}`}
                      className="flex items-center gap-x-2 font-semibold"
                    >
                      More details
                      <ArrowRightCircle color="white" />
                    </Link>
                  </div>
                </div>
              </SecionSlide>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1">
          <SecionSlide
            type={"top"}
            className="relative h-[300px] overflow-hidden rounded-md lg:h-[500px]"
          >
            <Image
              alt=""
              fill
              src={"/images/conference_1.jpg"}
              style={{ objectFit: "cover" }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-5 text-white">
              <h3 className="mb-2 text-3xl font-bold">
                {EVENTS.at(-1)?.title}
              </h3>
              <p className="truncate-2-dl mb-5">{EVENTS.at(-1)?.description}</p>
              <div className="flex flex-col gap-5 md:flex-row lg:items-center">
                <div className="flex items-center gap-x-3">
                  <Calendar color="white" />
                  <p className="font-semibold">{formatDate(EVENTS.at(-1)?.date as Date)}</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <GoLocation color="white" />
                  <p className="font-semibold">{EVENTS.at(-1)?.location || EVENTS.at(-1)?.type }</p>
                </div>
              </div>
            </div>
          </SecionSlide>
        </div>
      );
    }
  }
};

export default UpcomingEventsList;
