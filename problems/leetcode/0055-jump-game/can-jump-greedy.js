/**
 * n = # of elements in nums
 * Time Complexity: O(n), single for loop
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  const lastIndex = nums.length - 1;

  // set the goal post to the last index
  let goal = lastIndex;

  // iterate through nums from last index to first index
  for (let i = nums.length - 1; i >= 0; --i) {
    // check if we can reach the goal from
    // current index and our ability to jump (nums[i])
    if (i + nums[i] >= goal) {
      // if so, we move our goal post closer to us
      goal = i;
    }
  }

  // if goal post is zero, we were able to reach
  // the last index from the first index
  return goal === 0;
};
