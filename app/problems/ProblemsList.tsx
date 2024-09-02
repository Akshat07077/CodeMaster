import React, { useEffect, useState } from "react";
import { problems } from "../mockProblems/problems";
import { Circle, EyeIcon, File } from "lucide-react";
import Link from "next/link";

type Props = {};

const ProblemsList: React.FC<Props> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Only render after mounting on the client
  }, []);

  if (!isMounted) return null; // Prevent rendering on the server

  return (
    <div className="max-w-screen-lg mx-auto my-8">
      <table className="w-full text-left table-auto border-collapse">
        <thead className="">
          <tr className="text-gray-400 border-b-2 text-sm border-gray-500">
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Title</th>
            <th className="px py-2">Category</th>
            <th className="px-4 py-2">Difficulty</th>
            <th className=" py-2">Acceptance Rate</th>
            <th className=" py-2">Solution</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {problems.map((problem, idx) => (
            <tr
              key={problem.id}
              className={`${
                idx % 2 == 1
                  ? "bg-dark-layer-1 text-sm"
                  : "bg-dark-layer-2 text-sm"
              }`}
            >
              <td className="px-4 py-2 font-medium whitespace-nowrap text-green-500">
                <Circle />
              </td>
              <td className="px-4 py-2 font-medium">
                <Link
                  href={`/problems/${problem.id}`}
                  className="hover:text-green-500"
                >
                  {problem.order}.{problem.title}
                </Link>
              </td>
              <td className="">{problem.category}</td>

              <td
                className={`px-4 py-2 font-medium ${getDifficultyClass(
                  problem.difficulty
                )}`}
              >
                {problem.difficulty}
              </td>
              <td className="">{problem.acceptance}</td>
              <td className="">
                <EyeIcon color="green" />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Utility function for difficulty
const getDifficultyClass = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "text-[#00B8A3]";
    case "Medium":
      return "text-orange-300";
    case "Hard":
      return "text-red-600";
    default:
      return "";
  }
};

export default ProblemsList;
