/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  // sort the nums array (ascending)
  nums.sort(function (a, b) {
    return a - b;
  });

  // ensured that the nums array has at least two elements
  let prev = nums[0];
  for (let i = 1, l = nums.length; i < l; ++i) {
    // if the current number is equal to the previous number
    // then we've found our duplicate
    if (nums[i] === prev) {
      return nums[i];
    }

    // otherwise, update prev to our current iteration
    prev = nums[i];
  }

  return -1;
};
