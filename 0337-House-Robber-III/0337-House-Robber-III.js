// 337. House Robber III
// https://leetcode.com/problems/house-robber-iii/
/*
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root."
Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in
this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into
on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
Input: [3,2,3,null,3,null,1]
     3
    / \
   2   3
    \   \
     3   1
Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

Example 2:
Input: [3,4,5,1,3,null,1]
     3
    / \
   4   5
  / \   \
 1   3   1
Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
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
 * @return {number}
 */
var rob = function (root) {
  return tryRob(root);
};

function tryRob(root) {
  if (!root) {
    return 0;
  }
  let robIncludeRoot = root.val;
  if (root.left) {
    robIncludeRoot += tryRob(root.left.left) + tryRob(root.left.right);
  }
  if (root.right) {
    robIncludeRoot += tryRob(root.right.left) + tryRob(root.right.right);
  }
  let robExcludeRoot = tryRob(root.left) + tryRob(root.right);
  return Math.max(robIncludeRoot, robExcludeRoot);
}
// Runtime: 1764 ms, faster than 22.22% of JavaScript online submissions for House Robber III.