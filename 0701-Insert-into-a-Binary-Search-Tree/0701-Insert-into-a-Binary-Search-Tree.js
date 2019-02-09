// 701. Insert into a Binary Search Tree
// https://leetcode.com/problems/insert-into-a-binary-search-tree/
/*
Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST.
Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can
return any of them.

For example,
Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
You can return this binary search tree:
         4
       /   \
      2     7
     / \   /
    1   3 5
This tree is also valid:
         5
       /   \
      2     7
     / \
    1   3
         \
          4
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  } else if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};
/*
Runtime: 148 ms, faster than 18.07% of JavaScript online submissions for Insert into a Binary Search Tree.
Memory Usage: 23.9 MB, less than 9.65% of JavaScript online submissions for Insert into a Binary Search Tree.
 */