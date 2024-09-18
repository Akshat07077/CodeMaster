import assert from "assert";
import { Problem } from "./types/Problem";

// Starter Code for Min Stack
const starterCodeMinStack = `class MinStack {
  constructor() {
    // Initialize stack and min stack
  }
  
  push(val) {
    // Implement push
  }
  
  pop() {
    // Implement pop
  }
  
  top() {
    // Implement top
  }
  
  getMin() {
    // Implement getMin
  }
};`;

// Handler Function to Test the User's Solution
const handlerMinStack = (fn: any) => {
  try {
    const minStack = new fn();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    assert.equal(minStack.getMin(), -3);
    minStack.pop();
    assert.equal(minStack.top(), 0);
    assert.equal(minStack.getMin(), -2);
    return true;
  } catch (error: any) {
    console.log("minStack handler function error:", error);
    throw new Error();
  }
};

// Problem Definition
export const minStack: Problem = {
  difficulty: "Medium",
  id: "min-stack",
  title: "Min Stack",
  problemStatement: `<p class='mt-3'>
    Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: "MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3); minStack.getMin(); minStack.pop(); minStack.top(); minStack.getMin();",
      outputText: "[null, null, null, null, -3, null, 0, -2]",
      explanation: "The stack contains [-2, 0, -3] and the minimum value is -3."
    },
  ],
  constraints: `<li class='mt-2'>
    <code>-2^31 ≤ val ≤ 2^31 - 1</code>
  </li>
  <li class='mt-2'>
    At most <code>3 * 10^4</code> calls will be made to push, pop, top, and getMin.
  </li>`,
  handlerFunction: handlerMinStack,
  starterCode: starterCodeMinStack,
  order: 8,
  starterFunctionName: "MinStack(",
  solution: ``,
};
