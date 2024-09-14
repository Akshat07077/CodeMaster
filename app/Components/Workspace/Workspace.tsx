'use client'
import { useState } from "react";
import Split from "react-split";
import Confetti from "react-confetti";
import Description from "./ProblemDesc/Description";
import Playground from "./Playground/Playground";
import { Problem } from "@/app/Components/Problems/types/Problem";  // Adjust the path
import "@uiw/codemirror-theme-vscode";
import useWindowSize from "@/app/hooks/useWindowSize";


type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const { width, height } = useWindowSize();

  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);

  return (
    <Split className="split h-screen" sizes={[40, 60]}>
      {/* Pass the problem data to Description */}
      <Description problem={problem} />
      <div className="bg-[#262626]">
			<div className='bg-dark-fill-2'>
				<Playground setSuccess={setSuccess} problem={problem}  />
				{success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 20} height={height - 10} />}
			</div>
      </div>
    </Split>
  );
};

export default Workspace;
