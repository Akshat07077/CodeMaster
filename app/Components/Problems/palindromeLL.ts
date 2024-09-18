import assert from "assert";
import { Problem } from "./types/Problem";

// Starter Code for Palindrome Linked List
const starterCodePalindromeLinkedList = `function isPalindrome(head) {
  // Write your code here
};`;

// Handler Function to Test the User's Solution
const handlerPalindromeLinkedList = (fn: any) => {
  try {
    const tests = [
      { input: [1, 2], expected: false },
      { input: [1, 2, 2, 1], expected: true },
    ];

    tests.forEach(({ input, expected }) => {
      const result = fn(input);
      assert.equal(result, expected);
    });

    return true;
  } catch (error: any) {
    console.log("palindromeLinkedList handler function error:", error);
    throw new Error();
  }
};

// Problem Definition
export const palindromeLinkedList: Problem = {
  difficulty: "Easy",
  id: "palindrome-linked-list",
  title: "Palindrome Linked List",
  problemStatement: `<p class='mt-3'>
    Given the <code>head</code> of a singly linked list, return <code>true</code> if it is a palindrome.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: "head = [1,2]",
      outputText: "false",
    },
    {
      id: 1,
      inputText: "head = [1,2,2,1]",
      outputText: "true",
    },
  ],
  constraints: `<li class='mt-2'>
    The number of nodes in the list is in the range <code>[1, 10^5]</code>.
  </li>
  <li class='mt-2'>
    <code>0 ≤ Node.val ≤ 9</code>
  </li>`,
  handlerFunction: handlerPalindromeLinkedList,
  starterCode: starterCodePalindromeLinkedList,
  order: 11,
  starterFunctionName: "isPalindrome(",
  solution: ``,
};
