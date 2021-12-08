// Assumes the input array is already sorted
// Divide and Conquer
// Time Complexity: O(log n)
// Space Complexity: O(1)
const binarySearchRecursive = (nums, target, start, end) => {
  // base condition, return false (target not found)
  if (start > end) {
    return false;
  }

  // evaluate the element in the middle
  let mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) {
    return true;
  }

  if (nums[mid] < target) {
    start = mid + 1;
    return binarySearchRecursive(nums, target, start, end);
  } else {
    end = mid - 1;
    return binarySearchRecursive(nums, target, start, end);
  }
};

let nums = [1, 3, 5, 7, 8, 9];
let target = 100;
console.log(binarySearchRecursive(nums, target, 0, nums.length - 1));
