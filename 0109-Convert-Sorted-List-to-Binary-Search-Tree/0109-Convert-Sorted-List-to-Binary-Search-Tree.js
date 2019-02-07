// 109. Convert Sorted List to Binary Search Tree
// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
/*
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of
every node never differ by more than 1.

Example:
Given the sorted linked list: [-10,-3,0,5,9],
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
      0
     / \
   -3   9
   /   /
 -10  5
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return new TreeNode(head.val);
  }
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let right = slow.next;
  slow.next = null;
  let left = dummy.next;
  let root = new TreeNode(right.val);
  root.left = sortedListToBST(left);
  root.right = sortedListToBST(right.next);
  return root;
};
/*
Runtime: 100 ms, faster than 17.62% of JavaScript online submissions for Convert Sorted List to Binary Search Tree.
Memory Usage: 19.9 MB, less than 17.95% of JavaScript online submissions for Convert Sorted List to Binary Search Tree.
 */