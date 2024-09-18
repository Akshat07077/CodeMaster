import React from 'react';

const categories = [
  {
    title: "Arrays",
    questions: [
      { id: 1, title: "Two Sum", description: "Find two numbers that add up to the target.", link: "/problems/two-sum" },
      { id: 2, title: "Maximum Subarray", description: "Find the contiguous subarray with the maximum sum.", link: "/problems/maximum-subarray" },
      { id: 3, title: "Product of Array Except Self", description: "Calculate the product of all elements except the current element.", link: "/problems/product-of-array-except-self" },
      // Add more array questions
    ],
  },
  {
    title: "Strings",
    questions: [
      { id: 1, title: "Valid Palindrome", description: "Check if a given string is a palindrome.", link: "/problems/valid-palindrome" },
      { id: 2, title: "Longest Substring Without Repeating Characters", description: "Find the length of the longest substring without repeating characters.", link: "/problems/longest-substring-without-repeating-characters" },
      { id: 3, title: "Anagrams", description: "Group anagrams from a list of strings.", link: "/problems/anagrams" },
      // Add more string questions
    ],
  },
  // Add more categories as needed
];

export default function TCSPage() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-white">
        TCS Coding Questions
      </h2>
      {categories.map((category) => (
        <div key={category.title} className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            {category.title}
          </h3>
          <ul className="list-disc pl-5">
            {category.questions.map((question) => (
              <li key={question.id} className="mb-2">
                <a href={question.link} className="text-blue-400 hover:underline">
                  {question.title}
                </a> - {question.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
