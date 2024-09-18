import React from "react";
import StudyCard from "./StudyCard";
import { AxeIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto items-center w-[90%] p-4">
      <h2 className="text-2xl font-bold mb-6 text-white">
        CodeMaster Codelist
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link href={'/playlists/faang'}>
        <StudyCard
          title="Join FAANG CodeList"
          description="Must-do List for Interview Prep"
          bgColor="bg-blue-600"
          source=""
        /></Link>
        <Link href={'/playlists/tcs'}>
        <StudyCard
          title="Ace TCS CodeList"
          description="Ace Coding Interview with 75 Qs"
          bgColor="bg-purple-600"
        /></Link>
        <StudyCard
          title="5+ Companies Common Ques"
          description="Crack Main Interview in 50 Qs"
          bgColor="bg-blue-800"
        />
        <StudyCard
          title="Introduction to Pandas"
          description="Learn Basic Pandas in 15 Qs"
          bgColor="bg-green-600"
        />
        <StudyCard
          title="30 Days of JavaScript"
          description="Learn JS Basics with 30 Qs"
          bgColor="bg-yellow-600"
        />
        <StudyCard
          title="Amazon Spring '23 High Frequency"
          description="Practice Amazon's Top Questions"
          bgColor="bg-orange-600"
        />
      </div>
    </div>
  );
}
