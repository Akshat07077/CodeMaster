"use client";
import React from "react";
import Marquee from "react-fast-marquee";

function Marque() {
  return (
    <div className="mt-20">
      <div>
        {/* <h1 className="text-center text-white font-sans text-[4vh]">
          We Provides Knowledge on all of this.
        </h1> */}
      </div>
      <div className="">
        <Marquee className=" p-5" autoFill pauseOnHover>
          <img className="mx-6" src="/amazon.png" alt="Amazon" width={100} />

          <img
            style={{ mixBlendMode: "multiply" }}
            className="mx-6"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            width={100}
          />
          <img
            className="mx-6"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            width={100}
          />
          <img
            className="mx-6"
            src="https://logotyp.us/file/tata.svg"
            alt="TCS"
            width={100}
          />
          <img
            className="mx-6"
            src="https://logotyp.us/file/infosys.svg"
            alt="Infosys"
            width={100}
          />
          <img
            className="mx-6"
            src="https://logotyp.us/file/wipro.svg"
            alt="Wipro"
            width={100}
          />
          <img
            className="mx-6"
            src="https://logotyp.us/file/apple.svg"
            alt="Accenture"
            width={100}
          />
          <img
            className="mx-6"
            src="https://logotyp.us/file/hcl.svg"
            alt="Capgemini"
            width={100}
          />
          <img
            className="mx-6"
            src="https://logotyp.us/file/facebook.svg"
            alt="Capgemini"
            width={100}
          />
        </Marquee>
        <Marquee
          className="p-5 text-white font-mono text-2xl"
          autoFill
          direction="right"
          pauseOnHover
        >
          <div className="mx-6"> Arrays</div>
          <div className="mx-6">Linked Lists</div>
          <div className="mx-6">Stacks</div>
          <div className="mx-6">Queues</div>
          <div className="mx-6">Binary Trees</div>
          <div className="mx-6">Graphs</div>
          <div className="mx-6">Dynamic Programming</div>
          <div className="mx-6">Hashing</div>
          <div className="mx-6">Recursion</div>
          <div className="mx-6">Sorting Algorithms</div>
          <div className="mx-6">Greedy Algorithms</div>
          <div className="mx-6">Binary Search</div>
          <div className="mx-6">Backtracking</div>
          <div className="mx-6">Trie</div>
          <div className="mx-6">Graph Traversal</div>
        </Marquee>
      </div>
    </div>
  );
}

export default Marque;
