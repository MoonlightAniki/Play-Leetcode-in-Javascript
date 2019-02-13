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
  __postorderTraversal(root, res);
  return res;
};

function __postorderTraversal(node, res) {
  if (!node) return;
  __postorderTraversal(node.left, res);
  __postorderTraversal(node.right, res);
  res.push(node.val);
}

/*
Runtime: 68 ms, faster than 39.53% of JavaScript online submissions for Binary Tree Postorder Traversal.
Memory Usage: 33.8 MB, less than 0.57% of JavaScript online submissions for Binary Tree Postorder Traversal.
 */