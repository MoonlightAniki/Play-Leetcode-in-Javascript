// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/
/*
Given a binary tree, return the inorder traversal of its nodes' values.

Example:
Input: [1,null,2,3]
   1
    \
     2
    /
   3
Output: [1,3,2]
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
var inorderTraversal = function (root) {
  const res = [];
  _inorderTraversal(root, res);
  return res;
};

function _inorderTraversal(root, res) {
  if (!root) {
    return;
  }
  _inorderTraversal(root.left, res);
  res.push(root.val);
  _inorderTraversal(root.right, res);
}

// Runtime: 80 ms, faster than 7.01% of JavaScript online submissions for Binary Tree Inorder Traversal.