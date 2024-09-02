"use client";
import React from "react";
import Editor from "@monaco-editor/react";

type Props = {};

function Demo({}: Props) {
  return (
    <div className="bg-black">
      <div className="p-36">
        <Editor
          height="40vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme="vs-dark"
        />
      </div>
    </div>
  );
}

export default Demo;
