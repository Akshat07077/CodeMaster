import { Problem } from "./types/Problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import { groupAnagrams } from "./group-anagram";
import { maxDepthBinaryTree } from "./maximumDepthoTree";
import { containerWithMostWater } from "./containerWithMostWater";
import { nQueens } from "./nQueens";
import { mergeIntervals } from "./mergeIntervels";
import { minStack } from "./minStack";
import { bestTimeToBuyAndSellStock } from "./bestTimeztoBuyuStock";
import { courseSchedule } from "./courseSchedule";
import { palindromeLinkedList } from "./palindromeLL";
import { trappingRainWater } from "./trappingRainWater";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"search-a-2d-matrix": search2DMatrix,
	"valid-parentheses": validParentheses,
	'group-anagrams': groupAnagrams,
	'maximum-depth-of-binary-tree':maxDepthBinaryTree,
	'container-with-most-water':containerWithMostWater,
	'n-queens':nQueens,
	'merge-intervals':mergeIntervals,
	'min-stack': minStack,
	'best-time-to-buy-and-sell-stock': bestTimeToBuyAndSellStock,
	'course-schedule': courseSchedule,
	'palindrome-linked-list': palindromeLinkedList,
	'trapping-rain-water': trappingRainWater,
};
