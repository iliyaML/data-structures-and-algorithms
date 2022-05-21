/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = (nums) => {
  // assume cases are true for descending and ascending
  let decreasing = true;
  let increasing = true;

  for (let i = 1, l = nums.length; i < l; ++i) {
    // check if it violates increasing
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }

    // check if it violates decreasing
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }

    // if at any point, both increasing and decreasing are false
    // immediately return false
    // we no longer have to check the remaining items in the array
    if (!increasing && !decreasing) {
      return false;
    }
  }

  return true;
};
