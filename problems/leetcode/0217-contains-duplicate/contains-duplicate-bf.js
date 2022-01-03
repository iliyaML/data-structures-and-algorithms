/**
 * Time Complexity: O(n^2), brute force
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  for (let i = 0, l = nums.length; i < l; ++i) {
    for (let j = i + 1; j < l; ++j) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
