import { Calendar, Locate } from "lucide-react";
import Image from "next/image";
import React from "react";

type propsType = {
  title?: String;
  description?: String;
  id?: String;
};

const EventCard = (props: propsType) => {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-md">
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
        <p className="mb-5">
          Exploring how AI can drive financial inclusion and innovation in
          African financial services.
        </p>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-3">
            <Calendar color="white" />
            <p className="text-sm font-semibold">February 20, 2025</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Locate color="white" />
            <p className="text-sm font-semibold">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
