import assert from "assert";
import { Problem } from "./types/Problem";

// Starter Code for Best Time to Buy and Sell Stock
const starterCodeBestTimeToBuyAndSellStock = `function maxProfit(prices) {
  // Write your code here
};`;

// Handler Function to Test the User's Solution
const handlerBestTimeToBuyAndSellStock = (fn: any) => {
  try {
    const tests = [
      { input: [7, 1, 5, 3, 6, 4], expected: 5 },
      { input: [7, 6, 4, 3, 1], expected: 0 },
    ];

    tests.forEach(({ input, expected }) => {
      const result = fn(input);
      assert.equal(result, expected);
    });

    return true;
  } catch (error: any) {
    console.log("bestTimeToBuyAndSellStock handler function error:", error);
    throw new Error();
  }
};

// Problem Definition
export const bestTimeToBuyAndSellStock: Problem = {
  difficulty: "Easy",
  id: "best-time-to-buy-and-sell-stock",
  title: "Best Time to Buy and Sell Stock",
  problemStatement: `<p class='mt-3'>
    You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: "prices = [7,1,5,3,6,4]",
      outputText: "5",
      explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
    },
    {
      id: 1,
      inputText: "prices = [7,6,4,3,1]",
      outputText: "0",
      explanation: "In this case, no transactions are done, so the max profit is 0."
    },
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ prices.length ≤ 10^5</code>
  </li>
  <li class='mt-2'>
    <code>0 ≤ prices[i] ≤ 10^4</code>
  </li>`,
  handlerFunction: handlerBestTimeToBuyAndSellStock,
  starterCode: starterCodeBestTimeToBuyAndSellStock,
  order: 9,
  starterFunctionName: "maxProfit(",
  solution: ``,
};
