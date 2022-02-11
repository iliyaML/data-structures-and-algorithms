/**
 * Similar to solving Fibonacci
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  return _dfs(n, 1) + _dfs(n, 2);
};

const _dfs = (target, number) => {
  // base cases
  if (number > target) {
    return 0;
  }

  if (number === target) {
    return 1;
  }

  return _dfs(target, number + 1) + _dfs(target, number + 2);
};
