/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let l = nums.length;
  let i = 0;

  while (i < l) {
    if (nums[i] === val) {
      // swap current value with one at the end
      nums[i] = nums[l - 1];
      // decrease the size index
      --l;
    } else {
      // increment the index
      ++i;
    }
  }

  return l;
};
