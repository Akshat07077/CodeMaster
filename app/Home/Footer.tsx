import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-black">
      <div className=" border-t-2 border-gray-500 flex justify-evenly h-[35vh] bg-black">
        <div className="logo mt-16">
          {" "}
          <img style={{ height: "150px" }} src="/logo.png" alt="" />
        </div>
        <div className="text-white mt-12 text-lg font-mono">
          <h2 className="text-green-500 ">Company</h2>
          <ul className=" mt-5">
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Home
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Problems
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Testimonials
              </Link>{" "}
            </li>{" "}
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Contat Us
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="text-white text-lg mt-12 font-mono">
          <h2 className="text-green-500 text-center ">Companies</h2>

          <ul className="mt-5">
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                TCS
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Amazon
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Infosys
              </Link>{" "}
            </li>{" "}
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Wipro
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="text-white text-lg mt-12 font-mono">
          <h2 className="text-green-500 text-center ">Topics</h2>

          <ul className="mt-5">
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Home
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Home
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Home
              </Link>{" "}
            </li>{" "}
            <li>
              <Link className="hover:text-green-500" rel="stylesheet" href="/">
                Home
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-white text-sm mb-12">
        All rights reserved 2024. Made by Akshat Sharma
      </p>
    </div>
  );
}

export default Footer;
