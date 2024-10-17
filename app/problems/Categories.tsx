import React, { useState } from 'react';
import { ArrowUp, ArrowDown } from "lucide-react";

type Props = {
  // onFilterChange: (category: string) => void; // Accept onFilterChange as a prop
};

const categories = [
  "Arrays",
  "Strings",
  "Hash Table",
  "Two Pointers",
  "Binary Tree",
  "Graph",
  "Heap",
  "Dynamic Programming",
  "Backtracking",
  "Sorting",
  "Greedy",
  "Recursion",
  "Linked List",
  "Bit Manipulation",
  "Divide and Conquer",
  "Math",
  "Stack",
  "Queue",
  "Binary Search",
  "Sliding Window",
  "Trie",
];
//{ onFilterChange }
const Categories: React.FC<Props> = () => {
  const [showMore, setShowMore] = useState(false);

  const displayedCategories = showMore ? categories : categories.slice(0, 9);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <div className="flex gap-5">
      <div className="flex items-center justify-center ml-24 mt-10">
        <ul className="flex gap-7 w-[95%] flex-wrap items-center justify-center text-slate-300">
          {displayedCategories.map((category, index) => (
            <li
              key={index}
              className="hover:text-green-500 cursor-pointer"
              // onClick={() => onFilterChange(category)} // Call onFilterChange when a category is clicked
            >
              {category}
            </li>
          ))}
          <button
            className="text-green-500 bg-white font-sans rounded-xl p-2 "
            onClick={toggleShowMore}
          >
            <div className="flex">{showMore ? <ArrowUp /> : <ArrowDown />}</div>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
