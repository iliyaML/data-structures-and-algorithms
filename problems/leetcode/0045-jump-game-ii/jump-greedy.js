/**
 * n = # of elements in nums
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  let result = 0;

  // left and right pointers (initialize to starting index)
  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    let farthestJumpIndex = 0;
    for (let i = left; i <= right; ++i) {
      farthestJumpIndex = Math.max(farthestJumpIndex, i + nums[i]);
    }

    left = right + 1;
    right = farthestJumpIndex;
    ++result;
  }

  return result;
};
