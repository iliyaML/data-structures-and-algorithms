/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  let one = 1;
  let two = 1;

  // until n - 1 times
  for (let i = 0; i < n - 1; ++i) {
    let tmp = one;

    // update our variables
    one = one + two;
    two = tmp;
  }

  return one;
};
