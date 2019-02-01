// 394. Decode String
// https://leetcode.com/problems/decode-string/
/*
Given an encoded string, return it's decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k
times. Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat
numbers, k. For example, there won't be input like 3a or 2[4].

Examples:
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const numStack = [];
  const letterStack = [];
  let num = 0;
  for (let c of s) {
    if (isDigit(c)) {
      num = 10 * num + parseInt(c, 10);
    } else if (c === '[') {
      letterStack.push(c);
      numStack.push(num);
      num = 0;
    } else if (c === ']') {
      let cur = '';
      let top = letterStack.pop();
      while (top && top !== '[') {
        cur = top + cur;
        top = letterStack.pop();
      }
      letterStack.push(...cur.repeat(numStack.pop()));
    } else {
      letterStack.push(c);
    }
  }
  return letterStack.join('');
};

function isDigit(c) {
  return c.charCodeAt() >= '0'.charCodeAt() && c.charCodeAt() <= '9'.charCodeAt();
}

console.log(decodeString('3[a]2[bc]') === 'aaabcbc');
console.log(decodeString('3[a2[c]]') === 'accaccacc');
console.log(decodeString('2[abc]3[cd]ef') === 'abcabccdcdcdef');
console.log(decodeString('guoliang') === 'guoliang');
console.log(decodeString('abc3[d]') === 'abcddd');
console.log(decodeString('100[leetcode]') === 'leetcode'.repeat(100));
//Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Decode String.

