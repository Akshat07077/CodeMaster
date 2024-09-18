import assert from "assert";
import { Problem } from "./types/Problem";

// Starter Code for Course Schedule
const starterCodeCourseSchedule = `function canFinish(numCourses, prerequisites) {
  // Write your code here
};`;

// Handler Function to Test the User's Solution
const handlerCourseSchedule = (fn: any) => {
  try {
    const tests = [
      { input: [2, [[1, 0]]], expected: true },
      { input: [2, [[1, 0], [0, 1]]], expected: false },
    ];

    tests.forEach(({ input, expected }) => {
      const result = fn(input[0], input[1]);
      assert.equal(result, expected);
    });

    return true;
  } catch (error: any) {
    console.log("courseSchedule handler function error:", error);
    throw new Error();
  }
};

// Problem Definition
export const courseSchedule: Problem = {
  difficulty: "Medium",
  id: "course-schedule",
  title: "Course Schedule",
  problemStatement: `<p class='mt-3'>
    There are a total of <code>numCourses</code> courses you have to take, labeled from <code>0</code> to <code>numCourses - 1</code>.
    You are given an array <code>prerequisites</code> where <code>prerequisites[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you must take course <code>b<sub>i</sub></code> before course <code>a<sub>i</sub></code>.
    Return <code>true</code> if you can finish all courses. Otherwise, return <code>false</code>.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: "numCourses = 2, prerequisites = [[1,0]]",
      outputText: "true",
      explanation: "There are a total of 2 courses to take. To take course 1, you need to complete course 0 first."
    },
    {
      id: 1,
      inputText: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
      outputText: "false",
      explanation: "There is a cycle between course 0 and course 1, making it impossible to finish all courses."
    },
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ numCourses ≤ 2000</code>
  </li>
  <li class='mt-2'>
    <code>0 ≤ prerequisites.length ≤ 5000</code>
  </li>
  <li class='mt-2'>
    <code>prerequisites[i].length == 2</code>
  </li>`,
  handlerFunction: handlerCourseSchedule,
  starterCode: starterCodeCourseSchedule,
  order: 10,
  starterFunctionName: "canFinish(",
  solution: ``,
};
