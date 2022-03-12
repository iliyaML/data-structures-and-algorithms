/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
  let result = 0;

  // typical binary search approach (iterative)
  let start = 1;
  let end = n;

  while (start <= end) {
    // calculate midpoint
    // prevent integer overflow
    let mid = start + Math.floor((end - start) / 2);

    // evaluate the number of coins required at the midpoint
    let coins = (mid / 2) * (mid + 1);

    // if it's greater than the total number of coins we have
    if (coins > n) {
      // we shrink the interval from the end
      end = mid - 1;
    } else {
      // if it's equal to or less than the number of coins we have
      // we update our interval from the start
      start = mid + 1;

      // update our result with the largest result we get
      result = Math.max(result, mid);
    }
  }

  return result;
};
