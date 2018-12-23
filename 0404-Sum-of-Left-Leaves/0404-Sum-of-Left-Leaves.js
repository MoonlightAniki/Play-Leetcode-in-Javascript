// 404. Sum of Left Leaves
// https://leetcode.com/problems/sum-of-left-leaves/
/*
Find the sum of all left leaves in a given binary tree.

Example:
    3
   / \
  9  20
    /  \
   15   7
There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  sum = 0;
  dfs(root);
  return sum;
};

var sum = 0;

function dfs(root) {
  if (!root) {
    return;
  }
  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val;
  }
  dfs(root.left);
  dfs(root.right);
}

// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for Sum of Left Leaves.