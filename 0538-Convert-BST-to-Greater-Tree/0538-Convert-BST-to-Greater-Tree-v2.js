// 538. Convert BST to Greater Tree
// https://leetcode.com/problems/convert-bst-to-greater-tree/
/*
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the
original key plus sum of all keys greater than the original key in BST.

Example:
Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13
Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
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
var convertBST = function (root) {
  sum = 0;
  postOrder(root);
  return root;
};

var sum = 0;

function postOrder(root) {
  if (!root) {
    return;
  }
  postOrder(root.right);
  sum += root.val;
  root.val = sum;
  postOrder(root.left);
}


// Runtime: 88 ms, faster than 100.00% of JavaScript online submissions for Convert BST to Greater Tree.