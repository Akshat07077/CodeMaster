"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

type Props = {};

function Demo({}: Props) {
  
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };
  const [language, setLanguage] = useState("javascript");

  return (
    <div className="w-[60%] bg-[#1E1E1E]">
    <div className="bg-[#1E1E1E]">
        <div className="p-1 text-white h-10">
          <label htmlFor="language-select" className="mr-4 "></label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="p-2 bg-[#1C1C1C] text-[1.4vh] rounded-xl"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>N
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="html">HTML</option>
          </select>
        </div>
          <div className="w-full h-[45vh] border-[#dadada7e] border-b-2 border-r-2  overflow-auto">
            <Editor
              className=""
              height="88%"
              defaultValue="const a=1;"
              defaultLanguage="javascript"
              language={language}
              theme="vs-dark"
            />
            <div className="overflow-hidden gap-5 bg-[#1E1E1E]  flex-row-reverse flex mr-10">
              <Button className="rounded-xl h-9 w-20 hover:bg-green-700 bg-green-600 p-1 text-white">
                Submit
              </Button>
              <Button className="rounded-xl h-9 w-16 hover:bg-slate-400 bg-slate-500 p-1 text-white">
                Run
              </Button>
            </div>
          </div>
    </div>
    </div>
  );
}

export default Demo;
