import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import MouseTrailer from "../Home/MouseTrail";

function page() {
  return (
    <div className="bg-[#1c1c1c]">
      <MouseTrailer />

      <Navbar />
      <Home />
    </div>
  );
}

export default page;
