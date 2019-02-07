// 113. Path Sum II
// https://leetcode.com/problems/path-sum-ii/
/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:
Given the below binary tree and sum = 22,
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1

Return:
[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  res = [];
  __pathSum(root, sum, []);
  return res;
};

let res;

function __pathSum(root, sum, path) {
  if (!root) {
    return;
  }
  if (!root.left && !root.right && root.val === sum) {
    path.push(root.val);
    res.push([...path]);
    path.pop();
    return;
  }
  path.push(root.val);
  __pathSum(root.left, sum - root.val, path);
  __pathSum(root.right, sum - root.val, path);
  path.pop();
}

/*
Runtime: 88 ms, faster than 58.84% of JavaScript online submissions for Path Sum II.
Memory Usage: 18.6 MB, less than 26.32% of JavaScript online submissions for Path Sum II.
 */