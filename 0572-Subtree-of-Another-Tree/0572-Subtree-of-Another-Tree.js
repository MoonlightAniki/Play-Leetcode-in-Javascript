// 572. Subtree of Another Tree
// https://leetcode.com/problems/subtree-of-another-tree/
/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a
subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could
also be considered as a subtree of itself.

Example 1:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.

Example 2:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (!s) {
    return !t;
  }
  return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isSame(s, t) {
  if (!s && !t) {
    return true;
  }
  if (!s || !t) {
    return false;
  }
  return s.val === t.val && isSame(s.left, t.left) && isSame(s.right, t.right);
}

// Runtime: 80 ms, faster than 91.06% of JavaScript online submissions for Subtree of Another Tree.