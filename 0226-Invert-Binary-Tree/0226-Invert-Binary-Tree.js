// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/
/*
Invert a binary tree.
Example:
Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }

  let leftNode = root.left;
  let rightNode = root.right;

  root.left = invertTree(rightNode);
  root.right = invertTree(leftNode);

  return root;
};
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Invert Binary Tree.