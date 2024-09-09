import CTA from "@/src/components/cta/cta";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 pt-6">
      <div className="mx-auto max-w-[48rem]">
        <div className="mb-10">
          <Link href={"/ressources"} className="flex items-center gap-x-2">
            <ArrowLeft />
            Back to ressources
          </Link>
        </div>
        <div className="mb-10">
          <p className="mb-2 text-sm">Monday, 21 June 2024</p>
          <h3 className="mb-5 text-3xl font-bold">
            The Rise of AgriTech: How AI is Boosting African Agriculture
          </h3>
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="size-10 rounded-md bg-slate-700"></div>
              <div>
                <p className="font-semibold">Alan Moussa</p>
                <p className="truncate text-sm text-neutral-600">
                  Ai Researcher and ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 h-[400px] w-full rounded-md bg-neutral-200"></div>
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
