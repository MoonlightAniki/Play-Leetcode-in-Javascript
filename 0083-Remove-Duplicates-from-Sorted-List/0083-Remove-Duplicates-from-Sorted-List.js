// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let [prev, cur] = [head, head.next];
  while (cur) {
    if (cur.val === prev.val) {
      let delNode = cur;
      cur = cur.next;
      delNode.next = null;
      prev.next = cur;
    } else {
      cur = cur.next;
      prev = prev.next;
    }
  }
  return head;
};
// Runtime: 68 ms, faster than 61.67% of JavaScript online submissions for Remove Duplicates from Sorted List.