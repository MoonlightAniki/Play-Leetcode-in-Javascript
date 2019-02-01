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
  const resStack = [];
  let res = '';
  let count = 0;
  for (let c of s) {
    if (isDigit(c)) {
      count = 10 * count + parseInt(c, 10);
    } else if (c === '[') {
      numStack.push(count);
      count = 0;
      resStack.push(res);
      res = '';
    } else if (c === ']') {
      res = resStack.pop() + res.repeat(numStack.pop());
    } else {
      res += c;
    }
  }
  return res;
};

function isDigit(c) {
  return c.charCodeAt() >= '0'.charCodeAt() && c.charCodeAt() <= '9'.charCodeAt();
}

console.log(decodeString('3[a2[c]]') === 'accaccacc');
//Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Decode String.

