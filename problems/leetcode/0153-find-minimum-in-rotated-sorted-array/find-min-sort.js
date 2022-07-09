/**
 * Time Complexity: O(n log n), due to sorting
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  nums.sort((a, b) => a - b);

  return nums[0];
};
