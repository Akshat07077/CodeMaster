import React, { useState, useRef } from "react";
import { Howl } from "howler";
import PlayNav from "./PlayNav";
import Split from "react-split";
import Editor, { Monaco } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Problem } from "../../Problems/types/Problem";

type Props = {
  problem: Problem;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const Playground: React.FC<Props> = ({ problem, setSuccess }) => {
  const [editorInstance, setEditorInstance] = useState<any>(null); // Store the editor instance
  const [language, setLanguage] = useState<string>("javascript");
  const [output, setOutput] = useState<string>("");
  const [activeTest, setActiveTest] = useState<number>(0);
  const [outputVisible, setOutputVisible] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Create the success sound with Howl
  const successSound = new Howl({
    src: '/success.mp3',
    volume: 0.5,
  });

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    setEditorInstance(editor);
  };

  const getUserCode = (): string => {
    if (editorInstance) {
      return editorInstance.getValue();
    }
    return "";
  };

  // Function to handle the Submit button click
  const handleSubmit = () => {
    try {
      setError(null);
      const code = getUserCode(); // Get the code from the editor
      const fn = new Function("return " + code)(); // Create a function from user code
      const result = problem.handlerFunction(fn);

      if (result) {
        setOutput("All test cases passed!");
        setSuccess(true);
        successSound.play(); // Play the success sound

        // Confetti will trigger for 6 seconds and then reset success
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setOutput("Test cases failed.");
      }
    } catch (err) {
      setError((err as Error).message);
      setOutput(`Error: ${(err as Error).message}`);
    }
  };

  const handleRun = () => {
    if (!editorInstance) return;

    const userCode = editorInstance.getValue(); // Get the code from the editor

    if (language === "javascript") {
      try {
        const fn = new Function(`return ${userCode}`)(); // Create a function from user code
        const testCase = problem.examples[activeTest];

        // Extract inputs from the inputText
        const inputRegex = /nums = \[(.*?)\], target = (\d+)/;
        const match = testCase.inputText.match(inputRegex);

        if (match) {
          const nums = match[1].split(',').map(Number); // Convert to array of numbers
          const target = Number(match[2]); // Convert target to number

          // Run the user's function with extracted inputs
          const result = fn(nums, target);
          const expectedOutput = JSON.parse(testCase.outputText);

          // Compare result with expected output
          if (JSON.stringify(result) === JSON.stringify(expectedOutput)) {
            setOutput("Success! Test case passed.");
          } else {
            setOutput(`Failed! Expected: ${JSON.stringify(expectedOutput)}, but got: ${JSON.stringify(result)}`);
          }
        } else {
          setOutput("Error: Could not parse the input text.");
        }
      } catch (error) {
        setOutput(`Error: ${error}`);
      }
    }
  };

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

        <Split className="h-[90vh]" direction="vertical" sizes={[48, 52]} minSize={60}>
          <div className="w-full border-[#dadada7e] border-b-2 border-r-2 overflow-auto">
            <Editor
              height="88%"
              defaultValue={problem.starterCode}
              defaultLanguage={language}
              language={language}
              theme="vs-dark"
              onMount={handleEditorDidMount}
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
                    key={index}
                    className="mr-2 items-start mt-2"
                    onClick={() => setActiveTest(index)}
                  >
                    <div className="flex flex-wrap items-center p-2 gap-y-4">
                      <div
                        className={`font-medium text-xs bg-gray-500 opacity-85 rounded-xl items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative px-4 py-1 cursor-pointer whitespace-nowrap
                        ${activeTest === index ? "text-white" : "text-black"}`}
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

            <button
              onClick={toggleOutputVisibility}
              className="mt-2 rounded-xl bg-slate-500 px-2 py-1 text-white"
            >
              {outputVisible ? "Hide Output" : "Show Output"}
            </button>

            {outputVisible && (
              <div className="output-area">
                <h2 className="font-bold mt-2 text-white">Output:</h2>
                <pre className="text-white">{output}</pre>
              </div>
            )}
          </div>
        </Split>
      </div>
    </div>
  );
};

export default Playground;
