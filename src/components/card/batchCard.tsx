import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BaseTaskAttributes = React.ComponentPropsWithoutRef<"div">;

interface propsType extends BaseTaskAttributes {
  title?: string,
  description?: string,
  src?: string,
  mediaType?: string,
  id?: string,
};

const BatchCard = (props: propsType) => {
  
  return (
    <div className="flex flex-col">
      <div className="relative mb-3 h-[250px] overflow-hidden rounded-md bg-slate-300">
        {props?.mediaType ? (
          props.mediaType === "image" ? (
            <Image
              alt=""
              fill
              src={`${props.src ?? "/images/img_ai_4.jpg"}`}
              style={{ objectFit: "cover" }}
              className="h-full w-full object-cover"
            />
          ) : (
            <video className="h-full w-full object-cover">
              <source
                src={`${props.src ?? "/videos/video_batch.mp4"}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )
        ) : (
          <Image
            alt=""
            fill
            src={`${props.src ?? "/images/img_ai_4.jpg"}`}
            style={{ objectFit: "cover" }}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="grow flex flex-col justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex items-center gap-x-1 text-neutral-600">
              <Calendar size={20} />
              <p className="text-sm">22 May 2024</p>
            </div>
          </div>
          <div className="mb-3">
            <h4 className="truncate-2-dl mb-1 hyphens-auto text-xl font-semibold">
              {props?.title ??
                "The Rise of AgriTech: How AI is Boosting African Agriculture"}
            </h4>
            <p className="truncate-2-dl hyphens-auto">
              Discuss AI-powered solutions for crop management, pest control,
              and yield prediction...
            </p>
          </div>
        </div>
        <Link
          href={"/blog/1"}
          className="flex w-full items-center justify-center rounded-md border border-black px-3 py-2 text-sm font-semibold"
        >
          Read
        </Link>
      </div>
    </div>
  );
};

export default BatchCard;
