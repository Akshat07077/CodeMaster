import assert from "assert";
import { Problem } from "./types/Problem";

// Starter Code for Merge Intervals
const starterCodeMergeIntervals = `function merge(intervals) {
  // Write your code here
};`;

// Handler Function to Test the User's Solution
const handlerMergeIntervals = (fn: any) => {
  try {
    const tests = [
      { input: [[1, 3], [2, 6], [8, 10], [15, 18]], expected: [[1, 6], [8, 10], [15, 18]] },
      { input: [[1, 4], [4, 5]], expected: [[1, 5]] },
      { input: [[1, 4], [0, 0]], expected: [[0, 0], [1, 4]] },
      { input: [[1, 4], [2, 3]], expected: [[1, 4]] },
    ];

    tests.forEach(({ input, expected }) => {
      const result = fn(input);
      assert.deepStrictEqual(result, expected);
    });

    return true;
  } catch (error: any) {
    console.log("mergeIntervals handler function error:", error);
    throw new Error();
  }
};

// Problem Definition
export const mergeIntervals: Problem = {
  difficulty: "Medium",
  id: "merge-intervals",
  title: "Merge Intervals",
  problemStatement: `<p class='mt-3'>
    Given an array of intervals where <code>intervals[i] = [start_i, end_i]</code>, merge all overlapping intervals,
    and return an array of the non-overlapping intervals that cover all the intervals in the input.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
      outputText: "[[1,6],[8,10],[15,18]]",
      explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
    },
    {
      id: 1,
      inputText: "intervals = [[1,4],[4,5]]",
      outputText: "[[1,5]]",
      explanation: "Intervals [1,4] and [4,5] are considered overlapping, so they are merged into [1,5].",
    },
  ],
  constraints: `<li class="mt-2">
    <code>1 ≤ intervals.length ≤ 10^4</code>
  </li>
  <li class="mt-2">
    <code>intervals[i].length == 2</code>
  </li>
  <li class="mt-2">
    <code>0 ≤ start_i ≤ end_i ≤ 10^4</code>
  </li>`,
  handlerFunction: handlerMergeIntervals,
  starterCode: starterCodeMergeIntervals,
  order: 7,
  starterFunctionName: "merge(",
  solution: ``,
};
