"use client";
import { useState } from "react";
import ProblemsList from "./ProblemsList";
import ComapaniesCards from "./ComapaniesCards";
import Categories from "./Categories";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="flex gap-0">
      <div className="bg-[#1c1c1c] h-full flex-col items-start w-[90%]">
        <ComapaniesCards />
        <Categories />
        <ProblemsList categoryFilter={''}/>
      </div>
      <div className="mt-10">
        <div className=" mr-10">
          {" "}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
export default Home;
