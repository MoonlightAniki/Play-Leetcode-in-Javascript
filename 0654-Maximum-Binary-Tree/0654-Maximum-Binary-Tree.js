// 654. Maximum Binary Tree
// https://leetcode.com/problems/maximum-binary-tree/
/*
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    /
     2  0
       \
        1
Note:
The size of the given array will be in the range [1,1000].
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return _constructMaxBinaryTree(nums, 0, nums.length - 1);
};

function _constructMaxBinaryTree(nums, l, r) {
  if (l > r) {
    return null;
  }
  if (l === r) {
    return new ListNode(nums[l]);
  }
  let maxIndex = l;
  for (let i = l + 1; i <= r; ++i) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }
  let root = new ListNode(nums[maxIndex]);
  root.left = _constructMaxBinaryTree(nums, l, maxIndex - 1);
  root.right = _constructMaxBinaryTree(nums, maxIndex + 1, r);
  return root;
}