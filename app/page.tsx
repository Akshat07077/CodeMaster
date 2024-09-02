import React from "react";
import Navbar from "./Home/Navbar";
import Mid from "./Home/Mid";
import Footer from "./Home/Footer";
import Demo from "./Home/Demo";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import MouseTrailer from "./Home/MouseTrail";

function page() {
  return (
    <>
      <MouseTrailer />
      <Navbar />
      <Mid />
      {/* /* <ChakraProvider theme={theme}> */} <Demo />
      <Footer />
    </>
  );
}

export default page;
