/**
 * n = # of elements in nums
 * Time Complexity: O(n), single for loop
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  // set our current position as 0
  let maxIdx = 0;

  // go through each index from the start
  for (let i = 0, l = nums.length; i < l; ++i) {
    // if at any point our position (maxIdx) is unable
    // to meet the iteration position (i)
    // that means we are unable to jump to the end
    if (maxIdx < i) {
      return false;
    }

    // update our current position
    // take whichever is greater
    maxIdx = Math.max(i + nums[i], maxIdx);

    // if we manage to reach the last index
    // we immediately return
    if (maxIdx >= l - 1) {
      return true;
    }
  }

  // include a return statement to be consistent
  return true;
};
