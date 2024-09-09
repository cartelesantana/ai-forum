import { Linkedin } from "lucide-react";
import React from "react";
import { BsDiscord } from "react-icons/bs";
import { RiDiscordLine } from "react-icons/ri";

type propsType = {
  title?: String;
  description?: String;
  id?: String;
};

const CommunityMemberCard = (props: propsType) => {
  return (
    <div>
      <div className="h-[200px] rounded-t-md bg-neutral-300"></div>
      <div className="relative">
        <div className="flex flex-col items-center justify-center rounded-b border-x-2 border-b-2 border-black pb-5 pt-3">
          <p className="text-lg font-semibold">John Doe</p>
          <p className="text-neutral-600">AI Researcher</p>
        </div>
        <div className="relative -top-4 mx-auto flex w-3/4 items-center justify-center gap-x-3 rounded-md bg-neutral-200 px-3 py-1">
          <Linkedin />
          {/* <X /> */}
          {/* <Linkedin /> */}
          <RiDiscordLine size={26} />
        </div>
      </div>
    </div>
  );
};

export default CommunityMemberCard;
