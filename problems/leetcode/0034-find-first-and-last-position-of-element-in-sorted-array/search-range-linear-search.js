/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let startAns = -1;
  let endAns = -1;

  // do a linear search from the beginning
  let start = 0;
  while (start <= nums.length - 1) {
    if (nums[start] === target) {
      startAns = start;
      break;
    }
    ++start;
  }

  // do a linear search from the end
  let end = nums.length - 1;
  while (end >= 0) {
    if (nums[end] === target) {
      endAns = end;
      break;
    }
    --end;
  }

  return [startAns, endAns];
};
