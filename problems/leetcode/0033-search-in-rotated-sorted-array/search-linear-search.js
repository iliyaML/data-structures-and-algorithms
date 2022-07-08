/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  for (let i = 0, l = nums.length; i < l; ++i) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
};
