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
  if (!root) {
    return res;
  }
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const top = stack.pop();
    if (!top.left && !top.right) {
      res.push(top.val);
    } else {
      if (top.right) stack.push(top.right);
      stack.push(new TreeNode(top.val));
      if (top.left) stack.push(top.left);
    }
  }
  return res;
};
/*
Runtime: 72 ms, faster than 27.62% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Binary Tree Inorder Traversal.
 */