/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let maxAverage = -Infinity;
  let sum = 0;

  // sliding window algorithm
  let start = 0;
  for (let end = 0, l = nums.length; end < l; ++end) {
    sum += nums[end];

    if (end - start + 1 === k) {
      let curAverage = sum / k;
      maxAverage = Math.max(maxAverage, curAverage);

      // move the window by deleting element at start from our sum
      // and increment start
      sum -= nums[start];
      ++start;
    }
  }

  return maxAverage;
};
