'use client'
import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import MouseTrailer from "../Home/MouseTrail";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useStatStyles } from "@chakra-ui/react";
import { title } from "process";
import ProblemForm from "./Form";


function page() {
  return (
<>
    <div className="bg-[#1c1c1c]">
      {/* <MouseTrailer /> */}
      <Navbar />
      <Home />
    </div>
    <div><ProblemForm/>
        </div></>
  );
}

export default page;
