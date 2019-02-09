// 938. Range Sum of BST
// https://leetcode.com/problems/range-sum-of-bst/
/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

Note:
The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  sum = 0;
  inorder(root, L, R);
  return sum;
};

let sum;

function inorder(root, L, R) {
  if (!root) {
    return;
  }
  if (root.val < L) {
    inorder(root.right, L, R);
  } else if (root.val > R) {
    inorder(root.left, L, R);
  } else {
    inorder(root.left, L, R);
    sum += root.val;
    inorder(root.right, L, R);
  }
}

/*
Runtime: 200 ms, faster than 36.61% of JavaScript online submissions for Range Sum of BST.
Memory Usage: 52.3 MB, less than 22.82% of JavaScript online submissions for Range Sum of BST.
 */