// 563. Binary Tree Tilt
// https://leetcode.com/problems/binary-tree-tilt/
/*
Given a binary tree, return the tilt of the whole tree.
The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum
of all right subtree node values. Null node has tilt 0.
The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:
Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1

Note:
The sum of node values in any subtree won't exceed the range of 32-bit integer.
All the tilt values won't exceed the range of 32-bit integer.
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
var findTilt = function (root) {
  tilt = 0;
  dfs(root);
  return tilt;
};

var tilt = 0;

function dfs(root) {
  if (!root) {
    return;
  }

  tilt += Math.abs(sum(root.left) - sum(root.right));

  dfs(root.left);
  dfs(root.right);
}

function sum(root) {
  if (!root) {
    return 0;
  }
  return root.val + sum(root.left) + sum(root.right);
}

// Runtime: 92 ms, faster than 28.57% of JavaScript online submissions for Binary Tree Tilt.