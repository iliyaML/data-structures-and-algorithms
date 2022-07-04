/**
 * Time Complexity: O(n log n), due to sorting
 * Space Complexity: O(n), create a duplicate copy of nums
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // create a copy of nums which will be sorted in ascending order
  let numsCopy = [...nums];
  numsCopy.sort((a, b) => a - b);

  // typical two-pointer approach
  // find num1 and num2 from sorted nums
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    let sum = numsCopy[start] + numsCopy[end];

    if (sum < target) {
      ++start;
    } else if (sum > target) {
      --end;
    } else {
      // if we find a sum that is equal to target
      // we find the correct indices from the original array
      let startIndex = nums.indexOf(numsCopy[start]);
      let endIndex = nums.lastIndexOf(numsCopy[end]);

      return [startIndex, endIndex];
    }
  }

  // return invalid indices if not found
  return [-1, -1];
};
