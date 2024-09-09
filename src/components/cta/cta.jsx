"use client"

import Image from "next/image";
import Button from "@/src/components/core/button/button";
import React, { useState } from "react";
import africa_ai_dots from "@/public/images/africa_ai_dots.png";
import Modal from "@/src/components/core/modal/modal";

const CTA = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <section className="px-4 md:px-12 lg:px-24 flex lg:pt-32">
      <div className="-mx-4 lg:-mx-32 flex lg:h-72 grow items-start justify-center bg-cta bg-contain bg-repeat-x">
        <div className="relative lg:-mt-20 flex flex-col items-center overflow-hidden rounded-md bg-white px-3 lg:px-10 pb-10 lg:pb-32 pt-5 shadow-xl">
          <Image
            className="absolute -bottom-64 -right-32 w-auto"
            placeholder="blur"
            quality={100}
            alt=""
            src={africa_ai_dots}
          />
          <Image
            className="absolute -bottom-64 -left-32 w-auto"
            placeholder="blur"
            quality={100}
            alt=""
            src={africa_ai_dots}
          />

          <h2 className="mb-3 text-3xl lg:text-5xl font-semibold">Community Membership</h2>
          <p className="mb-10">
            Connect with fellow AI enthusiasts, access exclusive resources, and
            shape the future of AI in Africa.
          </p>
          <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 w-full lg:w-2/3 items-center justify-between rounded-md bg-neutral-100 p-2">
            <p>Join Africa's Premier AI Community</p>
            <Button onClick={() => setIsModal(true)}>Become a Member</Button>
          </div>
        </div>
      </div>

      <Modal
        open={isModal}
        close={() => setIsModal(false)}
        size={"lg"}
        title="Join us"
      >
        <p className="mb-3">Enter your mail and and a link should be sent to you for introducs the
        community</p>
        <div className="flex items-stretch gap-2">
        <input
          type="email"
          placeholder="email@gmail.com"
          className="grow rounded-md bg-neutral-100 px-3 py-2"
        />
        <Button type="submit" onClick={() => setIsModal(false)} >Submit</Button>
        </div>
      </Modal>
    </section>
  );
};

export default CTA;
