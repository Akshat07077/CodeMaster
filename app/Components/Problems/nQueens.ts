import assert from "assert";
import { Problem } from "./types/Problem";

// Starter Code for N Queens
const starterCodeNQueens = `function solveNQueens(n) {
  // Write your code here
};`;

// Handler Function to Test the User's Solution
const handlerNQueens = (fn: any) => {
  try {
    const tests = [
      {
        input: 4,
        expected: [
          [".Q..", "...Q", "Q...", "..Q."],
          ["..Q.", "Q...", "...Q", ".Q.."],
        ],
      },
      {
        input: 1,
        expected: [["Q"]],
      },
    ];

    tests.forEach(({ input, expected }) => {
      const result = fn(input);
      assert.deepStrictEqual(result, expected);
    });

    return true;
  } catch (error: any) {
    console.log("nQueens handler function error:", error);
    throw new Error();
  }
};

// Problem Definition
export const nQueens: Problem = {
  difficulty: "Hard",
  id: "n-queens",
  title: "N Queens",
  problemStatement: `<p class='mt-3'>
    The <strong>n-queens puzzle</strong> is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard
    such that no two queens attack each other.
  </p>
  <p class='mt-3'>
    Given an integer <code>n</code>, return all distinct solutions to the <strong>n-queens puzzle</strong>. You may return the answer in any order.
  </p>
  <p class='mt-3'>
    Each solution contains a distinct board configuration of the n-queens' placement, where <code>'Q'</code> and <code>'.'</code> both indicate a queen and an empty space, respectively.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: "n = 4",
      outputText: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
    },
    {
      id: 1,
      inputText: "n = 1",
      outputText: '[["Q"]]',
    },
  ],
  constraints: `<li class="mt-2">
    <code>1 ≤ n ≤ 9</code>
  </li>`,
  handlerFunction: handlerNQueens,
  starterCode: starterCodeNQueens,
  order: 6,
  starterFunctionName: "solveNQueens(",
  solution: ``,
};
