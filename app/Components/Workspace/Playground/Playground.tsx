import React, { useState } from "react";
import { Howl } from "howler";
import PlayNav from "./PlayNav";
import Split from "react-split";
import Editor, { Monaco } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Problem } from "../../Problems/types/Problem";
import { X } from "lucide-react";  // Icon for the close button
import { firestore } from "@/app/firebase/firebase";  // Assuming you've set up Firebase
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore"; // Firestore functions

type Props = {
  problem: Problem;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  userId: any;  // Pass the user's unique ID as a prop
};

const Playground: React.FC<Props> = ({ problem, setSuccess, userId }) => {
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

  const regexPatterns: Record<string, RegExp> = {
    "two-sum": /nums = \[(.*?)\], target = (\d+)/,
    "jump-game": /nums = \[(.*?)\]/,
    // Add more patterns for other problems
  };

  // Function to handle language change
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  // Save the editor instance on mount
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    setEditorInstance(editor);
  };

  // Retrieve the user's code from the editor
  const getUserCode = (): string => {
    return editorInstance ? editorInstance.getValue() : "";
  };

  // Function to update Firestore with solved questions
  const updateDatabaseSolvedQues = async (problemId: string) => {
    try {
      console.log("Updating Firestore with problemId:", problemId);
      console.log("userId:", userId);
      const userRef = doc(firestore, "users", userId);  // Ensure userId is valid here
      const userDoc = await getDoc(userRef);
      console.log("User document retrieved:", userDoc.data());
      

      if (userDoc.exists()) {
        // Update the existing solved problems array
        await updateDoc(userRef, {
          solvedProblems: [...userDoc.data().solvedProblems, problemId],
          lastSolvedAt: new Date().toISOString(),  // Optional: Add timestamp of last solved problem
        });
      } else {
        // If no user data exists, create a new record
        await setDoc(userRef, {
          solvedProblems: [problemId],
          lastSolvedAt: new Date().toISOString(),
        });
      }
    } catch (err) {
      console.error("Error updating the solved questions in the database:", err);
    }
  };

  // Handle the submission of the code
  const handleSubmit = async () => {
    try {
      setError(null);
      const code = getUserCode(); // Get the code from the editor
      const fn = new Function("return " + code)(); // Create a function from user code
      const result = problem.handlerFunction(fn);

      if (result) {
        setOutput("All test cases passed!");
        setSuccess(true);
        successSound.play(); // Play the success sound
        setOutputVisible(true);  // Automatically show the output panel

        // Update Firestore with the solved problem
        await updateDatabaseSolvedQues(problem.id);

        // Confetti will trigger for 5 seconds and then reset success
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setOutput("Test cases failed.");
        setOutputVisible(true);  // Automatically show the output panel
      }
    } catch (err) {
      setError((err as Error).message);
      setOutput(`Error: ${(err as Error).message}`);
      setOutputVisible(true);  // Automatically show the output panel
    }
  };

  // Handle the Run button click, specifically for JavaScript
  const handleRun = () => {
    if (!editorInstance) return;
  
    const userCode = editorInstance.getValue(); // Get the code from the editor
    const pattern = regexPatterns[problem.id]; // Get the regex pattern for the current problem
  
    if (language === "javascript") {
      try {
        const fn = new Function(`return ${userCode}`)(); // Create a function from user code
        const testCase = problem.examples[activeTest];
  
        // Use the correct pattern to extract inputs
        const match = testCase.inputText.match(pattern);
  
        if (match) {
          // Process inputs based on the current problem ID
          if (problem.id === "two-sum") {
            const nums = match[1].split(',').map(Number); // Convert to array of numbers
            const target = Number(match[2]); // Convert target to number
            const result = fn(nums, target);
            const expectedOutput = JSON.parse(testCase.outputText);
  
            if (JSON.stringify(result) === JSON.stringify(expectedOutput)) {
              setOutput("Success! Test case passed.");
            } else {
              setOutput(`Failed! Expected: ${JSON.stringify(expectedOutput)}, but got: ${JSON.stringify(result)}`);
            }
          } else if (problem.id === "jump-game") {
            const nums = match[1].split(',').map(Number); 
            const result = fn(nums);
            const expectedOutput = testCase.outputText === "true";
  
            if (result === expectedOutput) {
              setOutput("Success! Test case passed.");
            } else {
              setOutput(`Failed! Expected: ${expectedOutput}, but got: ${result}`);
            }
          }
          // Handle other problems here
  
          setOutputVisible(true);  // Automatically show the output panel
        } else {
          setOutput("Error: Could not parse the input text.");
          setOutputVisible(true);  // Automatically show the output panel
        }
      } catch (error) {
        setOutput(`Error: ${error}`);
        setOutputVisible(true);  // Automatically show the output panel
      }
    }
  };

  // Close the output panel
  const closeOutput = () => {
    setOutputVisible(false);  // Hide the output panel
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

          <div className="w-full px-5 overflow-auto relative">
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

            {/* Output panel overlay */}
            {outputVisible && (
              <div className="absolute inset-0 bg-[#1E1E1E] rounded-md mt-2 border border-gray-700 text-white p-4">
                <button
                  onClick={closeOutput}
                  className="absolute top-2 right-2 p-5 text-white hover:text-gray-300"
                >
                  <X className="w-5 h-8" /> {/* Cross button */}
                </button>
                <h2 className="font-bold mt-2">Output:</h2>
                <pre>{output}</pre>
              </div>
            )}
          </div>
        </Split>
      </div>
    </div>
  );
};

export default Playground;
