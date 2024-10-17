import React, { useEffect, useState } from 'react';
import { problems } from "../mockProblems/problems";
import { Circle } from "lucide-react";
import Link from "next/link";

type Props = {
  categoryFilter: string | null; // Accept the filter from the parent component
};

const ProblemsList: React.FC<Props> = ({ categoryFilter }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  useEffect(() => {
    setIsMounted(true); // Only render after mounting on the client
  }, []);

  if (!isMounted) return null; // Prevent rendering on the server

  // Filter the problems by category if a filter is set
  const filteredProblems = categoryFilter
    ? problems.filter(problem => problem.category === categoryFilter)
    : problems;

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the filtered problems array for the current page
  const paginatedProblems = filteredProblems.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProblems.length / itemsPerPage);

  return (
    <div className="max-w-screen-lg mx-auto my-8">
      <table className="w-full text-left table-auto border-collapse">
        <thead>
          <tr className="text-gray-400 border-b-2 text-sm border-gray-500">
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Title</th>
            <th className="px py-2">Category</th>
            <th className="px-4 py-2">Difficulty</th>
            <th className="py-2">Acceptance Rate</th>
            <th className="py-2">Alternate</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {paginatedProblems.map((problem, idx) => (
            <tr
              key={problem.id}
              className={`${
                idx % 2 === 1
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
              <td className="">{problem.alternate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center gap-5 items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-green-700 text-sm text-white rounded-xl disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-white">
          Page <span className="text-green-600">{currentPage}</span> of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-green-700 text-sm text-white rounded-xl disabled:opacity-50"
        >
          Next
        </button>
      </div>
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
