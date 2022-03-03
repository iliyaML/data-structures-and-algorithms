/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  // initialize our two pointers
  let left = 0;
  let right = 1;
  let l = prices.length;
  let maxP = 0;

  // loop until right is out of bounds
  while (right < l) {
    // is it profitable?
    if (prices[right] > prices[left]) {
      // calculate the profit and update our maxP
      let profit = prices[right] - prices[left];
      maxP = Math.max(maxP, profit);
    } else {
      // if not profitable, move left to right
      left = right;
    }

    // regardless, we always move our right pointer
    ++right;
  }

  // return our max profit
  return maxP;
};
