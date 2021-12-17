/**
 * Divide and Conquer
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // evaluate element at the middle index
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // squeeze the boundaries
      start = mid + 1;
    } else {
      // squeeze the boundaries
      end = mid - 1;
    }
  }

  // if start is greater than end, this means we have not found the target element
  return -1;
};
