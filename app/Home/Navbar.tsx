"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SignOutButton, useAuth } from "@clerk/nextjs";

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const SignedIn=useAuth()

  return (
    <nav className="bg-black items-center border-b-2 border-gray-600 h-20">
      <div className="flex justify-between items-center">
        <div className="ml-6">
          <Image src={"/logo.png"} alt="Logo" width={90} height={60} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 font-mono">
          <Link href="/">
            <Button
              variant="default"
              className="ml-5 text-[2vh] mb-3 btn-gradient hover:bg-transparent hover:border-l-2 hover:border-r-2 hover:border-green-500"
            >
              Home
            </Button>
          </Link>
          <Link href="/problems">
            <Button
              variant="default"
              className="ml-5 text-[2vh] btn-gradient hover:bg-transparent hover:border-l-2 hover:border-r-2 hover:border-green-500"
            >
              Problems
            </Button>
          </Link>
          <Link href="/testimonials">
            <Button
              variant="default"
              className="ml-5 text-[2vh] btn-gradient hover:bg-transparent hover:border-l-2 hover:border-r-2 hover:border-green-500"
            >
              Testimonials
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="default"
              className="ml-5 text-[2vh] btn-gradient hover:bg-transparent hover:border-l-2 hover:border-r-2 hover:border-green-500"
            >
              About
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}

        {/* Mobile Dropdown Menu */}
        {/* {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center font-mono md:hidden">
            <Link href="/" className="py-2 text-white text-lg">
              Home
            </Link>
            <Link href="/problems" className="py-2 text-white text-lg">
              Problems
            </Link>
            <Link href="/testimonials" className="py-2 text-white text-lg">
              Testimonials
            </Link>
            <Link href="/about" className="py-2 text-white text-lg">
              About
            </Link>
            <Link href="/login" className="py-2 text-white text-lg">
              Log In
            </Link>
            <Link href="/contact" className="py-2 text-white text-lg">
              Contact Us
            </Link>
          </div>
        )} */}

        {/* Desktop Right-Side Menu */}
        <div className="hidden md:flex gap-4 font-mono mr-5">
          
          {SignedIn && (
            <Button
              className="ml-5 text-[2vh] btn-gradient hover:bg-transparent border-l-2 border-r-2 hover:text-white border-green-500 hover:scale-105"
              variant="ghost"
            >
              <a href="/problems">Login</a>
            </Button>
          )}
          {!SignedIn && (
            <Button
              className="bg-transparent border border-green-500 hover:text-white text-white hover:scale-105 rounded-3xl w-[15vh]"
              variant="ghost"
            >
              <SignOutButton />
            </Button>
          )}
          
          <Link href="/contact">
            <Button className="ml-5 text-[2vh] btn-gradient hover:bg-transparent border-l-2 border-r-2 border-green-500 hover:scale-105">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
