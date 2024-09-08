import React, { useState } from "react";
import PlayNav from "./PlayNav";
import Split from "react-split";
import Editor from "@monaco-editor/react";
import EditorFooter from "./EditorFooter";
import { Button } from "@/components/ui/button";
import { Problem } from "../../Problems/types/Problem";

type Props = { problem: Problem };

const Playground: React.FC<Props> = ({ problem }) => {
  const [language, setLanguage] = useState("javascript");
  const [activeTest, setActiveTest] = useState<number>(0);

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
            className="p-2 w-24 bg-[#1C1C1C] text-white text-[1.4vh] rounded-xl"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="html">HTML</option>
          </select>
        </div>

        <Split
          className="h-[90vh]"
          direction="vertical"
          sizes={[48, 52]}
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
          <div className='w-full px-5 overflow-auto'>
            {/* testcase heading */}
            <div className='flex h-10 items-center space-x-6'>
              <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                <div className='text-sm font-medium leading-5 text-white'>Testcases</div>
                <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
              </div>
            </div>

            <div className='flex '>
              {problem.examples.map((example, index) => (
                <div
                  className='mr-2 items-start mt-2 '
                  key={example.id}
                  onClick={() => setActiveTest(index)}
                >
                  <div className='flex flex-wrap items-center p-2 gap-y-4'>
                    <div
                      className={`font-medium text-xs bg-gray-500  opacity-85 rounded-xl items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative px-4 py-1 cursor-pointer whitespace-nowrap
                      ${activeTest === index ? "text-white" : "text-black"}
                    `}
                    >
                      Case {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='font-semibold my-1'>
              <p className='text-xs font-medium text-white'>Input:</p>
              <div className='w-full cursor-text example-card rounded-lg border px-1 bg-dark-fill-3 border-transparent text-white mt-1'>
                <pre>{problem.examples[activeTest].inputText}</pre>
              </div>
              <p className='text-xs font-medium text-white'>Output:</p>
              <div className='w-full cursor-text example-card rounded-lg border px-1 bg-dark-fill-3 border-transparent text-white mt-1'>
                <pre>{problem.examples[activeTest].outputText}</pre>
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
