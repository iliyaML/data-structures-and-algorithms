/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const targetIndices = (nums, target) => {
  let count = 0;
  let lessThan = 0;
  // count how many numbers are equal to target
  // and how manu numbers are less than target
  for (let num of nums) {
    if (num === target) {
      ++count;
    }
    if (num < target) {
      ++lessThan;
    }
  }

  // populate our results
  let results = [];
  for (let i = 0; i < count; ++i) {
    results.push(lessThan++);
  }
  return results;
};
