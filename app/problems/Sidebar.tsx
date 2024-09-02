import React from "react";

const Sidebar = () => {
  // Mock data for trending companies
  const trendingCompanies = [
    { name: "Meta", count: 834 },
    { name: "Amazon", count: 1684 },
    { name: "Microsoft", count: 905 },
    { name: "TikTok", count: 381 },
    { name: "Goldman Sachs", count: 201 },
    { name: "Uber", count: 655 },
    { name: "Google", count: 1555 },
    { name: "Apple", count: 795 },
    { name: "Oracle", count: 258 },
    { name: "Bloomberg", count: 822 },
    { name: "Adobe", count: 794 },
    { name: "LinkedIn", count: 138 },
    { name: "PayPal", count: 87 },
    // Add more companies as needed
  ];
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
  ];

  return (
    <div className=" flex gap-10 flex-col">
      <div className="w-64  p-4 text-white bg-dark-layer-1 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Trending Topics</h2>
        <ul>
          {trendingCompanies.map((company, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span className="text-sm">{company.name}</span>
              <span className="bg-orange-600 rounded-full px-2 py-1 text-xs">
                {company.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-64 p-4 text-white bg-dark-layer-1 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Trending Companies</h2>
        <ul>
          {trendingCompanies.map((company, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span className="text-sm">{company.name}</span>
              <span className="bg-orange-600 rounded-full px-2 py-1 text-xs">
                {company.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
