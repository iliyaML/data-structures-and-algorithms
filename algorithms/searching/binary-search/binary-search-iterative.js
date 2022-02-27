/**
 * Assumes the input array is already sorted
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param {*} nums
 * @param {*} target
 * @param {*} start
 * @param {*} end
 * @returns
 */
const binarySearchIterative = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // to help avoid integer overflow
    let mid = start + Math.floor((end - start) / 2);
    // there are 3 cases we need to check
    if (nums[mid] === target) {
      // evaluate at the mid point
      return mid;
    } else if (nums[mid] < target) {
      // squeeze the range, modify start
      start = mid + 1;
    } else {
      // sequeeze the range, modify start
      end = mid - 1;
    }
  }

  // if we haven't found anything, at this point the element isn't in the input array
  return -1;
};

let nums = [1, 3, 5, 7, 8, 9];
console.log(binarySearchIterative(nums, 100, 0, nums.length - 1)); // -1
console.log(binarySearchIterative(nums, 9, 0, nums.length - 1)); // 5
