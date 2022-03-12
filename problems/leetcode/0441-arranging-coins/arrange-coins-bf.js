/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
  // counter to count how many steps we've made
  // start at 1
  let i = 1;

  // run this until we run out of coins
  while (n > 0) {
    // update our coins once we've used it
    n = n - i;

    // if it's still non-negative, we update our counter
    if (n >= 0) {
      ++i;
    }
  }

  // at this point, our counter is more than 1
  // so we subtract 1 from it and return
  return i - 1;
};
