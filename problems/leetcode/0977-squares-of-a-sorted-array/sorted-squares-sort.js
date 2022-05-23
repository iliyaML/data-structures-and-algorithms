/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1), modified the data in place
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  nums = nums.map((x) => x * x);

  nums.sort((a, b) => a - b);
  return nums;
};
