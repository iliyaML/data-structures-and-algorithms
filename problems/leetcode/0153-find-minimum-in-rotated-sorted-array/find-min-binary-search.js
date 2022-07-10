/**
 * Time Complexity: O(log n), binary search
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    // is the value at the midpoint greater than
    // the value at the end?
    if (nums[mid] > nums[end]) {
      // then the min value must be in the second half
      start = mid + 1;
    } else {
      // otherwise we go to the first half
      end = mid;
    }
  }

  // at this point, start and end points to the same value
  return nums[start];
};
