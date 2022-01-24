/**
 * Time Complexity: O(2^n)
 * Space Complexity: O(n), size of the recursive call stack
 * @param {*} n
 * @returns
 */
const fib = (n) => {
  // base case
  if (n === 0 || n === 1) {
    return n;
  }

  // compute the fibonacci sequence recursively
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(100));
