// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/
/*
Given a binary tree, return the preorder traversal of its nodes' values.

Example:
Input: [1,null,2,3]
   1
    \
     2
    /
   3
Output: [1,2,3]

Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  __preorderTraversal(root, res);
  return res;
};

function __preorderTraversal(root, res) {
  if (!root) {
    return;
  }
  res.push(root.val);
  __preorderTraversal(root.left, res);
  __preorderTraversal(root.right, res);
}

// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Binary Tree Preorder Traversal.