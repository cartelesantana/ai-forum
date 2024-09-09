import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type propsType = {
  title?: String;
  description?: String;
  img?: String;
  id?: String;
};

const BlogCard = (props: propsType) => {
  return (
    <div>
      <div className="relative mb-3 h-[250px] overflow-hidden rounded-md bg-slate-300">
        <Image
          alt=""
          fill
          src={`${props.img ?? "/images/img_ai_4.jpg"}`}
          style={{ objectFit: "cover" }}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <div className="mb-3 flex items-center gap-2">
          <div className="size-10 rounded-md bg-slate-700"></div>
          <div>
            <p className="font-semibold">Alan Moussa</p>
            <p className="truncate text-sm text-neutral-600">
              Ai Researcher and ...
            </p>
          </div>
          <div className="ml-auto flex items-center">
            <Calendar />
            <p className="text-sm text-neutral-600">16 July 2024</p>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="mb-1 hyphens-auto text-xl font-semibold">
            The Rise of AgriTech: How AI is Boosting African Agriculture
          </h4>
          <p className="hyphens-auto">
            Discuss AI-powered solutions for crop management, pest control, and
            yield prediction...
          </p>
        </div>
        <Link href={"/blog/1"} className="flex justify-center items-center w-full rounded-md border border-black px-3 py-2 text-sm font-semibold hover:bg-neutral-200 duration-200">
          Read
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
