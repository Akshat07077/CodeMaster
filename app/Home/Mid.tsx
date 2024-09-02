"use client";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import Marque from "./Marque";
import { Button } from "@/components/ui/button";

type Props = {};

function Mid({}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="bg-black">
      {/* Main Section with Text and Video */}
      <div className="bg-black flex items-center justify-center gap-4">
        <div className="text-main w-[50%] p-4 ml-20">
          <h1 className="text-[8vh] text-white mt-10">
            Code with <span className="text-green-500">CodeMaster</span> and
            become One of the <span className="text-green-500">Master</span> in
            DSA.
          </h1>
          <p className="text-gray-500 w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            sapiente eligendi debitis ab voluptatibus enim?
          </p>
          <Button className="mt-5 text-[2vh]  hover:bg-transparent hover:border-l-2 hover:border-r-2 hover:border-green-500">
            Get Started
          </Button>
        </div>
        <div className="w-[40%] mr-20">
          <video
            ref={videoRef}
            className="w-full h-auto mt-10 ml-10 rounded-lg border-2 border-green-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            muted
            loop
          >
            <source
              src="https://videos.pexels.com/video-files/3130284/3130284-sd_640_360_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Marquee Section */}
      <Marque />
    </div>
  );
}

export default Mid;
