import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiX } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary_dl py-10">
      <div className="section-gutter mb-5 flex flex-col lg:flex-row gap-5 text-sm">
        <div className="w-full lg:w-2/6 pr-5 text-white">
          <div className="-ml-4 flex w-64 lg:w-2/3 items-center justify-end rounded-r-md h-16 mb-2 bg-white p-3 md:-ml-12 lg:-ml-24">
            <Link href={"/"} className="flex items-center gap-x-2 lg:gap-x-5">
              <Image
                alt="logo"
                src={"/images/logo.png"}
                width={41}
                height={40}
              />
              <h3 className="font-bold text-black">
                AFRICA AI <br />
                FORUM
              </h3>
            </Link>
          </div>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aut
            distinctio perspiciatis totam accusamus ipsum ea debitis, ullam
            deleniti exercitationem, soluta placeat nostrum quo repellat nulla,
            voluptatum facilis
          </p>
          <div className="flex items-center gap-5">
            <FaFacebookF size={20} />
            <Linkedin size={20} />
            <BsGithub size={20} />
          </div>
        </div>
        <div className="grid w-full lg:w-4/6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-y-2 text-white">
            <h5 className="mb-2 py-4 font-semibold">Site maps</h5>
            <Link href={""}>About</Link>
            <Link href={""}>Community</Link>
            <Link href={""}>Events</Link>
            <Link href={""}>Ressources</Link>
            <Link href={""}>Contacts</Link>
          </div>
          <div className="flex flex-col gap-y-2 text-white">
            <h5 className="mb-2 py-4 font-semibold">Company</h5>
            <Link href={""}>Team</Link>
            <Link href={""}>Partners</Link>
            <Link href={""}>Blog</Link>
          </div>
          <div className="flex flex-col gap-y-2 text-white">
            <h5 className="mb-2 py-4 font-semibold">Support</h5>
            <Link href={""}>Stack community</Link>
            <Link href={""}>Support documents</Link>
            <Link href={""}>Service status</Link>
            <Link href={""}>Email contact</Link>
          </div>
          <div className="flex flex-col gap-y-2 text-white">
            <h5 className="mb-2 py-4 font-semibold">Contact Us</h5>
            <Link href={""}>Support@africaaiforum.org</Link>
            <Link href={""}>+237 000 000 000</Link>
            <Link href={""}>Douala, Cameroon</Link>
          </div>
        </div>
      </div>
      <div className="section-gutter text-sm text-white">
        <p>All Right Reserved by Copyright 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
