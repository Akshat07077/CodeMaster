'use client'
import { useState } from "react";
import Split from "react-split";
import Confetti from "react-confetti";
import ProblemDescription from "./ProblemDesc/Description";
import Playground from "./Playground/Playground";
import { Problem } from "@/app/Components/Problems/types/Problem";
import "@uiw/codemirror-theme-vscode";
import useWindowSize from "@/app/hooks/useWindowSize";
import { useUser } from '@clerk/clerk-react';

type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  const { width, height } = useWindowSize();
  const { user } = useUser();
  const userId = user?.id;

  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState<any>(false);



  return (
    <Split className="split h-screen" sizes={[40, 60]}>
      {/* Pass the problem data and solved status to ProblemDescription */}
      <ProblemDescription problem={problem} solved={solved} />
      <div className="bg-[#262626]">
        <div className='bg-dark-fill-2'>
          {/* Pass userId, setSuccess, and setSolved to Playground */}
          <Playground userId={userId} setSuccess={setSuccess} setSolved={setSolved} problem={problem} />
          {success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 20} height={height - 10} />}
        </div>
      </div>
    </Split>
  );
};

export default Workspace;
