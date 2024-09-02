"use client";

import React, { useEffect, useState } from "react";

const MouseTrailer: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailerStyle, setTrailerStyle] = useState({
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: "transform 0.1s ease-out",
    opacity: 0,
  });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
    setTrailerStyle({
      transform: `translate3d(${clientX}px, ${clientY}px, 0)`,
      transition: "transform 0.1s ease-out",
      opacity: 1,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        ...trailerStyle,
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        backgroundColor: "green",
        borderRadius: "50%",
        pointerEvents: "none",
        filter: "blur(4px)",
        zIndex: 9999,
      }}
    />
  );
};

export default MouseTrailer;
