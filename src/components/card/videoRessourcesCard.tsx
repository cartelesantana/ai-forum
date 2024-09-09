import { ArrowRight, Download } from "lucide-react";
import React from "react";

type propsType = {
  title?: String;
  description?: String;
  id?: String;
};

const VideoRessourcesCard = (props: propsType) => {
  return (
    <div className="rounded-md border border-black bg-white p-3 shadow-lg">
      <div className="mb-3 h-44 rounded-md bg-slate-200"></div>
      <h5 className="text-xl font-semibold">
        Introduction to Machine Learning for African Developers
      </h5>
      <p className="mb-3 text-neutral-600">
        A comprehensive course designed to introduce African developers to the
        basics of machine learning.
      </p>
      <div className="flex items-center justify-end gap-x-3">
      <button className="flex items-center gap-x-3">
          <p>Read more</p>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default VideoRessourcesCard;
