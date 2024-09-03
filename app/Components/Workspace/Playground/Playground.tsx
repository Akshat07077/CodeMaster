import React, { useState } from "react";
import PlayNav from "./PlayNav";
import Split from "react-split";
import Editor from "@monaco-editor/react";

type Props = {};

const Playground = (props: Props) => {
  const [language, setLanguage] = useState("javascript");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex flex-col relative">
      <PlayNav />
      <div className="p-4">
        <label htmlFor="language-select" className="mr-4 "></label>
        <select
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
          className="p-3 bg-[#1C1C1C] text-xs rounded-xl"
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
        <div className="w-full overflow-auto">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            language={language}
            theme="vs-dark"
          />
        </div>
        <div className="p-4 text-white">
          <p>Output:</p>
          <pre>{/* Output will be shown here */}</pre>
        </div>
      </Split>
    </div>
  );
};

export default Playground;
