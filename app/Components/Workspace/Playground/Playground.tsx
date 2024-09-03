import React, { useState } from "react";
import PlayNav from "./PlayNav";
import Split from "react-split";
import Editor from "@monaco-editor/react";
import EditorFooter from "./EditorFooter";
import { Button } from "@/components/ui/button";

type Props = {};

const Playground = (props: Props) => {
  const [language, setLanguage] = useState("javascript");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex flex-col relative">
      <PlayNav />
      <div className="border-[#dadada7e] bg-[#1E1E1E] rounded-xl border-l-2 border-t-2">
        <div className="p-1 h-10">
          <label htmlFor="language-select" className="mr-4 "></label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="p-2 bg-[#1C1C1C] text-[1.4vh] rounded-xl"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="html">HTML</option>
          </select>
        </div>

        <Split
          className="h-[calc(100vh-150px)]"
          direction="vertical"
          sizes={[60, 40]}
          minSize={60}
        >
          <div className="w-full border-[#dadada7e] border-b-2 border-r-2  overflow-auto">
            <Editor
              className=""
              height="88%"
              defaultValue="const a=1;"
              defaultLanguage="javascript"
              language={language}
              theme="vs-dark"
            />
            <div className="overflow-hidden gap-5  flex-row-reverse flex mr-10">
              <Button className="rounded-xl h-9 w-20 hover:bg-green-700 bg-green-600 p-1 text-white">
                Submit
              </Button>
              <Button className="rounded-xl h-9 w-16 hover:bg-slate-400 bg-slate-500 p-1 text-white">
                Run
              </Button>
            </div>
          </div>
          <div className="w-full px-5 overflow-auto">
            {/* testcase heading */}
            <div className="flex h-10 items-center space-x-6">
              <div className="relative flex h-full flex-col justify-center cursor-pointer">
                <div className="text-sm font-medium leading-5 text-white">
                  Testcases
                </div>
                <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
              </div>
            </div>

            <div className="flex">
              <div className="mr-2 items-start mt-2 ">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div
                    className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
							
									`}
                  >
                    Case {0 + 1}
                  </div>
                </div>
              </div>
            </div>

            <div className="font-semibold my-4">
              <p className="text-sm font-medium mt-4 text-white">Input:</p>
              <div className="w-full example-card cursor-text rounded-lg border  bg-dark-fill-3 border-transparent text-white mt-2">
                <pre className="">Nums=[1,2,3,4]</pre>
              </div>
              <p className="text-sm font-medium mt-4 text-white">Output:</p>
              <div className="w-full example-card cursor-text rounded-lg border bg-dark-fill-3 border-transparent text-white mt-2">
                <pre className="m-0">[0,1]</pre>
              </div>
            </div>
          </div>
        </Split>
      </div>
      {/* <EditorFooter handleSubmit={() => console.log(0)} /> */}
    </div>
  );
};

export default Playground;
