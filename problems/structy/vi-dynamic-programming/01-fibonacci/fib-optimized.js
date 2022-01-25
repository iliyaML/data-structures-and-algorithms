/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {*} n
 * @returns
 */
const fib = (n, memo = new Map()) => {
  // base case
  if (n === 0 || n === 1) {
    return n;
  }

  // if we have the result of fib(n) in our map, return the result
  if (memo.has(n)) {
    return memo.get(n);
  }

  // otherwise, we compute it recursively
  let result = fib(n - 1, memo) + fib(n - 2, memo);

  // save the result in our map
  memo.set(n, result);

  return result;
};

console.log(fib(100));
