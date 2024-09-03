"use client";
import { Button } from "@/components/ui/button";
import {
  AlarmClock,
  ChevronLeft,
  ChevronRight,
  Code2,
  List,
  UserCircle,
} from "lucide-react";
import React from "react";
import Timer from "../Components/Timer";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between px-4 h-14 text-gray-300 border-b-[1px] border-slate-500 bg-black">
      <div className="flex text-sm gap-2">
        <div>
          <img src="/logo.png" alt="" className="h-16 w-20" />
        </div>
        <div className="flex items-center">
          <List />
          <p className="ml-2">Problems List</p>
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <div className="items-center flex">
        <div className="flex gap-4">
          <Timer />
          {/* <div className="bg-neutral-700 p-2 rounded-xl ">
            <Code2 height={18} />
          </div> */}
          <div className="preferenceBtn-tooltip preferenceBtn">Full Screen</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <UserCircle />
        <Button className="bg-green-600 h-8 hover:scale-105">Log Out</Button>
      </div>
    </div>
  );
};

export default Header;
