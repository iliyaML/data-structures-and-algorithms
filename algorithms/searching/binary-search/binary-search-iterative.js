// Assumes the input array is already sorted
// Divide and Conquer
// Time Complexity: O(log n)
// Space Complexity: O(1)
const binarySearchIterative = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

let nums = [1, 3, 5, 7, 8, 9];
let target = 5;
console.log(binarySearchIterative(nums, target));
