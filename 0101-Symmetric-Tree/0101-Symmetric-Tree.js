// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3

Note:
Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return isSame(root.left, invert(root.right));
};

function isSame(p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  return p.val === q.val && isSame(p.left, q.left) && isSame(p.right, q.right);
}

function invert(root) {
  if (!root) {
    return root;
  }
  let [left, right] = [root.left, root.right];
  root.left = invert(right);
  root.right = invert(left);
  return root;
}

// Runtime: 60 ms, faster than 99.26% of JavaScript online submissions for Symmetric Tree.