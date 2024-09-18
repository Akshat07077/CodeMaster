"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SignOutButton, useAuth, SignedIn, SignedOut } from "@clerk/nextjs";

type Props = {};

function Navbar({}: Props) {
  const { isSignedIn } = useAuth();  // Get the sign-in status

  return (
    <nav className="bg-black items-center border-b-2 border-gray-600 h-20">
      <div className="flex justify-between items-center">
        <div className="ml-6 flex items-center gap-4">
          <Image src={"/logo.png"} alt="Logo" width={90} height={60} />

          {/* Conditionally show Login/Logout button on the top left */}

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

        {/* Desktop Right-Side Menu */}
        <div className="hidden md:flex gap-4 font-mono mr-5">
        {isSignedIn ? (
            <SignOutButton>
              <Button
                className="text-[2vh] btn-gradient hover:text-white border-l-2 border-r-2 border-green-500 hover:scale-105"
                variant="ghost"
              >
                Logout
              </Button>
            </SignOutButton>
          ) : (
            <Link href="/problems">
              <Button
                className="text-[2vh] btn-gradient hover:text-white  border-l-2 border-r-2 border-green-500 hover:scale-105"
                variant="ghost"
              >
                Login
              </Button>
            </Link>
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
