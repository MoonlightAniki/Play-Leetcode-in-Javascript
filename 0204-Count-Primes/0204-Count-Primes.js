// 204. Count Primes
// https://leetcode.com/problems/count-primes/
/*
Count the number of prime numbers less than a non-negative number, n.
Example:
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n);
  isPrime.fill(true);
  let res = 0;
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      ++res;
      for (let j = 2; j * i < n; ++j) {
        isPrime[j * i] = false;
      }
    }
  }
  return res;
};
console.log(countPrimes(10));
// Runtime: 112 ms, faster than 89.66% of JavaScript online submissions for Count Primes.