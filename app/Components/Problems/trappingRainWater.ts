import assert from "assert";
import { Problem } from "./types/Problem";

// Starter Code for Trapping Rain Water
const starterCodeTrappingRainWater = `function trap(height) {
  // Write your code here
};`;

// Handler Function to Test the User's Solution
const handlerTrappingRainWater = (fn: any) => {
  try {
    const tests = [
      { input: [0,1,0,2,1,0,1,3,2,1,2,1], expected: 6 },
      { input: [4,2,0,3,2,5], expected: 9 },
    ];

    tests.forEach(({ input, expected }) => {
      const result = fn(input);
      assert.equal(result, expected);
    });

    return true;
  } catch (error: any) {
    console.log("trappingRainWater handler function error:", error);
    throw new Error();
  }
};

// Problem Definition
export const trappingRainWater: Problem = {
  difficulty: "Hard",
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  problemStatement: `<p class='mt-3'>
    Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
      outputText: "6",
      explanation: "The water trapped is 6 units."
    },
    {
      id: 1,
      inputText: "height = [4,2,0,3,2,5]",
      outputText: "9",
      explanation: "The water trapped is 9 units."
    },
  ],
  constraints: `<li class='mt-2'>
    <code>n == height.length</code>
  </li>
  <li class='mt-2'>
    <code>1 ≤ n ≤ 2 * 10^4</code>
  </li>
  <li class='mt-2'>
    <code>0 ≤ height[i] ≤ 10^5</code>
  </li>`,
  handlerFunction: handlerTrappingRainWater,
  starterCode: starterCodeTrappingRainWater,
  order: 12,
  starterFunctionName: "trap(",
  solution: ``,
};
