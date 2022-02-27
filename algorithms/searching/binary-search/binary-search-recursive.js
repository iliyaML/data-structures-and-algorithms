/**
 * Assumes the input array is already sorted
 * Time Complexity: O(log n)
 * Space Complexity: O(log n), recursive call stack
 * @param {*} nums
 * @param {*} target
 * @param {*} start
 * @param {*} end
 * @returns
 */
const binarySearchRecursive = (nums, target, start, end) => {
  // base condition, return false (target not found)
  if (start > end) {
    return -1;
  }

  // evaluate the element in the middle
  // to help avoid integer overflow
  let mid = start + Math.floor((end - start) / 2);

  // there are 3 cases we need to check
  if (nums[mid] === target) {
    // evaluate at the mid point
    return mid;
  } else if (nums[mid] < target) {
    // squeeze the range, modify start
    start = mid + 1;
    return binarySearchRecursive(nums, target, start, end);
  } else {
    // sequeeze the range, modify start
    end = mid - 1;
    return binarySearchRecursive(nums, target, start, end);
  }
};

let nums = [1, 3, 5, 7, 8, 9];
console.log(binarySearchRecursive(nums, 100, 0, nums.length - 1)); // false
console.log(binarySearchRecursive(nums, 9, 0, nums.length - 1)); // true
