/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let left = 0;
  for (let right = 0, l = nums.length; right < l; ++right) {
    // continue to iterate until the number of left points to zero
    if (nums[left] !== 0) {
      ++left;
    } else if (nums[right] !== 0) {
      // if left points to zero, and right is not zero
      // we swap their values and increment left
      nums[left] = nums[right];
      nums[right] = 0;
      ++left;
    }
  }
};
