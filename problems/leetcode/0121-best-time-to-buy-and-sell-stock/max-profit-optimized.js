/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1, l = prices.length; i < l; ++i) {
    if (prices[i] > prices[i - 1]) {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    } else {
      minPrice = Math.min(minPrice, prices[i]);
    }
  }

  return maxProfit;
};
