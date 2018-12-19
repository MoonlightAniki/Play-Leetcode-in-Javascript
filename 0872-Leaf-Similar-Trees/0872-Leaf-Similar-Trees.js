// 872. Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/
/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Note:
Both of the given trees will have between 1 and 100 nodes.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let [leaves1, leaves2] = [[], []];
  inorder(root1, leaves1);
  inorder(root2, leaves2);
  return equals(leaves1, leaves2);
};

/**
 * @param {TreeNode} root
 * @param {number[]} leaves
 */
function inorder(root, leaves) {
  if (root === null) {
    return;
  }
  inorder(root.left, leaves);
  if (root.left === null && root.right === null) {
    leaves.push(root.val);
  }
  inorder(root.right, leaves);
}

function equals(nums1, nums2) {
  if (nums1.length !== nums2.length) {
    return false;
  }
  for (let i = 0; i < nums1.length; ++i) {
    if (nums1[i] !== nums2[i]) {
      return false;
    }
  }
  return true;
}
// Runtime: 56 ms, faster than 91.40% of JavaScript online submissions for Leaf-Similar Trees.