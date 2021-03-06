// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/
/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:
Input: [1,null,2,3]
   1
    \
     2
    /
   3
Output: [3,2,1]

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
var postorderTraversal = function (root) {
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
      stack.push(new TreeNode(top.val));
      if (top.right) stack.push(top.right);
      if (top.left) stack.push(top.left);
    }
  }
  return res;
};
/*
Runtime: 68 ms, faster than 43.48% of JavaScript online submissions for Binary Tree Postorder Traversal.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Binary Tree Postorder Traversal.
 */