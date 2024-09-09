import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type propsType = {
  title?: String;
  description?: String;
  id?: String;
};

const TextRessourcesCard = (props: propsType) => {
  return (
    <div className="rounded-md border border-black bg-white p-3 shadow-lg">
      <h5 className="text-xl font-semibold">
        Introduction to Machine Learning for African Developers
      </h5>
      <p className="mb-3 text-neutral-600">
        A comprehensive course designed to introduce African developers to the
        basics of machine learning.
      </p>
      <div className="flex items-center justify-end gap-x-3">
        <Link href={"/ressources/1"} className="flex items-center gap-x-3">
          <p>Read more</p>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default TextRessourcesCard;
