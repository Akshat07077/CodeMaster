import assert from "assert";
import { Problem } from "./types/Problem";

// Starter Code for Container With Most Water
const starterCodeContainerWithMostWater = `function maxArea(height) {
  // Write your code here
};`;

// Handler Function to Test the User's Solution
const handlerContainerWithMostWater = (fn: any) => {
  try {
    const tests = [
      { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
      { input: [1, 1], expected: 1 },
      { input: [4, 3, 2, 1, 4], expected: 16 },
      { input: [1, 2, 1], expected: 2 },
    ];

    tests.forEach(({ input, expected }) => {
      const result = fn(input);
      assert.strictEqual(result, expected);
    });

    return true;
  } catch (error: any) {
    console.log("containerWithMostWater handler function error:", error);
    throw new Error();
  }
};

// Problem Definition
export const containerWithMostWater: Problem = {
  difficulty: "Medium",
  id: "container-with-most-water",
  title: "Container With Most Water",
  problemStatement: `<p class='mt-3'>
    You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines
    drawn such that the two endpoints of the i-th line are <code>(i, 0)</code> and <code>(i, height[i])</code>.
  </p>
  <p class='mt-3'>
    Find two lines that together with the x-axis form a container, such that the container contains the most water.
    Return the maximum amount of water a container can store.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: "height = [1,8,6,2,5,4,8,3,7]",
      outputText: "49",
    },
    {
      id: 1,
      inputText: "height = [1,1]",
      outputText: "1",
    },
  ],
  constraints: `<li class="mt-2">
    <code>n == height.length</code>
  </li>
  <li class="mt-2">
    <code>2 ≤ n ≤ 10^5</code>
  </li>
  <li class="mt-2">
    <code>0 ≤ height[i] ≤ 10^4</code>
  </li>`,
  handlerFunction: handlerContainerWithMostWater,
  starterCode: starterCodeContainerWithMostWater,
  order: 5,
  starterFunctionName: "maxArea(",
  solution: ``,
};
