/**
 * Brute force solution, loop through the list twice
 * n = # of elements in nums
 * Time Complexity: O(n^2), nested for loops
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0, l = nums.length; i < l; ++i) {
    // assume this is the first number
    let num1 = nums[i];

    // inner loop starts at i + 1
    // try to get the second number
    for (let x = i + 1; x < l; ++x) {
      let num2 = nums[x];
      if (num1 + num2 === target) {
        return [i, x];
      }
    }
  }

  // return invalid indices if not found
  return [-1, -1];
};
