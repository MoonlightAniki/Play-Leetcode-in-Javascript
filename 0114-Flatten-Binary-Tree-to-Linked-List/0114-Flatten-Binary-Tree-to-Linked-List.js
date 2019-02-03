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
  if (!root) {
    return;
  }
  const records = [];
  preorder(root, records);
  let newRoot = createLinkedList(records);
  root.val = newRoot.val;
  root.left = newRoot.left;
  root.right = newRoot.right;
};

function preorder(root, records) {
  if (!root) {
    return;
  }
  records.push(root.val);
  preorder(root.left, records);
  preorder(root.right, records);
}

function createLinkedList(records) {
  const dummy = new TreeNode();
  let prev = dummy;
  for (let val of records) {
    prev.right = new TreeNode(val);
    prev = prev.right;
  }
  return dummy.right;
}
/*
Runtime: 92 ms, faster than 13.95% of JavaScript online submissions for Flatten Binary Tree to Linked List.
Memory Usage: 16.7 MB, less than 4.54% of JavaScript online submissions for Flatten Binary Tree to Linked List.
 */
