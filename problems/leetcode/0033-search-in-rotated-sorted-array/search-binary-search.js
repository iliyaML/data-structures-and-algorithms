/**
 * Time Complexity: O(log n), binary search
 * Space complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let currentValue = nums[mid];

    // immediately return once we found the target
    if (currentValue === target) {
      return mid;
    }

    // otherwise, check these conditions to update
    // start or end
    if (nums[start] <= currentValue) {
      if (target >= nums[start] && target < currentValue) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > currentValue && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};
