import CTA from "@/src/components/cta/cta";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";
import { GoLocation } from "react-icons/go";

const Page = () => {
  return (
    <div className="px-4 pt-6 sm:px-6 md:px-8">
      <div className="mx-auto max-w-[48rem]">
        <div className="mb-10">
          <Link href={"/events"} className="flex items-center gap-x-2">
            <ArrowLeft />
            Back to events
          </Link>
        </div>
        <div className="mb-10">
          <div className="flex flex-col gap-5 md:flex-row lg:items-center mb-2 text-neutral-500">
            <div className="flex items-center gap-x-3">
              <Calendar />
              <p className="">Monday, 21 June 2024</p>
            </div>
            <div className="flex items-center gap-x-3">
              <GoLocation size={20} />
              <p className="">Lagos, Nigeria</p>
            </div>
          </div>
          <h3 className="mb-5 text-3xl font-bold">
            The Rise of AgriTech: How AI is Boosting African Agriculture
          </h3>
          {/* <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="size-10 rounded-md bg-slate-700"></div>
              <div>
                <p className="font-semibold">Alan Moussa</p>
                <p className="truncate text-sm text-neutral-600">
                  Ai Researcher and ...
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="mb-10 flex h-[400px] w-full items-stretch gap-5">
          <div className="w-2/3 shrink-0 rounded-md bg-neutral-200"></div>
          <div className="flex w-1/3 flex-col gap-5">
            <div className="grow rounded-md bg-neutral-200"></div>
            <div className="grow rounded-md bg-neutral-200"></div>
          </div>
        </div>
        <div className="mb-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            earum minus molestias provident cum nam id voluptate nostrum
            dignissimos placeat reprehenderit, magni, numquam expedita voluptas
            dolore voluptatum inventore consequuntur quisquam?
          </p>
        </div>
        <hr className="mb-10 border-t border-neutral-200" />
        <div className="mb-10">
          <h5 className="mb-2 text-lg font-semibold">
            Lorem ipsum dolor sit amet
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            earum minus molestias provident cum nam id voluptate nostrum
            dignissimos placeat reprehenderit, magni, numquam expedita voluptas
            dolore voluptatum inventore consequuntur quisquam?
          </p>
        </div>
        <hr className="mb-10 border-t border-neutral-200" />
      </div>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Page;
