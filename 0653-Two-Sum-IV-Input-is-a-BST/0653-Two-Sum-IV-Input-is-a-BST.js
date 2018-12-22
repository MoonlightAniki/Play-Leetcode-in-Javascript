// 653. Two Sum IV - Input is a BST
// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input:
    5
   / \
  3   6
 / \   \
2   4   7
Target = 9
Output: True

Example 2:
Input:
    5
   / \
  3   6
 / \   \
2   4   7
Target = 28
Output: False
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, target) {
  const list = [];
  inorder(root, list);
  if (list.length < 2) {
    return false;
  }
  for (let i = 0, j = list.length - 1; i < j;) {
    let sum = list[i] + list[j];
    if (sum === target) {
      return true;
    } else if (sum < target) {
      ++i;
    } else {
      --j;
    }
  }
  return false;
};

function inorder(root, list) {
  if (!root) {
    return;
  }
  inorder(root.left, list);
  list.push(root.val);
  inorder(root.right, list);
}