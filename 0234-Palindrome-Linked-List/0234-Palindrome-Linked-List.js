// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
/*
Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true

Follow up:
Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }

  let [slow, fast] = [head, head];
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let rightHead = slow.next;
  slow.next = null;

  let dummyHead = new ListNode(-1);
  while (rightHead) {
    let node = rightHead;
    rightHead = rightHead.next;
    node.next = dummyHead.next;
    dummyHead.next = node;
  }
  rightHead = dummyHead.next;

  while (head && rightHead) {
    if (head.val !== rightHead.val) {
      return false;
    }
    head = head.next;
    rightHead = rightHead.next;
  }
  return true;
};
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Palindrome Linked List.