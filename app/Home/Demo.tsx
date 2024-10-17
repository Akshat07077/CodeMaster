"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";

type Props = {};

function Demo({}: Props) {
  const [editorInstance, setEditorInstance] = useState<any>(null); // Store the editor instance
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState(""); // To store the output

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleEditorMount = (editor: any) => {
    setEditorInstance(editor); // Save the editor instance
  };

  const getUserCode = (): string => {
    return editorInstance ? editorInstance.getValue() : "";
  };

  const handleRunCode = () => {
    if (language === "javascript") {
      try {
        const result = eval(getUserCode()); // Use eval only for JS; for demo purpose only, not safe for production
        setOutput(result);
      } catch (error) {
        if (error instanceof Error) {
          setOutput(error.message); // Safely handle known errors
        } else {
          setOutput("An unknown error occurred.");
        }
      }
    } else {
      setOutput("Running code is not supported for this language yet.");
    }
  };

  return (
    <div className="flex w-full bg-[#1E1E1E]">
      {/* Editor Section */}
      <div className="w-1/2 bg-[#1E1E1E]">
        <div className="p-1 text-white h-10">
          <label htmlFor="language-select" className="mr-4"></label>
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
        <div className="w-full h-[45vh] border-[#dadada7e] border-b-2 border-r-2 overflow-auto">
          <Editor
            height="88%"
            defaultValue="console.log('Hello, world!');"
            defaultLanguage="javascript"
            language={language}
            theme="vs-dark"
            onMount={handleEditorMount} // Capture editor instance on mount
          />
          <div className="overflow-hidden gap-5 bg-[#1E1E1E] flex-row-reverse flex mr-10">
            <Button
              className="rounded-xl h-9 w-20 hover:bg-green-700 bg-green-600 p-1 text-white"
              onClick={handleRunCode}
            >
              Run
            </Button>
            <Button className="rounded-xl h-9 w-16 hover:bg-slate-400 bg-slate-500 p-1 text-white">
              Submit
            </Button>
          </div>
        </div>
      </div>

      {/* Output Section */}
      <div className="w-1/2 bg-[#1E1E1E] text-white p-4">
        <h2 className="text-lg mb-4">Output</h2>
        <div className="bg-[#1C1C1C] h-[45vh] border-[#dadada7e] border-b-2 border-l-2 overflow-auto p-4 rounded-xl">
          {output ? <pre>{output}</pre> : <p>No output yet. Run the code to see results.</p>}
        </div>
      </div>
    </div>
  );
}

export default Demo;
