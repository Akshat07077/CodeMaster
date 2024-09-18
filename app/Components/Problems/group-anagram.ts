import assert from "assert";
import { Problem } from "./types/Problem";

const starterCodeGroupAnagrams = `function groupAnagrams(strs) {
  // Write your code here
};`;
const handlerGroupAnagrams = (fn: any) => {
    try {
      const tests = [
        { input: ["eat", "tea", "tan", "ate", "nat", "bat"], expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] },
        { input: [""], expected: [[""]] },
        { input: ["a"], expected: [["a"]] },
      ];
  
      tests.forEach(({ input, expected }) => {
        // Execute the function with the input
        const result = fn(input);
  
        // Sort both the result and expected values for comparison
        const sortedResult = result.map((group: string[]) => group.sort()).sort();
        const sortedExpected = expected.map((group: string[]) => group.sort()).sort();
  
        // Compare using deepStrictEqual
        assert.deepStrictEqual(sortedResult, sortedExpected);
      });
  
      return true;
    } catch (error: any) {
      console.log("groupAnagrams handler function error:", error);
      throw new Error();
    }
  };
  

export const groupAnagrams: Problem = {
  difficulty: 'Medium',
  id: 'group-anagrams',
  title: 'Group Anagrams',
  problemStatement: `<p class='mt-3'>
    Given an array of strings <code>strs</code>, group the anagrams together. You can return the answer in any order.
  </p>
  <p class='mt-3'>
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: 'strs = ["eat", "tea", "tan", "ate", "nat", "bat"]',
      outputText: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      explanation: 'The strings "eat", "tea", and "ate" are anagrams, and so are "tan" and "nat". "bat" is not an anagram with any other strings.',
    },
    {
      id: 1,
      inputText: 'strs = [""]',
      outputText: '[[""]]',
    },
    {
      id: 2,
      inputText: 'strs = ["a"]',
      outputText: '[["a"]]',
    },
  ],
  constraints: `<li class='mt-2'>
    <code>1 ≤ strs.length ≤ 10^4</code>
  </li> <li class='mt-2'>
    <code>0 ≤ strs[i].length ≤ 100</code>
  </li> <li class='mt-2'>
    <code>strs[i]</code> consists of lowercase English letters.
  </li>`,
  handlerFunction: handlerGroupAnagrams,
  starterCode: starterCodeGroupAnagrams,
  order: 4,
  starterFunctionName: 'groupAnagrams(',
  solution: `function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort the characters of the string
        const sortedStr = str.split('').sort().join('');

        // If the sorted string is already a key, add the original string to the list
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }

        map.get(sortedStr).push(str);
    }

    // Return the grouped anagrams as an array of arrays
    return Array.from(map.values());
}
`
};
