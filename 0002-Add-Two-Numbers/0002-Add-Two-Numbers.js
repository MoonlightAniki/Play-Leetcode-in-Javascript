// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order
and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
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
  if (!l1) return l2;
  if (!l2) return l1;
  let carry = 0;
  let dummy = new ListNode();
  let prev = dummy;
  while (l1 || l2) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    prev.next = new ListNode(sum);
    prev = prev.next;
  }
  if (carry) {
    prev.next = new ListNode(carry);
  }
  return dummy.next;
};

/*
Runtime: 144 ms, faster than 34.85% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 19.6 MB, less than 28.72% of JavaScript online submissions for Add Two Numbers.
 */

// (2 -> 3 -> 4) + (5 -> 6 ->7 )
// 432 + 765 = 1197
// 7 -> 9 -> 1 -> 1

// function listToNumber(head) {
//   let res = 0;
//   let base = 1;
//   while (head) {
//     res += base * head.val;
//     head = head.next;
//     base *= 10;
//   }
//   return res;
// }
//
// function numberToList(num) {
//   if (num === 0) {
//     return new ListNode(0);
//   }
//   let dummy = new ListNode();
//   let prev = dummy;
//   while (num) {
//     let node = new ListNode(num % 10);
//     prev.next = node;
//     prev = node;
//     num = (num / 10) | 0;
//   }
//   return dummy.next;
// }