// 203. Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/
/*
Remove all elements from a linked list of integers that have value val.

Example:
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
    return head;
  }
  if (head.val === val) {
    return removeElements(head.next, val);
  } else {
    head.next = removeElements(head.next, val);
    return head;
  }
};
// Runtime: 76 ms, faster than 77.54% of JavaScript online submissions for Remove Linked List Elements.