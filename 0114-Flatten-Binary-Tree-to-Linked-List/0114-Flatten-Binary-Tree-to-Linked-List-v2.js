// 114. Flatten Binary Tree to Linked List
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:
    1
   / \
  2   5
 / \   \
3   4   6

The flattened tree should look like:
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  helper(root);
};

function helper(root) {
  if (!root) {
    return root;
  }
  let leftNode = root.left;
  let rightNode = root.right;
  if (!leftNode && !rightNode) {
    return root;
  }
  root.left = null;
  root.right = helper(leftNode);
  let cur = root;
  while (cur.right) {
    cur=cur.right;
  }
  cur.right = helper(rightNode);
  return root;
}
/*
Runtime: 84 ms, faster than 51.16% of JavaScript online submissions for Flatten Binary Tree to Linked List.
Memory Usage: 16.7 MB, less than 4.54% of JavaScript online submissions for Flatten Binary Tree to Linked List.
 */
