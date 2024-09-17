export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
	acceptance: string;
	alternate?: string;
};

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "8-k1C6ehKuw",
		acceptance: "55%"
	},
	{
		id: "group-anagrams",
		title: "Group Anagrams",
		difficulty: "Medium",
		category: "Hash Map",
		order: 2,
		videoId: "",
		acceptance: "60%"
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 3,
		videoId: "4qYTqOiRMoM",
		acceptance: "55%"
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 4,
		videoId: "",
		acceptance: "55%"
	},
	{
		id: "n-queens",
		title: "N Queens",
		difficulty: "Hard",
		category: "Backtracking",
		order: 5,
		videoId: "",
		acceptance: "42%"
	},
	{
		id: "palindrome-linked-list",
		title: "Palindrome Linked List",
		difficulty: "Easy",
		category: "Linked List",
		order: 6,
		videoId: "",
		acceptance: "72%"
	},
	{
		id: "course-schedule",
		title: "Course Schedule",
		difficulty: "Medium",
		category: "Graph",
		order: 7,
		videoId: "",
		acceptance: "57%"
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 8,
		videoId: "",
		acceptance: "55%"
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Medium",
		category: "Binary Search",
		order: 9,
		videoId: "ZfFl4torNg4",
		acceptance: "55%"
	},
	{
		id: "min-stack",
		title: "Min Stack",
		difficulty: "Medium",
		category: "Stack",
		order: 10,
		videoId: "",
		acceptance: "58%"
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Medium",
		category: "Intervals",
		order: 11,
		videoId: "",
		acceptance: "55%"
	},
	{
		id: "trapping-rain-water",
		title: "Trapping Rain Water",
		difficulty: "Hard",
		category: "Two Pointers",
		order: 12,
		videoId: "",
		acceptance: "48%"
	},
	{
		id: "jump-game",
		title: "Jump Game",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 13,
		videoId: "",
		acceptance: "55%"
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		difficulty: "Hard",
		category: "Linked List",
		order: 14,
		videoId: "",
		acceptance: "75%"
	},
	{
		id: "product-of-array-except-self",
		title: "Product of Array Except Self",
		difficulty: "Medium",
		category: "Array",
		order: 15,
		videoId: "",
		acceptance: "61%"
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 16,
		videoId: "xty7fr-k0TU",
		acceptance: "55%"
	},
	{
		id: "spiral-matrix",
		title: "Spiral Matrix",
		difficulty: "Medium",
		category: "Matrix",
		order: 17,
		videoId: "",
		acceptance: "60%"
	},
	{
		id: "find-first-and-last-position-of-element-in-sorted-array",
		title: "Find First and Last Position of Element in Sorted Array",
		difficulty: "Medium",
		category: "Array",
		order: 18,
		videoId: "",
		acceptance: "53%"
	},
	{
		id: "move-zeroes",
		title: "Move Zeroes",
		difficulty: "Easy",
		category: "Array",
		order: 19,
		videoId: "",
		acceptance: "66%"
	},
	{
		id: "binary-tree-level-order-traversal",
		title: "Binary Tree Level Order Traversal",
		difficulty: "Medium",
		category: "Tree",
		order: 20,
		videoId: "",
		acceptance: "63%"
	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Medium",
		category: "Backtracking",
		order: 21,
		videoId: "",
		acceptance: "55%"
	},
	{
		id: "sliding-window-maximum",
		title: "Sliding Window Maximum",
		difficulty: "Hard",
		category: "Deque",
		order: 22,
		videoId: "",
		acceptance: "40%"
	},
	{
		id: "combination-sum",
		title: "Combination Sum",
		difficulty: "Medium",
		category: "Backtracking",
		order: 23,
		videoId: "",
		acceptance: "61%"
	},
	{
		id: "fibonacci-number",
		title: "Fibonacci Number",
		difficulty: "Easy",
		category: "Recursion",
		order: 24,
		videoId: "",
		acceptance: "69%"
	},
	{
		id: "word-ladder",
		title: "Word Ladder",
		difficulty: "Hard",
		category: "Graph",
		order: 25,
		videoId: "",
		acceptance: "29%"
	},
	{
		id: "longest-common-prefix",
		title: "Longest Common Prefix",
		difficulty: "Easy",
		category: "String",
		order: 26,
		videoId: "",
		acceptance: "57%"
	},
	{
		id: "three-sum",
		title: "Three Sum",
		difficulty: "Medium",
		category: "Array",
		order: 27,
		videoId: "",
		acceptance: "62%"
	},
	{
		id: "coin-change",
		title: "Coin Change",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 28,
		videoId: "",
		acceptance: "58%"
	},
	{
		id: "permutations",
		title: "Permutations",
		difficulty: "Medium",
		category: "Backtracking",
		order: 29,
		videoId: "",
		acceptance: "62%"
	},
	{
		id: "minimum-window-substring",
		title: "Minimum Window Substring",
		difficulty: "Hard",
		category: "String",
		order: 30,
		videoId: "",
		acceptance: "38%"
	},
	{
		id: "edit-distance",
		title: "Edit Distance",
		difficulty: "Hard",
		category: "Dynamic Programming",
		order: 31,
		videoId: "",
		acceptance: "33%"
	},
	{
		id: "longest-palindromic-substring",
		title: "Longest Palindromic Substring",
		difficulty: "Medium",
		category: "String",
		order: 32,
		videoId: "",
		acceptance: "37%"
	},
	{
		id: "find-median-from-data-stream",
		title: "Find Median from Data Stream",
		difficulty: "Hard",
		category: "Heap",
		order: 33,
		videoId: "",
		acceptance: "46%"
	},
	{
		id: "reverse-linked-list-ii",
		title: "Reverse Linked List II",
		difficulty: "Medium",
		category: "Linked List",
		order: 34,
		videoId: "",
		acceptance: "60%"
	},
	{
		id: "longest-substring-without-repeating-characters",
		title: "Longest Substring Without Repeating Characters",
		difficulty: "Medium",
		category: "String",
		order: 35,
		videoId: "",
		acceptance: "33%"
	},
	{
		id: "two-sum-ii-input-array-is-sorted",
		title: "Two Sum II - Input Array Is Sorted",
		difficulty: "Easy",
		category: "Array",
		order: 36,
		videoId: "",
		acceptance: "55%"
	},
	{
		id: "find-first-and-last-position-of-element-in-sorted-array",
		title: "Find First and Last Position of Element in Sorted Array",
		difficulty: "Medium",
		category: "Array",
		order: 37,
		videoId: "",
		acceptance: "53%"
	},
	{
		id: "maximum-subarray",
		title: "Maximum Subarray",
		difficulty: "Easy",
		category: "Dynamic Programming",
		order: 38,
		videoId: "",
		acceptance: "60%"
	},
	{
		id: "search-in-rotated-sorted-array",
		title: "Search in Rotated Sorted Array",
		difficulty: "Medium",
		category: "Binary Search",
		order: 39,
		videoId: "",
		acceptance: "41%"
	},
	{
		id: "binary-tree-maximum-path-sum",
		title: "Binary Tree Maximum Path Sum",
		difficulty: "Hard",
		category: "Tree",
		order: 40,
		videoId: "",
		acceptance: "26%"
	}
];
