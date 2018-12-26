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
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  for (let prev = dummyHead; prev.next;) {
    if (prev.next.val === val) {
      let delNode = prev.next;
      prev.next = delNode.next;
      delNode.next = null;
    } else {
      prev = prev.next;
    }
  }
  return dummyHead.next;
};
// Runtime: 76 ms, faster than 77.54% of JavaScript online submissions for Remove Linked List Elements.