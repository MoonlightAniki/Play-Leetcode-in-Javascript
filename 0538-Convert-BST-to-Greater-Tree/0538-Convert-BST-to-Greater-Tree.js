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
  const records = [];
  inorder(root, records);

  for (let i = records.length - 2; i >= 0; --i) {
    records[i] += records[i + 1];
  }

  inorder2(root, records);
  return root;
};


function inorder(root, records) {
  if (!root) {
    return;
  }
  inorder(root.left, records);
  records.push(root.val);
  inorder(root.right, records);
}

function inorder2(root, records) {
  if (!root) {
    return;
  }
  inorder2(root.left, records);
  root.val = records.shift();
  inorder2(root.right, records);
}

// Runtime: 92 ms, faster than 81.82% of JavaScript online submissions for Convert BST to Greater Tree.