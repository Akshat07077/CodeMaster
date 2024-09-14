import React, { useState } from "react";
import PlayNav from "./PlayNav";
import Split from "react-split";
import Editor, { Monaco } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Problem } from "../../Problems/types/Problem";
import { twoSum } from "../../Problems/two-sum";

type Props = { problem: Problem };

const Playground: React.FC<Props> = ({ problem }) => {
  const [language, setLanguage] = useState("javascript");
  const [activeTest, setActiveTest] = useState<number>(0);
  const [output, setOutput] = useState<string>("");
  const [editorInstance, setEditorInstance] = useState<any>(null); // Store the editor instance
  const [outputVisible, setOutputVisible] = useState<boolean>(false); // Toggle for output visibility

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  // Capture the editor instance when the editor mounts
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    setEditorInstance(editor);
  };

  // Function to handle the Run button click
  const handleRun = () => {
    if (!editorInstance) return;

    const userCode = editorInstance.getValue(); // Get the code from the editor

    if (language === "javascript") {
      try {
        const fn = new Function(`return ${userCode}`)();
        const testCase = problem.examples[activeTest];
        const result = fn(testCase.inputText);
        setOutput(`Result: ${JSON.stringify(result)}`);
      } catch (error) {
        setOutput(`Error: ${error}`);
      }
    } else if (language === "python") {
      // Handle Python execution
      // fetch("/api/python-execute", { method: "POST", body: userCode })
      //   .then((res) => res.json())
      //   .then((result) => setOutput(result))
      //   .catch((err) => setOutput(`Error: ${err.message}`));
    }
    setOutputVisible(true); // Show the output section
  };

  // Function to handle the Submit button click
  const handleSubmit = () => {
    if (!editorInstance) return;

    const userCode = editorInstance.getValue(); // Get the code from the editor

    if (language === "javascript") {
      try {
        const fn = new Function(`return ${userCode}`)();
        let allTestsPassed = true;

        problem.examples.forEach((testCase) => {
          const result = fn(testCase.inputText);
          if (JSON.stringify(result) !== JSON.stringify(testCase.outputText)) {
            allTestsPassed = false;
          }
        });

        setOutput(allTestsPassed ? "All test cases passed!" : "Some test cases failed.");
      } catch (error) {
        setOutput(`Error: ${error}`);
      }
    } else if (language === "python") {
      // Handle Python testing
      // fetch("/api/python-test", { method: "POST", body: userCode })
      //   .then((res) => res.json())
      //   .then((result) => setOutput(result))
      //   .catch((err) => setOutput(`Error: ${err.message}`));
    }
    setOutputVisible(true); // Show the output section
  };

  // Function to toggle output visibility
  const toggleOutputVisibility = () => {
    setOutputVisible(!outputVisible);
  };

  return (
    <div className="flex flex-col relative">
      <PlayNav />
      <div className="border-[#dadada7e] bg-[#1E1E1E] rounded-xl border-l-2 border-t-2">
        <div className="p-1 h-10">
          <label htmlFor="language-select" className="mr-4"></label>
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
          <div className="w-full border-[#dadada7e] border-b-2 border-r-2 overflow-auto">
            <Editor
              className=""
              height="88%"
              defaultValue={problem.starterCode}
              defaultLanguage={language}
              language={language}
              theme="vs-dark"
              onMount={handleEditorDidMount} // Mount the editor
            />
            <div className="overflow-hidden gap-5 flex-row-reverse flex mr-10">
              <Button
                onClick={handleSubmit}
                className="rounded-xl h-9 w-20 hover:bg-green-700 bg-green-600 p-1 text-white"
              >
                Submit
              </Button>
              <Button
                onClick={handleRun}
                className="rounded-xl h-9 w-16 hover:bg-slate-400 bg-slate-500 p-1 text-white"
              >
                Run
              </Button>
            </div>
          </div>

          <div className="w-full px-5 overflow-auto">
            <div className="font-semibold my-1">
              <p className="text-xs font-medium text-white">Test Cases:</p>
              <div className="flex">
                {problem.examples.map((example, index) => (
                  <div
                    key={example.id}
                    className="mr-2 items-start mt-2"
                    onClick={() => setActiveTest(index)}
                  >
                    <div className="flex flex-wrap items-center p-2 gap-y-4">
                      <div
                        className={`font-medium text-xs bg-gray-500 opacity-85 rounded-xl items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative px-4 py-1 cursor-pointer whitespace-nowrap
                        ${activeTest === index ? "text-white" : "text-black"}
                      `}
                      >
                        Case {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="font-semibold my-1">
                <p className="text-xs font-medium text-white">Input:</p>
                <div className="w-full cursor-text example-card rounded-lg border px-1 bg-dark-fill-3 border-transparent text-white mt-1">
                  <pre>{problem.examples[activeTest].inputText}</pre>
                </div>
                <p className="text-xs font-medium text-white">Output:</p>
                <div className="w-full cursor-text example-card rounded-lg border px-1 bg-dark-fill-3 border-transparent text-white mt-1">
                  <pre>{problem.examples[activeTest].outputText}</pre>
                </div>
              </div>
            </div>
          </div>
        </Split>

        {/* Output section visible on running code */}
        {outputVisible && (
          <div className="absolute top-0 right-0 w-64 p-4 bg-black text-white border border-gray-500 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold">Output</span>
              <button
                className="text-gray-400 hover:text-white"
                onClick={toggleOutputVisibility}
              >
                &times;
              </button>
            </div>
            <div className="mt-2">
              <p>{output}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Playground;
