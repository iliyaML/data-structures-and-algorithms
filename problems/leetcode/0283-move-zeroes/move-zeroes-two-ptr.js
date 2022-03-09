/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let left = 0;
  for (let right = 0, l = nums.length; right < l; ++right) {
    if (nums[right] !== 0) {
      // swap the values at left and right
      let tmp = nums[right];
      nums[right] = nums[left];
      nums[left] = tmp;
      // move the left pointer
      ++left;
    }
  }
};
