/**
 * Brute force solution, loop through the list twice
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0, l = nums.length; i < l; ++i) {
    let num1 = nums[i];
    // inner loop starts at i + 1
    for (let x = i + 1; x < l; ++x) {
      let num2 = nums[x];
      if (num1 + num2 === target) {
        return [i, x];
      }
    }
  }

  // return empty array if no solution is found
  return [];
};