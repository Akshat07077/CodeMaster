import React, { useState, useEffect } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';

// Type for the problem object
interface Problem {
  examples: { inputText: string }[];
  handlerFunction: (fn: Function) => boolean;
}

// Component for Code Editor and Execution
const CodeEditor: React.FC<{ problem: Problem; activeTest: number }> = ({ problem, activeTest }) => {
	const [editorInstance, setEditorInstance] = useState<any>(null); // Store the editor instance
	const [language, setLanguage] = useState<string>("javascript");
  const [output, setOutput] = useState<string>("");
  const [outputVisible, setOutputVisible] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userCode, setUserCode] = useState<string>("");

  // Handle editor mount
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    setEditorInstance(editor);
  };

  // Get user code from editor
  const getUserCode = (): string => {
    if (editorInstance) {
      return editorInstance.getValue();
    }
    return '';
  };

  // Handle run button click
  const handleRun = () => {
    if (!editorInstance) return;

    const code = getUserCode(); // Get the code from the editor

    if (language === "javascript") {
      try {
        // Safely create and execute a function from the user code
        const fn = new Function('return ' + code)();
        const testCase = problem.examples[activeTest]; // Get the current test case

        if (typeof fn === 'function') {
          const result = fn(testCase.inputText);
          setOutput(`Result: ${JSON.stringify(result)}`);
        } else {
          throw new Error("Invalid function");
        }
      } catch (error) {
        setOutput(`Error: ${error}`);
      }
    }
    setOutputVisible(true); // Show the output section
  };

  // Handle submit button click
  const handleSubmit = () => {
    try {
      setError(null);
      const code = getUserCode(); // Get the code from the editor
      const fn = new Function('return ' + code)(); // Create a function from user code
      const result = problem.handlerFunction(fn);

      if (result) {
        setOutput("All test cases passed!");
      } else {
        setOutput("Test cases failed.");
      }
    } catch (err) {
      setError((err as Error).message);
      setOutput(`Error: ${(err as Error).message}`);
    }
  };

  useEffect(() => {
    setUserCode(getUserCode()); // Update userCode when editor content changes
  }, [editorInstance, problem]);

  return (
    <div>
      <Editor
        height="400px"
        defaultLanguage={language}
        defaultValue="// Write your code here"
        onMount={handleEditorDidMount}
        onChange={() => setUserCode(getUserCode())} // Update userCode on change
      />
      <button className='bg-black' onClick={handleRun}>Run</button>
      <button onClick={handleSubmit}>Submit</button>
      {outputVisible && <div>{output}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default CodeEditor;
