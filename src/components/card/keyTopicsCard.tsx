import { Topic } from "@/src/types/topic.schema";
import { Eye } from "lucide-react";
import React from "react";

interface topicPropsCard{
  topic?: Topic
  key?: number;
}

const KeyTopicsCard = (props: topicPropsCard) => {

  const { topic, ...rest } = props;

  return (
    <div {...rest} className="relative w-[300px] shrink-0 rounded-md bg-neutral-200 px-3 pt-3">
      <div className="bg-primary_dl absolute left-0 top-0 size-10 rounded-tl-md"></div>
      <div className="relative mb-2 rounded-md bg-white p-2">
        <h5 className="text-lg font-semibold">
          {topic?.title ?? "Healthcare"}
        </h5>
      </div>
      <p className="truncate-2-dl">
        {topic?.description ??
          "Telemedicine and remote diagnostics, Disease prediction and prevention, ..."}
      </p>
      <div className="-mx-3 flex justify-end">
        <button className="bg-secondary_dl/20 flex items-center gap-x-2 rounded-br-md rounded-tl-md px-3 py-1">
          <Eye />
          <p className="text-sm">Learn more</p>
        </button>
      </div>
    </div>
  );
};

export default KeyTopicsCard;
