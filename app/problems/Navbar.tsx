import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#282828] text-white h-12 shadow-md">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold mb-5">
          <h1>CodeMaster</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className="hover:border-b-[1px] hover:border-green-400 text-[#b7b7b7] p-2 mb-5 hover:text-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:border-b-[1px] hover:border-green-400 text-[#b7b7b7]   p-2 mb-5 hover:text-gray-100"
          >
            Problems
          </a>
          <a
            href="#"
            className="hover:border-b-[1px] hover:border-green-400 text-[#b7b7b7]   p-2 mb-5 hover:text-gray-100"
          >
            Contest
          </a>
          <a
            href="#"
            className="hover:border-b-[1px] hover:border-green-400 text-[#b7b7b7]   p-2 mb-5 hover:text-gray-100"
          >
            Discuss
          </a>
          <a
            href="#"
            className="hover:border-b-[1px] hover:border-green-400 text-[#b7b7b7]   p-2 mb-5 hover:text-gray-100"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:border-b-[1px] text-[#b7b7b7]   hover:border-green-400 p-2 mb-5 hover:text-gray-100"
          >
            Contact Us
          </a>
        </div>

        {/* Right side - Login/Register/Premium */}
        <div className="flex space-x-4">
          {/* <a
            href="#"
            className="bg-yellow-500 mb-5 text-gray-900 py-2 px-4 rounded-md hover:bg-yellow-600 hidden md:block"
          >
            Sign In
          </a> */}
          <a
            href="#"
            className="bg-orange-700 mt-1 mb-5 text-gray-900 rounded-xl shadow-green-600 py-1 px-4  hover:scale-95 hidden md:block"
          >
            <SignOutButton/>
          </a>
        </div>

        {/* Hamburger Menu (for mobile view) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
