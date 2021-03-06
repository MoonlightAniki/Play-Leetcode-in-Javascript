// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/
/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  if (!root) {
    return res;
  }
  const q = [];
  q.push(root);
  while (q.length) {
    const len = q.length;
    const level = [];
    for (let i = 0; i < len; ++i) {
      let front = q.shift();
      level.push(front.val);
      if (front.left) {
        q.push(front.left);
      }
      if (front.right) {
        q.push(front.right);
      }
    }
    res.push(level);
  }
  return res;
};
// Runtime: 56 ms, faster than 99.85% of JavaScript online submissions for Binary Tree Level Order Traversal.