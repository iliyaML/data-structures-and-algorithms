/**
 * Time Complexity: O(n log n), from sorting
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  nums.sort();
  for (let i = 1, l = nums.length; i < l; ++i) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
};
