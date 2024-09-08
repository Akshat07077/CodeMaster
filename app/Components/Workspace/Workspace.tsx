'use client'
import { useState } from "react";
import Split from "react-split";
import Description from "./ProblemDesc/Description";
import Playground from "./Playground/Playground";
import { Problem } from "@/app/Components/Problems/types/Problem";  // Adjust the path
import "@uiw/codemirror-theme-vscode";

type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);

  return (
    <Split className="split h-screen" sizes={[40, 60]}>
      {/* Pass the problem data to Description */}
      <Description problem={problem} />
      <div className="bg-[#262626]">
      <Playground problem={problem} />
      </div>
    </Split>
  );
};

export default Workspace;
