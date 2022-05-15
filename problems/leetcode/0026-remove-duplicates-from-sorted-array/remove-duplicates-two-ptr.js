/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  // two pointer approach
  let start = 1;
  for (let end = 1, l = nums.length; end < l; ++end) {
    // value at end different from start
    if (nums[end] !== nums[start - 1]) {
      // insert at the next available slot and increment start
      nums[start] = nums[end];
      ++start;
    }
  }

  // start represents the number of k elements
  return start;
};
