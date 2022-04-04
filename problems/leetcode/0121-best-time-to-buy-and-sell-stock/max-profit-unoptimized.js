/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0, l = prices.length; i < l; ++i) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};
