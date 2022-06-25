/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let val = nums[mid];
    if (val === target) {
      return mid;
    } else if (val > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
