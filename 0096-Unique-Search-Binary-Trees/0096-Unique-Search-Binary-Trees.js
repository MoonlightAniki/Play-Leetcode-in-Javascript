// 96. Unique Binary Search Trees
// https://leetcode.com/problems/unique-binary-search-trees/
/*
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:
Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:
   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n <= 0) {
    return 0;
  }
  const dp = [];
  dp[0] = dp[1] = 1;
  for (let i = 2; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {//左子树的节点个数为j,右子树的节点个数为i-1-j
      dp[i] = (dp[i] || 0) + dp[j] * dp[i - 1 - j];
    }
  }
  return dp[n];
};
console.log(numTrees(3));
// Runtime: 68 ms, faster than 17.77% of JavaScript online submissions for Unique Binary Search Trees.