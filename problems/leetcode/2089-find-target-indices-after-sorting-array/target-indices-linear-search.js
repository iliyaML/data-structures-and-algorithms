/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) => {
  // sort the array in ascending order
  nums.sort((a, b) => a - b);

  // find indices with nums[i] equal to target
  let results = [];
  for (let i = 0, l = nums.length; i < l; ++i) {
    if (nums[i] === target) {
      results.push(i);
    }
  }

  return results;
};
