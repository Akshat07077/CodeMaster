"use client";
import { useState } from "react";
import Split from "react-split";
import Description from "./ProblemDesc/Description";
import Playground from "./Playground/Playground";
import "@uiw/codemirror-theme-vscode";

type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);

  return (
    <Split className="split h-screen" sizes={[40, 60]}>
      <Description />
      <div className="bg-[#262626]">
        <Playground />
      </div>
    </Split>
  );
};
export default Workspace;
