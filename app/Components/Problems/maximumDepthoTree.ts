import assert from "assert";
import { Problem } from "./types/Problem";

// Starter Code for Maximum Depth of Binary Tree
const starterCodeMaxDepth = `function maxDepth(root) {
  // Write your code here
};`;

// Handler Function to Test the User's Solution
const handlerMaxDepth = (fn: any) => {
  try {
    const tests = [
      {
        input: [3, 9, 20, null, null, 15, 7],
        expected: 3,
      },
      {
        input: [1, null, 2],
        expected: 2,
      },
      {
        input: [],
        expected: 0,
      },
      {
        input: [0],
        expected: 1,
      },
    ];

    // Convert input array into binary tree structure
    const buildTree = (arr: any[]) => {
      if (!arr.length || arr[0] === null) return null;

      class TreeNode {
        val: any;
        left: TreeNode | null;
        right: TreeNode | null;
        constructor(val = 0, left = null, right = null) {
          this.val = val;
          this.left = left;
          this.right = right;
        }
      }

      const root = new TreeNode(arr[0]);
      const queue = [root];
      let i = 1;

      while (queue.length && i < arr.length) {
        const current = queue.shift();

        if (arr[i] !== null) {
          current!.left = new TreeNode(arr[i]);
          queue.push(current!.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
          current!.right = new TreeNode(arr[i]);
          queue.push(current!.right);
        }
        i++;
      }

      return root;
    };

    tests.forEach(({ input, expected }) => {
      const treeRoot = buildTree(input);
      const result = fn(treeRoot);
      assert.strictEqual(result, expected);
    });

    return true;
  } catch (error: any) {
    console.log("maxDepth handler function error:", error);
    throw new Error();
  }
};

// Problem Definition
export const maxDepthBinaryTree: Problem = {
  difficulty: "Easy",
  id: "maximum-depth-of-binary-tree",
  title: "Maximum Depth of Binary Tree",
  problemStatement: `<p class='mt-3'>
    Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.
  </p>
  <p class='mt-3'>
    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
  </p>`,
  examples: [
    {
      id: 0,
      inputText: "root = [3, 9, 20, null, null, 15, 7]",
      outputText: "3",
    },
    {
      id: 1,
      inputText: "root = [1, null, 2]",
      outputText: "2",
    },
    {
      id: 2,
      inputText: "root = []",
      outputText: "0",
    },
    {
      id: 3,
      inputText: "root = [0]",
      outputText: "1",
    },
  ],
  constraints: `<li class="mt-2">
    The number of nodes in the tree is in the range <code>[0, 10^4]</code>.
  </li>
  <li class="mt-2">
    <code>-100 ≤ Node.val ≤ 100</code>
  </li>`,
  handlerFunction: handlerMaxDepth,
  starterCode: starterCodeMaxDepth,
  order: 4,
  starterFunctionName: "maxDepth(",
  solution: `function maxDepth(root) {
    if (root === null) {
        return 0; // If the tree is empty, the depth is 0
    }

    // Recursively find the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The maximum depth is 1 (current node) plus the maximum of left and right subtree depths
    return 1 + Math.max(leftDepth, rightDepth);
}
`,
};
