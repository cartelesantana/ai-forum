import { Linkedin } from "lucide-react";
import React from "react";

type propsType = {
  title?: String;
  description?: String;
  id?: String;
};

const TeamCard = (props: propsType) => {
  return (
    <div>
      <div className="h-[200px] bg-neutral-300"></div>
      <div className="relative">
        <div className="bg-secondary_dl absolute left-0 top-0 flex size-10 items-center justify-center">
          <Linkedin color="white" />
        </div>
        <div className="pl-5">
          <div className="bg-white py-2 pb-5 pl-8 pr-5 shadow-md">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-neutral-600">AI Researcher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
