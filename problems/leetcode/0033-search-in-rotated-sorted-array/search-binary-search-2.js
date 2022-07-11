/**
 * Time Complexity: O(log n), binary search
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  // first binary search to find the minimum element
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    // is the midpoint greater than the element at the end?
    // that means the minimim/pivot is in the second half
    if (nums[mid] > nums[end]) {
      // move to the second half
      start = mid + 1;
    } else {
      // move to the first half
      end = mid;
    }
  }

  // minimum value will be at the start once the
  // first binary search ends
  let minimum = nums[start];

  // check if target is equal to minimum
  if (target === minimum) {
    return start;
  }

  // otherwise do our
  // second binary search (traditional)
  let left = 0;
  let right = nums.length - 1;

  // check which portion of the array does
  // target reside in
  if (target <= nums[right]) {
    left = start + 1;
  } else {
    right = start - 1;
  }

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
