/**
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
  // base cases
  if (n == 0 || n == 1) {
    return n;
  }

  // call this recursively
  return fib(n - 1) + fib(n - 2);
};
