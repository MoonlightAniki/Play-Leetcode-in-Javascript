// 445. Add Two Numbers II
// https://leetcode.com/problems/add-two-numbers-ii/
/*
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first
and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  const stack1 = [];
  const stack2 = [];
  getNumbers(l1, stack1);
  getNumbers(l2, stack2);
  let dummyHead = new ListNode(-1);
  let carry = 0;
  while (stack1.length || stack2.length) {
    let sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry;
    let node = new ListNode(sum % 10);
    carry = (sum / 10) | 0;

    node.next = dummyHead.next;
    dummyHead.next = node;
  }
  if (carry) {
    let node = new ListNode(1);
    node.next = dummyHead.next;
    dummyHead.next = node;
  }
  return dummyHead.next;
};

function getNumbers(head, stack) {
  for (let cur = head; cur; cur = cur.next) {
    stack.push(cur.val);
  }
}

// Runtime: 116 ms, faster than 80.58% of JavaScript online submissions for Add Two Numbers II.