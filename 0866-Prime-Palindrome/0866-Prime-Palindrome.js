// 866. Prime Palindrome
// https://leetcode.com/problems/prime-palindrome/
/*
Find the smallest prime palindrome greater than or equal to N.
Recall that a number is prime if it's only divisors are 1 and itself, and it is greater than 1.
For example, 2,3,5,7,11 and 13 are primes.
Recall that a number is a palindrome if it reads the same from left to right as it does from right to left.
For example, 12321 is a palindrome.

Example 1:
Input: 6
Output: 7

Example 2:
Input: 8
Output: 11

Example 3:
Input: 13
Output: 101

Note:
1 <= N <= 10^8
The answer is guaranteed to exist and be less than 2 * 10^8.
 */

/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function (N) {
  for (let i = N; true; ++i) {
    if (isPrime(i) && isPalindrome(i)) {
      return i;
    }
  }
};


function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i * i <= num; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function isPalindrome(num) {
  let str = num.toString();
  for (let i = 0, j = str.length - 1; i < j; ++i , --j) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

console.log(primePalindrome(9989900));

/*
Time Limit Exceeded
 */