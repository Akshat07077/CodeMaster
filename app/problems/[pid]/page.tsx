'use client'
import { usePathname } from "next/navigation";
import { problems } from "@/app/Components/Problems"; // Adjust the path to your problems
import Header from "../Header";
import Workspace from "@/app/Components/Workspace/Workspace";

const ProblemPage = () => {
  const pathname = usePathname();
  
  // Extract problem id from the pathname
  const pid = pathname.split("/").pop();

  if (!pid) return <div>Loading...</div>;

  // Fetch the problem based on pid
  const problem = problems[pid];

  if (!problem) {
    return <div>Problem not found!</div>;
  }

  return <>
  <Header/>
  <Workspace problem={problem} />;
  </>
};

export default ProblemPage;
