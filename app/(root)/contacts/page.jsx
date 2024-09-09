import Image from "next/image";
import React from "react";
import africa_ai_dots from "@/public/images/africa_ai_dots.png";
import {
  Linkedin,
  Locate,
  Phone,
  X,
} from "lucide-react";
import CTA from "@/src/components/cta/cta";
import Button from "@/src/components/core/button/button";

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
          <h1 className="mb-2 text-center text-5xl lg:text-6xl font-bold leading-[1.15]">
            Contacts
          </h1>
          <p className="mb-10 lg:px-16 text-center">
            See how we are positioning Africa at the forefront of the AI
            revolution, one innovation at a time
          </p>
        </div>
      </section>

      <section className="relative mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="section-gutter">
            <div className="border-l border-primary_dl p-5">
              <div className="mb-2 flex items-center gap-x-5">
                <Image
                  alt="logo"
                  src={"/images/logo.png"}
                  width={71}
                  height={70}
                />
                <h3 className="font-bold">
                  AFRICA AI <br />
                  FORUM
                </h3>
              </div>
              <p className="mb-5">
                See how we are positioning Africa at the forefront of the AI
                revolution, one innovation at a time
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-x-2">
                  <Locate />
                  <p>Cameroon, Douala</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <Linkedin />
                  <p>africaaiforum</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <X />
                  <p>africaaiforum</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <Phone />
                  <p>+237 000 000 000</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative lg:p-4">
            <div className="absolute -left-5 -top-5 size-36 bg-secondary_dl"></div>
            <div className="absolute -right-10 bottom-56 size-36 bg-primary_dl"></div>
            <div className="relative flex flex-col gap-y-3 lg:rounded-md bg-white px-4 py-8 lg:p-8 shadow-lg">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Fullname</label>
                <input
                  type="text"
                  className="rounded-md border border-black px-3 py-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="rounded-md border border-black px-3 py-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">
                  Which category does your request fall under ?
                </label>
                <div>
                  <div className="flex items-center gap-x-2">
                    <input type="radio" name="feedback_type" id="" />
                    <label htmlFor="">
                      Feedback / Questions about our online courses
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input type="radio" name="feedback_type" id="" />
                    <label htmlFor="">Speaking engagement for Andrew Ng</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input type="radio" name="feedback_type" id="" />
                    <label htmlFor="">Press or interview request</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input type="radio" name="feedback_type" id="" />
                    <label htmlFor="">Entrepreneurship or career advice</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input type="radio" name="feedback_type" id="" />
                    <label htmlFor="">Other</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Message</label>
                <textarea
                  name=""
                  id=""
                  rows={5}
                  className="rounded-md border border-black px-3 py-2"
                ></textarea>
              </div>
              <Button>Submit</Button>
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
